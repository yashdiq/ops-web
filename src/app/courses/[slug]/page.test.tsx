/**
 * @jest-environment node
 */

import WebSocket from "ws";

jest.setTimeout(300000);

async function openWebSocket(url: string): Promise<WebSocket> {
  return new Promise((resolve, reject) => {
    const ws = new WebSocket(url);
    ws.on("open", () => resolve(ws));
    ws.on("error", (err) => reject(err));
  });
}

async function batchOpenConnections(
  totalConnections: number,
  batchSize: number,
  delayMs: number = 500
): Promise<WebSocket[]> {
  const connections: WebSocket[] = [];
  let failedConnections = 0;

  for (let i = 0; i < totalConnections; i += batchSize) {
    const currentBatch: Promise<WebSocket | number>[] = [];
    for (let j = i; j < i + batchSize && j < totalConnections; j++) {
      const wsUrl = `ws://127.0.0.1:8000/ws/terminal/learn-the-command-line-configuring-the-environment`;
      currentBatch.push(openWebSocket(wsUrl).catch(() => failedConnections++));
    }

    try {
      const batchConnections = await Promise.allSettled(currentBatch);
      const successful = batchConnections
        .filter((result) => result.status === "fulfilled")
        .map((result) => (result as PromiseFulfilledResult<WebSocket>).value);

      connections.push(...successful);
      console.log(
        `Opened ${connections.length} connections (${failedConnections} failed)`
      );
    } finally {
      await new Promise((resolve) => setTimeout(resolve, delayMs));
    }
  }

  return connections;
}

afterAll(async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000));
});

describe("Terminal WebSocket Load Test - Batching", () => {
  test("should open 10,000 WebSocket connections in batches", async () => {
    const totalConnections = 10000;
    const batchSize = 500;

    const wsInstances = await batchOpenConnections(totalConnections, batchSize);
    expect(wsInstances.length).toBe(totalConnections);

    const closePromises = wsInstances.map((ws) => {
      return new Promise<void>((resolve) => {
        ws.on("close", resolve);
        ws.close();
      });
    });
    await Promise.all(closePromises);
  });
});

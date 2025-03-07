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
  delayMs: number = 200
): Promise<WebSocket[]> {
  const connections: WebSocket[] = [];
  for (let i = 0; i < totalConnections; i += batchSize) {
    const currentBatch: Promise<WebSocket>[] = [];
    for (let j = i; j < i + batchSize && j < totalConnections; j++) {
      const wsUrl = `ws://127.0.0.1:8000/ws/terminal/test-${j}/`;
      currentBatch.push(openWebSocket(wsUrl));
    }
    try {
      const batchConnections = await Promise.all(currentBatch);
      connections.push(...batchConnections);
      console.log(
        `Opened ${connections.length} of ${totalConnections} connections`
      );
    } catch (err) {
      console.error("Error opening a batch of connections", err);
      throw err;
    }

    await new Promise((resolve) => setTimeout(resolve, delayMs));
  }
  return connections;
}

describe("Terminal WebSocket Load Test - Batching", () => {
  test("should open 10,000 WebSocket connections in batches", async () => {
    const totalConnections = 2000;
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

"use client";

import React, { useEffect, useRef } from "react";
import { Terminal } from "@xterm/xterm";
import { FitAddon } from "@xterm/addon-fit";
import "@xterm/xterm/css/xterm.css";

interface ITerminalSocket {
  session: string;
}

const TerminalSocket: React.FC<ITerminalSocket> = ({ session }) => {
  const terminalRef = useRef<HTMLDivElement>(null);
  const terminal = useRef<Terminal | null>(null);
  const fitAddon = useRef<FitAddon | null>(null);
  const ws = useRef<WebSocket | null>(null);

  useEffect(() => {
    if (!terminal.current) {
      terminal.current = new Terminal({
        cursorBlink: true,
        allowProposedApi: true,
        theme: {
          background: "#1e1e1e",
          foreground: "#ffffff",
        },
      });

      fitAddon.current = new FitAddon();
      terminal.current.loadAddon(fitAddon.current);

      setTimeout(() => {
        if (terminalRef.current) {
          terminal.current?.open(terminalRef.current);
          fitAddon.current?.fit();

          requestAnimationFrame(() => {
            fitAddon.current?.fit();
            terminal.current?.refresh(0, terminal.current.rows - 1);
          });
        }
      }, 10);

      terminal.current.writeln("Welcome to the jungle...");
    }

    const resizeHandler = () => {
      requestAnimationFrame(() => {
        fitAddon.current?.fit();
        terminal.current?.refresh(0, terminal.current.rows - 1);
      });
    };

    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
      terminal.current?.dispose();
      terminal.current = null;
    };
  }, []);

  useEffect(() => {
    if (!terminal.current) return;

    ws.current = new WebSocket(`ws://127.0.0.1:8000/ws/terminal/${session}/`);

    const currentWS = ws.current;
    const currentTerminal = terminal.current;

    currentWS.onopen = () => {
      fitAddon.current?.fit();
      currentTerminal.focus();
    };

    currentWS.onmessage = (event) => {
      currentTerminal.write(event.data);
    };

    currentTerminal.onData((data) => {
      if (currentWS.readyState === WebSocket.OPEN) {
        currentWS.send(data);
      }
    });

    return () => {
      if (currentWS.readyState === WebSocket.OPEN) {
        currentWS.close();
      }
    };
  }, [session]);

  return <div ref={terminalRef} id="terminal-box" className="h-full w-full" />;
};

export default TerminalSocket;

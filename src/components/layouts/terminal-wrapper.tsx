"use client";

import dynamic from "next/dynamic";

const TerminalSocket = dynamic(
  () => import("@app/components/molecules/terminal-socket"),
  {
    ssr: false,
    loading: () => (
      <div className="h-[500px] w-full bg-gray-900 text-white flex items-center justify-center">
        Initializing terminal...
      </div>
    ),
  }
);

const TerminalWrapper = ({ session }: { session: string }) => {
  return <TerminalSocket session={session} />;
};

export default TerminalWrapper;

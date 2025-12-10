"use client";

import { motion } from "framer-motion";

const leftBlocks = [
  { title: "Market Data", hasLine: true, hasIcons: true },
  { title: "AI Agents GPT", hasLine: true },
  { title: "AI Agents Core", hasLine: false },
  { title: "Feature Engineering", hasLine: false },
];

const rightBlocks = [
  { title: "Strategy Dashboard", hasLine: false },
  { title: "Trade Control Panel", hasLine: true, highlight: true },
  { title: "Reporting & Journaling", hasLine: true },
  { title: "Continuous Learning", hasLine: false },
  { title: "Security & Governance", hasLine: false },
];

export default function CoreDiagram() {
  return (
    <div className="min-h-screen bg-[#020712] text-white flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-6xl mx-auto relative">
        {/* TOP */}
        <div className="flex flex-col items-center gap-4 mb-12">
          <div className="rounded-2xl border border-cyan-400/70 px-10 py-3 text-sm tracking-[0.3em] uppercase">
            MCP Gateway
          </div>
          <div className="rounded-2xl border border-cyan-400/70 px-8 py-3 text-xs md:text-sm text-center">
            <p className="font-semibold text-[#19E3FF] mb-1">
              Security &amp; Auth
            </p>
            <p className="text-gray-200">Rate-Limiter | Observability</p>
          </div>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-[1.1fr_1.2fr_1.1fr] gap-10 items-center relative">
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-4">
            <p className="text-xs tracking-[0.3em] uppercase text-gray-300 mb-1">
              Data Collection
            </p>

            {leftBlocks.map((item) => (
              <div key={item.title} className="relative">
                <div className="rounded-3xl border border-cyan-500/60 bg-transparent px-5 py-3 flex items-center justify-between text-sm">
                  <span>{item.title}</span>

                  {item.hasIcons && (
                    <span className="flex gap-2">
                      <span className="w-7 h-7 rounded-full border border-white/50 flex items-center justify-center text-[11px]">
                        ⚙️
                      </span>
                      <span className="w-7 h-7 rounded-full border border-white/50 flex items-center justify-center text-[11px]">
                        🤖
                      </span>
                    </span>
                  )}
                </div>

                {item.hasLine && <span className="dash-line-left" />}
              </div>
            ))}
          </div>

          {/* CORE CIRCLE */}
          <div className="flex items-center justify-center relative">
            <div className="relative w-80 h-80 rounded-full border border-[#19E3FF] shadow-[0_0_80px_rgba(25,227,255,0.5)] flex items-center justify-center bg-black">
              {/* inner ring */}
              <div className="w-48 h-48 rounded-full border border-white/60 flex items-center justify-center relative overflow-hidden">
                {/* rotating glow */}
                <motion.div
                  className="absolute inset-0 bg-[radial-gradient(circle_at_top,#19E3FF33_0,transparent_60%)]"
                  animate={{ rotate: [0, 360] }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                <div className="relative text-center">
                  <p className="tracking-[0.4em] text-xs uppercase mb-2">
                    C O R E
                  </p>
                  <p className="text-[11px] tracking-[0.3em] uppercase">
                    AI
                  </p>
                  <p className="text-[11px] tracking-[0.3em] uppercase">
                    Enhancement
                  </p>
                </div>
              </div>

              {/* outer texts */}
              <div className="absolute inset-3 pointer-events-none text-[10px] uppercase tracking-wide text-gray-100">
                <div className="flex justify-between px-10 pt-4">
                  <span>External Interface</span>
                  <span>Review &amp; Adaptation</span>
                </div>
                <div className="flex justify-between px-8 mt-3">
                  <span>Data Collection</span>
                  <span>Execution &amp; Position Mgmt</span>
                </div>
                <div className="flex justify-between px-9 mt-4">
                  <span>Analytical Workflow</span>
                  <span>AI Enhancement</span>
                </div>
                <div className="flex justify-between px-14 mt-4">
                  <span>Signal Generation</span>
                  <span>Signal Ranking</span>
                </div>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[#19E3FF] font-semibold">
                  Data Preparation
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-4">
            <p className="text-xs tracking-[0.3em] uppercase text-gray-300 mb-1">
              Output
            </p>

            {rightBlocks.map((item) => (
              <div key={item.title} className="relative">
                <div
                  className={[
                    "rounded-3xl px-5 py-3 text-sm border flex items-center",
                    item.highlight
                      ? "bg-linear-to-r from-[#005CFF] to-[#19E3FF] text-black border-none font-semibold"
                      : "bg-transparent border-cyan-500/60",
                  ].join(" ")}
                >
                  {item.title}
                </div>

                {item.hasLine && <span className="dash-line-right" />}
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM ROW */}
        <div className="grid grid-cols-4 gap-4 mt-10 text-xs">
          <div className="rounded-3xl border border-cyan-500/60 px-5 py-3">
            Feature Engineering
          </div>
          <div className="rounded-3xl border border-cyan-500/60 px-5 py-3">
            Logic Modules
          </div>
          <div className="rounded-3xl border border-cyan-500/60 px-5 py-3">
            Data Storage
          </div>
          <div className="rounded-3xl border border-cyan-500/60 px-5 py-3">
            Messaging / Event Broker
          </div>
        </div>
      </div>
    </div>
  );
}

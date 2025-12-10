"use client";
import React from "react";

export default function WorkflowMobile() {
  return (
    <div className="wrapper">
      <svg
        viewBox="0 0 900 1400"
        className="svg"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* === GRADIENTS & FILTERS === */}
        <defs>
          <linearGradient id="boxGlow" x1="0%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="#20EAFE" />
            <stop offset="100%" stopColor="#20EAFE" />
          </linearGradient>

          <filter id="glow">
            <feGaussianBlur stdDeviation="12" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* ========================= TOP SECTION ========================= */}
        <rect
          x="350"
          y="15"
          width="200"
          height="70"
          rx="14"
          stroke="url(#boxGlow)"
          strokeWidth="1"
          fill="rgba(0,0,0,0.4)"
        />
        <text x="450" y="58" textAnchor="middle" className="boxText">
          MCP GATEWAY
        </text>

        {/* Security Box */}
        <rect
          x="330"
          y="150"
          width="240"
          height="90"
          rx="14"
          stroke="url(#boxGlow)"
          strokeWidth="1"
          fill="rgba(0,0,0,0.4)"
        />
        <text x="450" y="185" textAnchor="middle" className="boxText">
          Security & Auth
        </text>
        <text x="450" y="210" textAnchor="middle" className="subText">
          Rate-Limiter | Observability
        </text>

        {/* Connector */}
        <line
          x1="448"
          y1="93"
          x2="449"
          y2="150"
          stroke="url(#boxGlow)"
          strokeWidth="1.5"
          strokeDasharray="8 8"
        />
        <line
          x1="448"
          y1="240"
          x2="449"
          y2="290"
          stroke="url(#boxGlow)"
          strokeWidth="1.5"
          strokeDasharray="8 8"
        />

        {/* ===================== SECTION TITLE ===================== */}
        <text x="450" y="320" textAnchor="middle" className="sectionTitle">
          DATA COLLECTION
        </text>

        {/* === TOP ROW OF SMALL BOXES === */}

         <rect
          x="280"
          y="350"
          width="150"
          height="50"
          rx="14"
          stroke="url(#boxGlow)"
          strokeWidth="1"
          fill="rgba(0,0,0,0.4)"
        />
        <text x="352" y="380" textAnchor="middle" className="boxText">
          Market Data
        </text>
        <rect
          x="455"
          y="350"
          width="150"
          height="50"
          rx="14"
          stroke="url(#boxGlow)"
          strokeWidth="1"
          fill="rgba(0,0,0,0.4)"
        />
        <text x="552" y="380" textAnchor="middle" className="boxText">
       
        </text>

        <rect
          x="280"
          y="415"
          width="150"
          height="50"
          rx="14"
          stroke="url(#boxGlow)"
          strokeWidth="1"
          fill="rgba(0,0,0,0.4)"
        />
        <text x="352" y="445" textAnchor="middle" className="boxText">
          AI Agents GPT
        </text>
        <rect
          x="455"
          y="415"
          width="150"
          height="50"
          rx="14"
          stroke="url(#boxGlow)"
          strokeWidth="1"
          fill="rgba(0,0,0,0.4)"
        />
        <text x="530" y="445" textAnchor="middle" className="boxText">
         AI Agents Core
        </text>
        {/* {[
          { x: 240, label: "Market Data" },
          { x: 380, label: "AI Agents GPT" },
          { x: 520, label: "AI Agents Core" }
        ].map((b, i) => (
          <g key={i}>
            <rect
              x={b.x}
              y={350}
              width="160"
              height="60"
              rx="10"
              className="smallBox"
            />
            <text
              x={b.x + 80}
              y={365}
              textAnchor="middle"
              className="smallText"
            >
              {b.label}
            </text>
          </g>
        ))} */}

        {/* === OUTER DOTTED CURVE === */}
        {/* <path
          d="
            M200 300
            Q150 900 200 1500
            Q450 1700 700 1500
            Q750 900 700 300
            Z
          "
          fill="none"
          stroke="url(#boxGlow)"
          strokeDasharray="10 10"
          strokeWidth="3"
          opacity="0.4"
        /> */}

        {/* ===================== MAIN GRID ===================== */}
        {[
          "Data Collection",
          "Data Preparation",
          "Analytical Workflow",
          "Signal Generation",
          "Signal Ranking",
          "AI Enhancement",
          "Execution & Position Management",
          "Advanced Modelling",
          "External Interface",
          "Review and Adaptation",
        ].map((item, i) => (
          <g key={i}>
            <rect
              x={230 + (i % 2) * 230}
              y={480 + Math.floor(i / 2) * 80}
              width="200"
              height="50"
              rx="12"
              className={
                item === "Data Preparation" ? "yellowBox" : "gridBox"
              }
            />
            <text
              x={330 + (i % 2) * 230}
              y={510 + Math.floor(i / 2) * 80}
              textAnchor="middle"
              className="gridText"
            >
              {item}
            </text>
          </g>
        ))}

        {/* ===================== OUTPUT SECTION ===================== */}
        <text x="445" y="900" textAnchor="middle" className="sectionTitle">
          OUTPUT
        </text>

        {/* First Output Row */}
        <rect x="260" y="920" width="170" height="70" rx="12" className="gridBox"/>
        <rect x="460" y="920" width="170" height="70" rx="12" className="gridBox"/>

        <text x="360" y="940" textAnchor="middle" className="gridText">
          Strategy Dashboard
        </text>
        <text x="560" y="940" textAnchor="middle" className="gridText">
          Trade Control Panel
        </text>

        {/* Second Row */}
        <rect x="260" y="1000" width="170" height="70" rx="12" className="gridBox"/>
        <rect x="460" y="1000" width="170" height="70" rx="12" className="gridBox"/>

        <text x="360" y="1020" textAnchor="middle" className="gridText">
          Reporting & Journaling
        </text>
        <text x="560" y="1020" textAnchor="middle" className="gridText">
          Continuous Learning
        </text>

        {/* Bottom Modules */}
        <rect x="230" y="1150" width="130" height="80" rx="12" className="gridBox"/>
        <rect x="375" y="1150" width="130" height="80" rx="12" className="gridBox"/>
        <rect x="520" y="1150" width="170" height="80" rx="12" className="gridBox"/>

        <text x="290" y="1190" textAnchor="middle" className="gridText">Logic Modules</text>
        <text x="440" y="1190" textAnchor="middle" className="gridText">Data Storage</text>
        <text x="610" y="1190" textAnchor="middle" className="gridText">Messaging / Event Broker</text>

        {/* Final Bottom Boxes */}
        <rect x="210" y="1250" width="220" height="70" rx="12" className="gridBox"/>
        <rect x="500" y="1250" width="220" height="70" rx="12" className="gridBox"/>

        <text x="320" y="1290" textAnchor="middle" className="gridText">Feature Engineering</text>
        <text x="620" y="1290" textAnchor="middle" className="gridText">Security & Governance</text>
      </svg>

      {/* ===================== INLINE STYLING ===================== */}
      <style jsx>{`
        .wrapper {
          width: 100%;
          display: flex;
          justify-content: center;
          padding: 10px 0;
        //   background: #010018;
        }

        .svg {
          width: 100%;
          max-width: 1000px;
        }

        .sectionTitle {
          font-size: 25px;
          fill: white;
          font-weight: 700;
          font-family: "DM Sans", sans-serif;
          
        }

        .boxText {
          fill: white;
          font-size: 18px;
          font-weight: 600;
          font-family: "DM Sans", sans-serif;
        }

        .subText {
          fill: #bbb;
          font-size: 14px;
        }

        .smallBox {
          stroke: #00d9ff;
          stroke-width: 2;
          fill: rgba(0, 15, 30, 0.5);
        }

        .smallText {
          fill: white;
          font-size: 14px;
        }

        .gridBox {
          stroke: #11E9FE;
          stroke-width: 1;
          fill: #031122;
        }

        .yellowBox {
          stroke: #ffd900;
          stroke-width: 2;
          fill: rgba(40, 20, 0, 0.6);
        }

        .gridText {
          fill: white;
          font-size: 15px;
          font-family: "DM Sans", sans-serif;
        }
          

        .blueBoxGlow {
          stroke: url(#boxGlow);
          stroke-width: 2;
          fill: rgba(0, 20, 40, 0.5);
          filter: url(#glow);
        }
      `}</style>
    </div>
  );
}

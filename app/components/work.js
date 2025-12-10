// src/app/workflow/page.jsx
export default function Work() {
  // All connector paths defined here so it's easy to tweak positions
  const connectors = [
    // TOP
    {
      id: "conn-top-security-auth",
      d: "M 600 270 C 600 230 598 205 590 175",
      dur: "4s",
      begin: "0s",
    },
    {
      id: "conn-top-mcp",
      d: "M 590 175 C 590 145 590 115 590 85",
      dur: "4s",
      begin: "1s",
    },

    // LEFT COLUMN (Data Collection)
    {
      id: "conn-left-market",
      d: "M 370 420 C 310 385 235 335 170 282",
      dur: "3s",
      begin: "0.3s",
    },
    {
      id: "conn-left-logo",
      d: "M 365 455 C 300 430 230 405 170 382",
      dur: "3s",
      begin: "0.8s",
    },
    {
      id: "conn-left-gpt",
      d: "M 360 495 C 290 495 230 500 170 482",
      dur: "3.2s",
      begin: "0.5s",
    },
    {
      id: "conn-left-core",
      d: "M 370 560 C 305 575 235 595 170 582",
      dur: "3.4s",
      begin: "0.9s",
    },

    // BOTTOM LEFT (Feature Engineering)
    {
      id: "conn-left-feature",
      d: "M 380 630 C 300 660 230 735 175 857",
      dur: "4s",
      begin: "1.2s",
    },

    // RIGHT COLUMN (Output)
    {
      id: "conn-right-strategy",
      d: "M 830 420 C 890 390 955 330 1030 282",
      dur: "3s",
      begin: "0.4s",
    },
    {
      id: "conn-right-trade",
      d: "M 830 450 C 900 440 965 400 1030 382",
      dur: "3s",
      begin: "0.9s",
    },
    {
      id: "conn-right-reporting",
      d: "M 830 500 C 900 510 965 520 1030 482",
      dur: "3.2s",
      begin: "0.6s",
    },
    {
      id: "conn-right-learning",
      d: "M 830 540 C 890 560 955 590 1030 582",
      dur: "3.4s",
      begin: "1.0s",
    },

    // BOTTOM RIGHT (Security & Governance)
    {
      id: "conn-right-security",
      d: "M 820 630 C 890 660 960 735 1035 857",
      dur: "4s",
      begin: "1.4s",
    },

    // BOTTOM CENTER (Logic / Storage / Messaging)
    {
      id: "conn-bottom-logic",
      d: "M 560 730 C 520 760 470 805 425 857",
      dur: "3.2s",
      begin: "0.7s",
    },
    {
      id: "conn-bottom-storage",
      d: "M 600 730 C 600 765 598 800 595 857",
      dur: "3.2s",
      begin: "1.1s",
    },
    {
      id: "conn-bottom-messaging",
      d: "M 640 730 C 680 760 725 805 765 857",
      dur: "3.2s",
      begin: "0.9s",
    },
  ];

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6">
      <div style={{ maxWidth: 1200, width: "100%" }}>
        <svg
          viewBox="0 0 1200 1000"
          width="100%"
          height="1000"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <defs>
            <style>{`
              .panel-box {
                fill: url(#panelGradient);
                stroke: #00bbff;
                stroke-width: 0.8;
              }

              .flow-path {
                stroke: #00deff;
                stroke-width: 2.15;
                stroke-dasharray: 6 12;
                fill: none;
                stroke-linecap: round;
                animation: dashFlow 2.5s linear infinite;
              }

              @keyframes dashFlow {
                to { stroke-dashoffset: -200; }
              }
            `}</style>

            <filter id="blueGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="12" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="6" result="g" />
              <feMerge>
                <feMergeNode in="g" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <filter id="yellowGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="6" result="yg" />
              <feMerge>
                <feMergeNode in="yg" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <radialGradient id="coreGrad" cx="50%" cy="50%">
              <stop offset="0%" stopColor="#021422" stopOpacity="1" />
              <stop offset="70%" stopColor="#02000EB2" stopOpacity="1" />
              <stop offset="100%" stopColor="#00040a" stopOpacity="1" />
            </radialGradient>

            <linearGradient id="panelGradient" x1="0" x2="1">
              <stop offset="0%" stopColor="#00060E" />
              <stop offset="100%" stopColor="#031122" />
            </linearGradient>

            <linearGradient id="hoverGradient" x1="0" x2="1">
              <stop offset="0%" stopColor="#0077FF" />
              <stop offset="100%" stopColor="#20EAFE" />
            </linearGradient>

            {/* Dot marker on endpoints */}
            <marker
              id="dot"
              viewBox="0 0 10 10"
              refX="5"
              refY="5"
              markerWidth="6"
              markerHeight="6"
            >
              <circle cx="5" cy="5" r="3" fill="#00eaff" />
            </marker>
          </defs>

          {/* ---------------- CORE ---------------- */}
          <g>
            <circle
              cx="600"
              cy="500"
              r="230"
              fill="url(#coreGrad)"
              stroke="#00BBFF"
              strokeWidth="1.07"
              opacity="1"
            />

            <circle
              cx="600"
              cy="500"
              r="100"
              fill="none"
              stroke="#20EAFE"
              strokeWidth="1"
              opacity="0.9"
            />

            <text
              x="600"
              y="510"
              textAnchor="middle"
              fill="white"
              fontSize="44"
              fontWeight="500"
              fontFamily="Arial, Helvetica, sans-serif"
            >
              CORE
            </text>

            {/* Data Preparation label */}
            <text
              x="410"
              y="505"
              fill="#FBF705"
              fontSize="17"
              fontWeight="500"
            >
              Data
            </text>
            <text
              x="388"
              y="522"
              fill="#FBF705"
              fontSize="17"
              fontWeight="500"
            >
              Preparation
            </text>

            {/* Radial spoke labels */}
            <text
              x="540"
              y="340"
              textAnchor="middle"
              fill="white"
              fontSize="17"
              fontWeight="500"
            >
              External
            </text>
            <text
              x="540"
              y="357"
              textAnchor="middle"
              fill="white"
              fontSize="17"
              fontWeight="500"
            >
              Interface
            </text>

            <text
              x="660"
              y="340"
              textAnchor="middle"
              fill="white"
              fontSize="17"
              fontWeight="500"
            >
              Review &
            </text>
            <text
              x="660"
              y="357"
              textAnchor="middle"
              fill="white"
              fontSize="17"
              fontWeight="500"
            >
              Adaptation
            </text>

            <text
              x="750"
              y="410"
              textAnchor="middle"
              fill="white"
              fontSize="16"
              fontWeight="500"
            >
              Execution &
            </text>
            <text
              x="750"
              y="427"
              textAnchor="middle"
              fill="white"
              fontSize="16"
              fontWeight="500"
            >
              Position
            </text>
            <text
              x="750"
              y="444"
              textAnchor="middle"
              fill="white"
              fontSize="16"
              fontWeight="500"
            >
              Management
            </text>

            <text
              x="765"
              y="515"
              textAnchor="middle"
              fill="white"
              fontSize="16"
              fontWeight="500"
            >
              AI Enhancement
            </text>

            <text
              x="730"
              y="610"
              textAnchor="middle"
              fill="white"
              fontSize="17"
              fontWeight="500"
            >
              Signal
            </text>
            <text
              x="730"
              y="627"
              textAnchor="middle"
              fill="white"
              fontSize="17"
              fontWeight="500"
            >
              Ranking
            </text>

            <text
              x="600"
              y="670"
              textAnchor="middle"
              fill="white"
              fontSize="17"
              fontWeight="500"
            >
              Signal
            </text>
            <text
              x="600"
              y="687"
              textAnchor="middle"
              fill="white"
              fontSize="17"
              fontWeight="500"
            >
              Generation
            </text>

            <text
              x="440"
              y="610"
              fill="white"
              fontSize="17"
              fontWeight="500"
            >
              Analytical
            </text>
            <text
              x="442"
              y="627"
              fill="white"
              fontSize="17"
              fontWeight="500"
            >
              Workflow
            </text>

            <text
              x="435"
              y="410"
              fill="white"
              fontSize="17"
              fontWeight="500"
            >
              Data
            </text>
            <text
              x="420"
              y="427"
              fill="white"
              fontSize="17"
              fontWeight="500"
            >
              Collection
            </text>
          </g>

          {/* ---------------- TOP MODULES ---------------- */}
          <g>
            {/* MCP Gateway */}
            <rect
              className="panel-box"
              x="450"
              y="18"
              rx="12"
              width="280"
              height="54"
            />
            <text
              x="590"
              y="52"
              textAnchor="middle"
              fill="white"
              fontSize="16"
              fontWeight="700"
            >
              MCP GATEWAY
            </text>

            {/* Security & Auth */}
            <rect
              className="panel-box"
              x="450"
              y="130"
              rx="14"
              width="280"
              height="70"
            />
            <text
              x="590"
              y="162"
              textAnchor="middle"
              fill="#FBF705"
              fontSize="16"
              fontWeight="700"
            >
              Security &amp; Auth
            </text>
            <text
              x="590"
              y="182"
              textAnchor="middle"
              fill="#cfe8ef"
              fontSize="16"
            >
              Rate-Limiter | Observability
            </text>
          </g>

          {/* ---------------- LEFT COLUMN ---------------- */}
          <g>
            <text
              x="70"
              y="210"
              fill="white"
              fontSize="25"
              fontWeight="400"
            >
              DATA COLLECTION
            </text>

            <LeftPanelBox x={80} y={250} label="Market Data" />
            <LeftPanelBox
              x={80}
              y={350}
              imgSrc="/images/logo-workflow.png"
              label="Logo"
            />
            <LeftPanelBox x={80} y={450} label="AI Agents GPT" />
            <LeftPanelBox x={80} y={550} label="AI Agents Core" />
          </g>

          {/* ---------------- RIGHT COLUMN ---------------- */}
          <g>
            <text
              x="1070"
              y="210"
              fill="white"
              fontSize="25"
              fontWeight="400"
              textAnchor="end"
            >
              OUTPUT
            </text>

            <RightPanelBox
              x={940}
              y={250}
              labelTop="Strategy"
              labelBottom="Dashboard"
            />
            <RightPanelBox
              x={940}
              y={350}
              labelTop="Trade Control"
              labelBottom="Panel"
              highlight
            />
            <RightPanelBox
              x={940}
              y={450}
              labelTop="Reporting"
              labelBottom="& Journaling"
            />
            <RightPanelBox
              x={940}
              y={550}
              labelTop="Continuous"
              labelBottom="Learning"
            />
          </g>

          {/* ---------------- BOTTOM MODULES ---------------- */}
          <BottomBox x={350} y={810} label="Logic Modules" />
          <BottomBox x={520} y={810} label="Data Storage" />
          <BottomBox x={690} y={810} label="Messaging Bug Event Broker" />

          {/* Feature Engineering (bottom left) */}
          <g>
            <rect
              className="panel-box"
              x="80"
              y="810"
              rx="14"
              width="190"
              height="95"
            />
            <text
              x="175"
              y="860"
              textAnchor="middle"
              fill="white"
              fontSize="18"
              fontWeight="400"
            >
              Feature Engineering
            </text>
          </g>

          {/* Security & Governance (bottom right) */}
          <g>
            <rect
              className="panel-box"
              x="940"
              y="810"
              rx="14"
              width="190"
              height="95"
            />
            <text
              x="1035"
              y="850"
              textAnchor="middle"
              fill="white"
              fontSize="18"
              fontWeight="400"
            >
              Security &amp;
            </text>
            <text
              x="1035"
              y="875"
              textAnchor="middle"
              fill="white"
              fontSize="18"
              fontWeight="400"
            >
              Governance
            </text>
          </g>

          {/* ---------------- CONNECTORS + ANIMATION ---------------- */}
          <g>
            {connectors.map((c) => (
              <g key={c.id}>
                <path
                  id={c.id}
                  className="flow-path"
                  d={c.d}
                  markerEnd="url(#dot)"
                />
                <FlowParticle
                  pathId={c.id}
                  dur={c.dur}
                  begin={c.begin}
                />
              </g>
            ))}
          </g>
        </svg>
      </div>
    </div>
  );
}

/* ---------------- Helper components for boxes ---------------- */

function LeftPanelBox({ x, y, label, imgSrc }) {
  const centerX = x + 90;
  const centerY = y + 40;

  return (
    <g>
      <rect
        className="panel-box"
        x={x}
        y={y}
        rx="12"
        width="180"
        height="64"
      />
      {imgSrc ? (
        <image
          href={imgSrc}
          x={x + 58}
          y={y + 12}
          width="64"
          height="40"
          preserveAspectRatio="xMidYMid meet"
        />
      ) : (
        <text
          x={centerX}
          y={centerY}
          textAnchor="middle"
          fill="white"
          fontSize="20"
          fontWeight="200"
        >
          {label}
        </text>
      )}
    </g>
  );
}

function RightPanelBox({ x, y, labelTop, labelBottom, highlight = false }) {
  const rectProps = highlight
    ? { stroke: "url(#hoverGradient)", filter: "url(#blueGlow)" }
    : { stroke: "#00BBFF" };

  return (
    <g>
      <rect
        className="panel-box"
        x={x}
        y={y}
        rx="12"
        width="180"
        height="64"
        {...rectProps}
      />
      <text
        x={x + 90}
        y={y + 28}
        textAnchor="middle"
        fill="white"
        fontSize="20"
        fontWeight="200"
      >
        {labelTop}
      </text>
      <text
        x={x + 90}
        y={y + 48}
        textAnchor="middle"
        fill="white"
        fontSize="20"
        fontWeight="200"
      >
        {labelBottom}
      </text>
    </g>
  );
}

function BottomBox({ x, y, label }) {
  const words = label.split(" ");
  const line1 = words[0];
  const line2 = words.slice(1).join(" ");

  return (
    <g>
      <rect
        className="panel-box"
        x={x}
        y={y}
        rx="12"
        width="150"
        height="94"
      />
      <text
        x={x + 75}
        y={y + 35}
        textAnchor="middle"
        fill="white"
        fontSize="18"
        fontWeight="400"
      >
        {line1}
      </text>
      {line2 && (
        <text
          x={x + 75}
          y={y + 60}
          textAnchor="middle"
          fill="white"
          fontSize="18"
          fontWeight="400"
        >
          {line2}
        </text>
      )}
    </g>
  );
}

/* Particle that travels along a connector path */
function FlowParticle({ pathId, dur, begin }) {
  return (
    <circle r="4" fill="#ffffff">
      <animateMotion
        dur={dur}
        repeatCount="indefinite"
        rotate="auto"
        begin={begin}
      >
        <mpath xlinkHref={`#${pathId}`} />
      </animateMotion>
    </circle>
  );
}

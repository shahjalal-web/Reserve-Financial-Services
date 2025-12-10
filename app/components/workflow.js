// src/app/workflow/page.jsx
export default function WorkflowPage() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6">
      <div style={{ maxWidth: 1200, width: "100%" }}>
        <svg
          viewBox="0 0 1200 1000"
          width="100%"
          height="1000"
          xmlns="http://www.w3.org/2000/svg"
        >
        
        {/* <svg width="200" height="200" viewBox="0 0 200 200">
  <defs>
  
    <linearGradient id="flowGlow" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#00F5FF" />
      <stop offset="100%" stop-color="#0077FF" />
    </linearGradient>

    <filter id="softGlow" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="3" result="blur" />
      <feBlend in="SourceGraphic" in2="blur" mode="screen" />
    </filter>
  </defs>

 
  <path
    d="M 170 40 
       C 150 60, 140 85, 130 120"
    stroke="url(#flowGlow)"
    stroke-width="3"
    fill="none"
    filter="url(#softGlow)"
    stroke-linecap="round"
  />
</svg> */}


<g transform="rotate(90, 100, 100)">
 <path
    d="M 170 40 
       C 150 60, 140 85, 130 120"
    stroke="url(#flowGlow)"
    stroke-width="3"
    fill="none"
    filter="url(#softGlow)"
    stroke-linecap="round"
  />
</g>

<g transform="rotate(135, 100, 100)">
   <path
    d="M 170 40 
       C 150 60, 140 85, 130 120"
    stroke="url(#flowGlow)"
    stroke-width="3"
    fill="none"
    filter="url(#softGlow)"
    stroke-linecap="round"
  />
</g>




        


        

          <defs>
            {/* Blue glow filter */}
            <filter id="blueGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="12" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* faint inner glow */}
            <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="6" result="g" />
              <feMerge>
                <feMergeNode in="g" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* yellow glow */}
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
             <stop offset="0%" stop-color="#0077FF" />
            <stop offset="100%" stop-color="#20EAFE" />
             </linearGradient>


            {/* small triangle marker for connector tip */}
            <marker id="dot" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6">
              <circle cx="5" cy="5" r="3" fill="#00eaff" />
            </marker>
          </defs>

          {/* ----------------------
              layout variables (visual)
              cx, cy = center of core
             ---------------------- */}
          {/* center coords */}
          {/* CORE placement */}
          {/* outer ring */}
          <g transform="translate(0,0)">
            {/* Outer glowing ring */}
            <circle
              cx="600"
              cy="500"
              r="230"
              fill="url(#coreGrad)"
              stroke="#00BBFF"
              strokeWidth="1.07"
            //   filter="url(#blueGlow)"
              opacity="1"
            />
            

            {/* inner subtle ring (reduced size) */}
            <circle
              cx="600"
              cy="500"
              r="100"
              fill="none"
              stroke="#20EAFE"
              strokeWidth="1"
              opacity="0.9"
            //   filter="url(#softGlow)"
            />

           

            {/* CORE label */}
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
            <line
              x1="595"
              y1="730"
              x2="595"
              y2="810"
              stroke="#00BBFF"
              strokeWidth="2.15"
              strokeDasharray="8 6"
              markerEnd="url(#dot)"
            />

            {/* small yellow 'Data Preparation' label (slightly left) */}
            {/* <text
              x="378"
              y="490"
              fill="#ffd84d"
              fontSize="15"
              fontWeight="700"
              filter="url(#yellowGlow)"
            >
              Data Preparation
            </text> */}

            {/* radial spoke labels around circle — positioned to sit just outside smaller inner ring */}
            {/* <text x="540" y="320" textAnchor="middle" fill="#00eaff" fontSize="14">
              External Interface
            </text>
            <text x="630" y="320" fill="#00eaff" fontSize="14">
              Review & Adaptation
            </text>
            <text x="660" y="400" fill="#00eaff" fontSize="14">
              Execution & Position Management
            </text>
            <text x="710" y="490" fill="#00eaff" fontSize="15">
              AI Enhancement
            </text>
            <text x="730" y="610" textAnchor="middle" fill="#00eaff" fontSize="15">
              Signal Ranking
            </text>
            <text x="590" y="680" textAnchor="middle" fill="#00eaff" fontSize="15">
              Signal Generation
            </text>
            <text x="400" y="610" fill="#00eaff" fontSize="15">
              Analytical Workflow
            </text>
            <text x="420" y="400" fill="#00eaff" fontSize="14">
              Data Collection
            </text> */}


            {/* CENTER highlight text */}
<text
  x="410"
  y="505"
  fill="#FBF705"
  fontSize="17"
  fontWeight="500"
//   filter="url(#yellowGlow)"
>
  Data
</text>
<text
  x="388"
  y="522"
  fill="#FBF705"
  fontSize="17"
  fontWeight="500"
//   filter="url(#yellowGlow)"
>
  Preparation
</text>


{/* radial spoke labels — now all split into two lines */}

/* External Interface */
<text x="540" y="340" textAnchor="middle" fill="white" fontSize="17" fontWeight="500">
  External
</text>
<text x="540" y="357" textAnchor="middle" fill="white" fontSize="17" fontWeight="500">
  Interface
</text>

/* Review & Adaptation */
<text x="660" y="340" textAnchor="middle" fill="white" fontSize="17" fontWeight="500">
  Review &
</text>
<text x="660" y="357" textAnchor="middle" fill="white" fontSize="17" fontWeight="500">
  Adaptation
</text>

/* Execution & Position Management */
<text x="750" y="410" textAnchor="middle" fill="white" fontSize="16" fontWeight="500">
  Execution &
</text>
<text x="750" y="427" textAnchor="middle" fill="white" fontSize="16" fontWeight="500">
  Position
</text>
<text x="750" y="444" textAnchor="middle" fill="white" fontSize="16" fontWeight="500">
  Management
</text>

/* AI Enhancement */
<text x="765" y="515" textAnchor="middle" fill="white" fontSize="16" fontWeight="500">
  AI Enhancement
</text>


/* Signal Ranking */
<text x="730" y="610" textAnchor="middle" fill="white" fontSize="17" fontWeight="500">
  Signal
</text>
<text x="730" y="627" textAnchor="middle" fill="white" fontSize="17" fontWeight="500">
  Ranking
</text>

/* Signal Generation */
<text x="600" y="670" textAnchor="middle" fill="white" fontSize="17" fontWeight="500">
  Signal
</text>
<text x="600" y="687" textAnchor="middle" fill="white" fontSize="17" fontWeight="500">
  Generation
</text>

/* Analytical Workflow */
<text x="440" y="610" fill="white" fontSize="17" fontWeight="500">
  Analytical
</text>
<text x="442" y="627" fill="white" fontSize="17" fontWeight="500">
  Workflow
</text>

/* Data Collection */
<text x="435" y="410" fill="white" fontSize="17" fontWeight="500">
  Data
</text>
<text x="420" y="427" fill="white" fontSize="17" fontWeight="500">
  Collection
</text>

          </g>

          {/* ---------------------
             TOP MODULES (centered)
            --------------------- */}
          {/* MCP Gateway */}
          <g>
            <rect
              className="panelBox"
              x="450"
              y="18"
              rx="12"
              width="280"
              height="54"
            //   fill="url(#panelGradient)"
              stroke="#20EAFE"
              strokeWidth="1"
            //   filter="url(#softGlow)"
            />
            <text x="598" y="54" textAnchor="middle" fill="white" fontSize="16" fontWeight="700">
              MCP GATEWAY
            </text>

            {/* small dashed connector down */}
            <line
              x1="600"
              y1="72"
              x2="600"
              y2="130"
              stroke="#00BBFF"
              strokeWidth="2.15"
              strokeDasharray="8 6"
              markerEnd="url(#dot)"
            />

            {/* Security & Auth */}
            <rect
              className="panelBox"
              x="450"
              y="130"
              rx="14"
              width="280"
              height="70"
            //   fill="#081826"
              stroke="#20EAFE"
              strokeWidth="1"
            //   filter="url(#yellowGlow)"
            />
            <text x="590" y="162" textAnchor="middle" fill="#FBF705" fontSize="16" fontWeight="700">
              Security & Auth
            </text>
            <text x="590" y="182" textAnchor="middle" fill="#cfe8ef" fontSize="16">
              Rate-Limiter | Observability
            </text>

            {/* connector to circle */}
            <line
              x1="600"
              y1="200"
              x2="600"
              y2="265"
              stroke="#00BBFF"
              strokeWidth="2.15"
              strokeDasharray="8 6"
              markerEnd="url(#dot)"
            />
          </g>

          {/* ---------------------
             LEFT COLUMN BOXES
            --------------------- */}
          <g>
            {/* heading */}
            <text x="70" y="210" fill="white" fontSize="25" fontWeight="400">
              DATA COLLECTION
            </text>

            {/* boxes stacked */}
            {LeftPanelBox({ x: 80, y: 250, label: "Market Data" })}
            {LeftPanelBox({ x: 80, y: 350, imgSrc: "/images/logo-workflow.png" })}
            {LeftPanelBox({ x: 80, y: 450, label: "AI Agents GPT" })}
            {LeftPanelBox({ x: 80, y: 550, label: "AI Agents Core" })}
          
          </g>

          {/* ---------------------
             RIGHT COLUMN BOXES
            --------------------- */}
          <g>
            <text x="1070" y="210" fill="white" fontSize="25" fontWeight="400" textAnchor="end">
              OUTPUT
            </text>

            {/* {RightPanelBox({ x: 940, y: 250, label: "Strategy Dashboard" })}
            {RightPanelBox({ x: 940, y: 350, label: "Trade Control Panel", highlight: true })}
            {RightPanelBox({ x: 940, y: 450, label: "Reporting & Journaling" })}
            {RightPanelBox({ x: 940, y: 550, label: "Continuous Learning" })}
            {RightPanelBox({ x: 940, y: 840, label: "Security & Governance" })} */}

            {RightPanelBox({
  x: 940,
  y: 250,
  labelTop: "Strategy",
  labelBottom: "Dashboard"
})}

{RightPanelBox({
  x: 940,
  y: 350,
  labelTop: "Trade Control",
  labelBottom: "Panel",
  highlight: true
})}

{RightPanelBox({
  x: 940,
  y: 450,
  labelTop: "Reporting",
  labelBottom: "& Journaling"
})}

{RightPanelBox({
  x: 940,
  y: 550,
  labelTop: "Continuous",
  labelBottom: "Learning"
})}


{/* {RightPanelBox({
  x: 940,
  y: 840,
  labelTop: "Security &",
  labelBottom: "Governance"
})} */}

          </g>

          {/* ---------------------
             CONNECTORS (Left -> circle)
             connectors precisely stop at circle edge (approx)
            --------------------- */}
          <g stroke="#00eaff" strokeWidth="3" strokeDasharray="8 6" fill="none" > 
            <line
  x1="370"
  y1="485"
  x2="260"
  y2="485"
  stroke="#00DEFF"
  strokeWidth="2.15"
  strokeDasharray="8 6"
  markerEnd="url(#dot)"
/>
<line
x1="320"
y1="280"
x2="320"
y2="700"
stroke="#00BBFF"
strokeWidth="2.15"
strokeDasharray="8 6"

/>
 <line
  x1="320"
  y1="280"
  x2="260"
  y2="280"
  stroke="#00DEFF"
  strokeWidth="2.15"
  strokeDasharray="8 6"
  markerEnd="url(#dot)"
/>
<line
  x1="320"
  y1="380"
  x2="260"
  y2="380"
  stroke="#00DEFF"
  strokeWidth="2.15"
  strokeDasharray="8 6"
  markerEnd="url(#dot)"
/>
<line
  x1="320"
  y1="580"
  x2="260"
  y2="580"
  stroke="#00DEFF"
  strokeWidth="2.15"
  strokeDasharray="8 6"
  markerEnd="url(#dot)"
/>
<line
  x1="320"
  y1="695"
  x2="170"
  y2="695"
  stroke="#00DEFF"
  strokeWidth="2.15"
  strokeDasharray="8 6"
  markerEnd="url(#dot)"
/>
            
            {/* from Market Data -> upper-left edge of outer circle */}
            {/* <path d="M280 170 C360 170 430 200 480 240" /> */}

            {/* from AI Agents GPT -> left-middle */}
            {/* <path d="M280 270 C360 270 440 300 480 330" /> */}

            {/* from AI Agents Core -> left-lower */}
            {/* <path d="M280 370 C360 370 440 380 480 380" /> */}

            {/* from Feature Engineering down connector to bottom-left box */}
            {/* <path d="M180 520 C220 520 260 560 350 620" /> */}
          </g> 

          {/* ---------------------
             CONNECTORS (Right -> circle)
            --------------------- */}
          <g stroke="#00eaff" strokeWidth="2" strokeDasharray="8 6" fill="none" >
          {/* <path
  d={`
     M 830 470
    C 900 490, 900 420, 900 380
    L 900 330
    C 900 300, 920 285, 940 282
  `} /> */}

   /* M 830 510
    C 900 520, 930 460, 930 405
    L 930 360
    C 930 330, 950 315, 970 312
   */
    {/* <path
  d="
    M 830 490
    C 880 565, 910 495, 910 455
    L 910 410
    C 910 385, 930 370, 950 368
  "
  stroke="#00DEFF"
  strokeWidth="3"
  fill="none"
  strokeDasharray="6 6"
/> */}
<line
  x1="830"
  y1="483"
  x2="940"
  y2="482"
  stroke="#00DEFF"
  strokeWidth="2.15"
  strokeDasharray="8 6"
  markerEnd="url(#dot)"
/>

<line
              x1="880"
              y1="280"
              x2="880"
              y2="700"
              stroke="#00BBFF"
              strokeWidth="2.15"
              strokeDasharray="8 6"
            //   markerEnd="url(#dot)"
            />
            <line
  x1="880"
  y1="283"
  x2="942"
  y2="282"
  stroke="#00DEFF"
  strokeWidth="2.15"
  strokeDasharray="8 6"
  markerEnd="url(#dot)"
/>
<line
  x1="880"
  y1="380"
  x2="942"
  y2="380"
  stroke="#00DEFF"
  strokeWidth="2.15"
  strokeDasharray="8 6"
  markerEnd="url(#dot)"
/>
<line
  x1="880"
  y1="580"
  x2="942"
  y2="580"
  stroke="#00DEFF"
  strokeWidth="2.15"
  strokeDasharray="8 6"
  markerEnd="url(#dot)"
/>
<line
  x1="880"
  y1="692"
  x2="1030"
  y2="692"
  stroke="#00DEFF"
  strokeWidth="2.15"
  strokeDasharray="8 6"
  markerEnd="url(#dot)"
/>




  
            {/* <path d={` M ${580 + 270} 490
                C ${890} 300, 790 290, 940 282
                `} /> */}
            {/* <path d="M960 270 C740 370 770 500 720 440" /> */}
            {/* <path d="M920 270 C840 270 760 300 720 320" />
            <path d="M920 370 C840 370 760 380 720 380" />
            <path d="M920 470 C840 470 760 500 720 480" /> */}
          </g>

          {/* ---------------------
             BOTTOM CENTER MODULES (under circle)
            --------------------- */}
          {/* connector arcs from circle downward to three bottom boxes */}
          <g stroke="#00eaff" strokeWidth="3" strokeDasharray="8 6" fill="none" >
            {/* <path d="M560 630 C560 660 520 700 420 730" />
            <path d="M600 630 C600 660 600 700 600 730" />
            <path d="M640 630 C640 660 680 700 780 730" /> */}
            <line
  x1="760"
  y1="770"
  x2="428"
  y2="770"
  stroke="#00DEFF"
  strokeWidth="2.15"
  strokeDasharray="8 6"
//   markerEnd="url(#dot)"
/>
 <line
              x1="425"
              y1="770"
              x2="425"
              y2="810"
              stroke="#00BBFF"
              strokeWidth="2.15"
              strokeDasharray="8 6"
              markerEnd="url(#dot)"
            />
            <line
              x1="760"
              y1="770"
              x2="760"
              y2="810"
              stroke="#00BBFF"
              strokeWidth="2.15"
              strokeDasharray="8 6"
              markerEnd="url(#dot)"
            />
          </g>

          {/* bottom boxes centered under circle */}
          {BottomBox({ x: 350, y: 810, label: "Logic Modules" })}
          {BottomBox({ x: 520, y: 810, label: "Data Storage" })}
          {BottomBox({ x: 690, y: 810, label: "Messaging Bug Event Broker" })}

          {/* left big feature engineering box bottom-left */}
          
          <g>
            
            <rect className="panelBox" x="80" y="810" rx="14" width="190" height="95" fill="url(#panelGradient)" stroke="#00BBFF"  />
            <text x="175" y="860" textAnchor="middle" fill="white" fontSize="18" fontWeight="400">Feature Engineering</text>
          </g>
          <g>
            <rect className="panelBox" x="940" y="810" rx="14" width="190" height="95" fill="url(#panelGradient)" stroke="#00BBFF"  />
            <text x="1035" y="850" textAnchor="middle" fill="white" fontSize="18" fontWeight="400">Security & </text>
             <text x="1035" y="875" textAnchor="middle" fill="white" fontSize="18" fontWeight="400">Governance</text>
          </g>
        </svg>
      </div>
    </div>
  );
}

/* -----------------------
   Helper components (JSX returning SVG groups)
   These are functions that return fragments for clarity.
   They are called inline above.
   ----------------------- */

function LeftPanelBox({ x, y, label,imgSrc }) {
  return (
    <g key={label}>
      <rect
        className="panelBox"
        x={x}
        y={y}
        rx="12"
        width="180"
        height="64"
        fill="url(#panelGradient)"
        stroke="#00BBFF"
        strokeWidth="0.54"
        // filter="url(#softGlow)"
      />
      {imgSrc ? (
        <image
          href={imgSrc}
          x={x + 60}     // adjust to center horizontally
          y={y + 12}     // adjust to center vertically
          width="64"
          height="40"
          preserveAspectRatio="xMidYMid meet"
        />
      ) : (
      <text x={x + 90} y={y + 40} textAnchor="middle" fill="white" fontSize="20" fontWeight="200">
        {label}
      </text>
      )}
      <line
              x1="170"
              y1="614"
              x2="170"
              y2="810"
              stroke="#00BBFF"
              strokeWidth="2.15"
              strokeDasharray="8 6"
              markerEnd="url(#dot)"
            />
    </g>
  );
}

// function RightPanelBox({ x, y, label, highlight = false }) {
//   return (
//     <g key={label}>
//       <rect
//         x={x}
//         y={y}
//         rx="12"
//         width="180"
//         height="64"
//         fill="url(#panelGradient)"
//         stroke="#00BBFF"
//         strokeWidth="0.54"
//         filter={highlight ? "url(#blueGlow)" : "url(#softGlow)"}
//       />
//       <text x={x + 90} y={y + 40} textAnchor="middle" fill="white" fontSize="20" fontWeight="300">
//         {label}
//       </text>
//     </g>
//   );
// }


function RightPanelBox({ x, y, labelTop, labelBottom, highlight = false }) {
  return (
    <g>
      <rect
        className="panelBox"
        x={x}
        y={y}
        rx="12"
        width="180"
        height="64"
        fill="url(#panelGradient)"
        stroke="#00BBFF"
        strokeWidth="0.54"
        // filter={highlight ? "url(#blueGlow)" : "url(#softGlow)"}
      />

      {/* TOP line of text */}
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

      {/* BOTTOM line of text */}
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
      <line
              x1="1030"
              y1="614"
              x2="1030"
              y2="810"
              stroke="#00BBFF"
              strokeWidth="2.15"
              strokeDasharray="8 6"
              markerEnd="url(#dot)"
            />
    </g>
  );
}


function BottomBox({ x, y, label }) {
  // Split label into two parts automatically
  const words = label.split(" ");
  const line1 = words[0];
  const line2 = words.slice(1).join(" ");

  return (
    <g key={label}>
      <rect
        className="panelBox"
        x={x}
        y={y}
        rx="12"
        width="150"
        height="94"
        fill="url(#panelGradient)"
        stroke="#00BBFF"
        strokeWidth="1.07"
      />

      {/* Line 1 */}
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

      {/* Line 2 */}
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
    </g>
  );
}


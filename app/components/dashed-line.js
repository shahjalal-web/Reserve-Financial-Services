// components/DashedLine.tsx

export default function DashedLine() {

  return (
  <svg width="600" height="400" className="pointer-events-none">

      {/* vertical dashed line */}
<line

        x1={550}

        y1={240}

        x2={550}

        y2={300}

        stroke="#00eaff"

        strokeWidth={2}

        strokeDasharray="6 6"

      />
 
      {/* example horizontal line */}
<line

        x1={100}

        y1={200}

        x2={300}

        y2={200}

        stroke="#00eaff"

        strokeWidth={2}

        strokeDasharray="6 6"

      />
</svg>

  );
 

}

 
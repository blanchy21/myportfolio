import React from "react";

export default function SplineBackground() {
  return (
    <div className="spline-container fixed top-0 left-0 w-full h-full z-0 pointer-events-none">
      <iframe
        src="https://my.spline.design/3dgradient-AcpgG6LxFkpnJSoowRHPfcbO"
        frameBorder="0"
        width="100%"
        height="100%"
        id="aura-spline"
        allow="autoplay; fullscreen"
        style={{ border: 'none' }}
      />
    </div>
  );
}

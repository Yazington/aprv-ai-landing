import React from "react";

const CustomLogo = () => (
  <svg
    width="300"
    height="300"
    viewBox="0 0 300 300"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      {/* Gradient for the main body */}
      <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#D14FD4", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#30D1F2", stopOpacity: 1 }} />
      </linearGradient>
      {/* Gradient for the top pink part */}
      <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style={{ stopColor: "#FF5BCD", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#D14FD4", stopOpacity: 1 }} />
      </linearGradient>
      {/* Gradient for middle detail */}
      <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#FF5BCD", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#30D1F2", stopOpacity: 1 }} />
      </linearGradient>
    </defs>

    {/* Background */}
    <rect width="100%" height="100%" fill="black" />

    {/* Main lower shape */}
    <path
      d="M70,200 C100,150, 200,150, 230,200 Q200,250, 70,280 Z"
      fill="url(#gradient1)"
      transform="rotate(-15 150 150)"
    />

    {/* Top pink shape */}
    <path
      d="M100,50 Q150,0, 250,60 T230,150 Q200,130, 150,100 Z"
      fill="url(#gradient2)"
    />

    {/* Middle detail (small curve) */}
    <path
      d="M150,120 C180,110, 200,130, 190,140 Q170,150, 150,140 Z"
      fill="url(#gradient3)"
      opacity="0.8"
    />
  </svg>
);

export default CustomLogo;

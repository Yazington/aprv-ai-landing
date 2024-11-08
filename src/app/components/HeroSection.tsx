"use client";

import { useEffect, useState } from "react";

export default function HeroSection() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const fullTitle =
    "Accelerate Brand Licensing Operations with AI-Powered Accuracy";
  const fullDescription =
    "APRV.AI: Automating Artwork Approvals, Contract Compliance, and Royalty Reporting with AI Precision.";

  useEffect(() => {
    let titleIndex = 0;
    let descIndex = 0;
    let cursorVisible = true;

    const revealText = () => {
      if (titleIndex < fullTitle.length) {
        setTitle(fullTitle.substring(0, titleIndex + 1));
        titleIndex++;
      } else if (descIndex < fullDescription.length) {
        setDescription(fullDescription.substring(0, descIndex + 1));
        descIndex++;
      } else {
        clearInterval(revealIntervalId);
        clearInterval(cursorIntervalId);

        setShowCursor(false); // Hide cursor at the end

        // Add green checkmark animation
        const checkmark = document.createElement("span");
        checkmark.textContent = "✅";
        checkmark.style.color = "green"; // Set color to green
        checkmark.style.transition = "opacity 0.5s ease";
        checkmark.style.opacity = "0";
        const descElement = document.querySelector(".hero-description");
        if (descElement) {
          descElement.appendChild(checkmark);

          setTimeout(() => {
            checkmark.style.opacity = "1"; // Fade in
          }, 500);
        }
      }
    };

    const toggleCursor = () => {
      cursorVisible = !cursorVisible;
      setShowCursor(cursorVisible);
    };

    const revealIntervalId = setInterval(revealText, 50); // Speed of typing
    const cursorIntervalId = setInterval(toggleCursor, 300); // Faster cursor speed

    return () => {
      clearInterval(revealIntervalId);
      clearInterval(cursorIntervalId);
    };
  }, [fullTitle, fullDescription]);

  return (
    <section className="flex flex-1 relative text-white p-40 m-40 text-center hero-section-interactive justify-center items-center">
      <div className="relative z-10 ">
        <h2
          className="text-4xl font-extrabold mb-4 hero-title "
          style={{ display: "inline-block" }}
        >
          {title}
          <span style={{ opacity: showCursor ? 1 : 0 }}>|</span>
        </h2>
        <p className="mb-6 hero-description">
          {description}
          <span style={{ opacity: showCursor ? 1 : 0 }}>|</span>
        </p>
        <div className="flex justify-center gap-4">
          <button
            className="rounded-full text-sm px-6 py-3"
            style={{
              background: "linear-gradient(145deg, #32CD32, #228B22)",
              boxShadow: `
      2px 2px 4px rgba(0, 0, 0, 0.2),         /* Shadow for depth */
      -2px -2px 4px rgba(255, 255, 255, 0.1) /* Inverted shadow */
    `,
            }}
            onClick={() => (window.location.href = "https://tally.so/r/wvxq50")}
          >
            Discover How We Can Help
          </button>
        </div>
      </div>
    </section>
  );
}

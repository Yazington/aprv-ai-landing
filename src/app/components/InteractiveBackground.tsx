"use client";
import React, { useRef, useEffect, useCallback } from "react";

const InteractiveBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotsRef = useRef<{ x: number; y: number }[]>([]);
  const resizeObserverRef = useRef<ResizeObserver | null>(null);

  const initializeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dotSize = 4;
    const spacing = 20;
    const canvasWidth = document.documentElement.scrollWidth;
    const canvasHeight = document.documentElement.scrollHeight;
    const numCols = Math.ceil(canvasWidth / spacing);
    const numRows = Math.ceil(canvasHeight / spacing);

    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    // Remove CSS width and height to prevent stretching
    canvas.style.width = `${canvasWidth}px`;
    canvas.style.height = `${canvasHeight}px`;

    // Store all dot positions
    const dots = [];
    for (let row = 0; row < numRows; row++) {
      for (let col = 0; col < numCols; col++) {
        const x = col * spacing;
        const y = row * spacing;
        dots.push({ x, y });
      }
    }
    dotsRef.current = dots;

    // Fill the canvas with black to prevent transparency issues
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }, []);

  const updateDotsNearMouse = useCallback((mouseX, mouseY) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dotSize = 4;
    const radius = 100;

    // Fill the canvas with black to reset the background
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Update opacity of dots based on distance to mouse
    dotsRef.current.forEach(({ x, y }) => {
      const distance = Math.sqrt((x - mouseX) ** 2 + (y - mouseY) ** 2);
      const opacity = distance < radius ? 1 - distance / radius : 0;
      if (opacity > 0) {
        ctx.fillStyle = `rgba(128, 128, 128, ${opacity})`;
        ctx.beginPath();
        ctx.arc(x, y, dotSize / 2, 0, Math.PI * 2);
        ctx.fill();
      }
    });
  }, []);

  useEffect(() => {
    initializeCanvas();

    const handleMouseMove = (event) => {
      const mouseX = event.pageX;
      const mouseY = event.pageY;
      updateDotsNearMouse(mouseX, mouseY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    const handleResize = () => {
      initializeCanvas();
    };
    window.addEventListener("resize", handleResize);

    // Use ResizeObserver to watch for changes in the body's size
    resizeObserverRef.current = new ResizeObserver(() => {
      initializeCanvas();
    });
    resizeObserverRef.current.observe(document.body);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (resizeObserverRef.current) {
        resizeObserverRef.current.disconnect();
      }
    };
  }, [initializeCanvas, updateDotsNearMouse]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 bg-black z-0 w-full h-full"
      style={{ position: "absolute", top: 0, left: 0 }}
    />
  );
};

export default InteractiveBackground;

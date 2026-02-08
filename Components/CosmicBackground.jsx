'use client';

import React, { useEffect, useRef } from 'react';
import '../styles/CosmicBackground.css';

function CosmicBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const stars = [];
    const starCount = 500;

    // Create stars
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5,
        opacity: Math.random() * 0.7 + 0.3,
        twinkleSpeed: Math.random() * 0.03 + 0.01,
        twinkleAmount: 0,
        color: ['#ffffff', '#ffd4a3', '#87ceeb', '#e0b0ff'][Math.floor(Math.random() * 4)],
      });
    }

    let animationId;
    let time = 0;

    const animate = () => {
      time += 0.016;

      // Create ultra dark background
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Add subtle space depth gradient
      const depthGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      depthGradient.addColorStop(0, 'rgba(5, 5, 20, 0.3)');
      depthGradient.addColorStop(0.5, 'rgba(0, 0, 0, 0)');
      depthGradient.addColorStop(1, 'rgba(10, 5, 30, 0.3)');
      ctx.fillStyle = depthGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw stars with twinkling
      stars.forEach((star) => {
        star.twinkleAmount = Math.sin(time * star.twinkleSpeed + Math.random()) * 0.5 + 0.5;
        const finalOpacity = star.opacity * star.twinkleAmount;

        ctx.fillStyle = star.color;
        ctx.globalAlpha = finalOpacity;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();

        // Add subtle glow to brighter stars
        if (star.size > 0.8) {
          ctx.fillStyle = star.color;
          ctx.globalAlpha = finalOpacity * 0.3;
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size * 3, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      ctx.globalAlpha = 1;

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className="cosmic-background">
      <canvas ref={canvasRef} className="starfield-canvas" />
      <div className="nebula nebula-1"></div>
      <div className="nebula nebula-2"></div>
      <div className="nebula nebula-3"></div>
      <div className="space-dust"></div>
    </div>
  );
}

export default CosmicBackground;

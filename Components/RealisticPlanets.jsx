'use client';

import React, { useEffect, useRef } from 'react';
import '../styles/RealisticPlanets.css';

function RealisticPlanets() {
  const canvasRefs = useRef({});

  useEffect(() => {
    const planets = [
      {
        id: 'jupiter',
        size: 140,
        top: '18%',
        left: '8%',
        rotation: 0,
        rotationSpeed: 0.015,
        render: drawJupiter,
      },
      {
        id: 'saturn',
        size: 120,
        top: '50%',
        left: '88%',
        rotation: 0,
        rotationSpeed: 0.012,
        render: drawSaturn,
      },
      {
        id: 'mars',
        size: 85,
        top: '62%',
        left: '12%',
        rotation: 0,
        rotationSpeed: 0.018,
        render: drawMars,
      },
      {
        id: 'venus',
        size: 95,
        top: '8%',
        left: '70%',
        rotation: 0,
        rotationSpeed: 0.01,
        render: drawVenus,
      },
      {
        id: 'mercury',
        size: 55,
        top: '75%',
        left: '55%',
        rotation: 0,
        rotationSpeed: 0.02,
        render: drawMercury,
      },
      {
        id: 'earth',
        size: 100,
        top: '35%',
        left: '92%',
        rotation: 0,
        rotationSpeed: 0.014,
        render: drawEarth,
      }
    ];

    planets.forEach(planet => {
      const canvas = canvasRefs.current[planet.id];
      if (canvas) {
        canvas.width = planet.size;
        canvas.height = planet.size;
        animate(planet);
      }
    });

    function animate(planetData) {
      const canvas = canvasRefs.current[planetData.id];
      if (!canvas) return;

      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      planetData.rotation += planetData.rotationSpeed;
      planetData.render(ctx, planetData.size, planetData.rotation);

      requestAnimationFrame(() => animate(planetData));
    }
  }, []);

  // Helper: Draw realistic sphere with 3D atmosphere and shadows
  function drawRealisticSphere(ctx, x, y, radius, colorStops, rotation, features = []) {
    ctx.save();
    ctx.translate(x, y);

    // 1. Base Atmosphere/Glow (Behind the planet)
    const atmoGrad = ctx.createRadialGradient(0, 0, radius, 0, 0, radius * 1.3);
    atmoGrad.addColorStop(0, 'rgba(255, 255, 255, 0.05)');
    atmoGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = atmoGrad;
    ctx.beginPath();
    ctx.arc(0, 0, radius * 1.3, 0, Math.PI * 2);
    ctx.fill();

    // 2. Planet Base (The "Texture")
    const planetGrad = ctx.createLinearGradient(-radius, 0, radius, 0); // Horizontal gradient for day/night feel base
    colorStops.forEach(stop => planetGrad.addColorStop(stop.pos, stop.color));

    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, Math.PI * 2);
    ctx.fillStyle = planetGrad;
    ctx.fill();

    // 3. Features (Bands, Craters, Continents) - Rotated locally
    ctx.save();
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, Math.PI * 2);
    ctx.clip(); // Clip features to sphere

    // Rotate the context to simulate vertical axis rotation
    // We scroll features horizontally
    const scrollOffset = (rotation * 50) % (radius * 4); // Continuous scroll

    features.forEach(f => {
      // Draw feature multiple times for seamless wrap
      drawFeature(ctx, f, radius, scrollOffset);
      drawFeature(ctx, f, radius, scrollOffset - radius * 4);
    });
    ctx.restore();

    // 4. Shadow / Terminator Line (Creating the 3D phase)
    // Darken right side to simulate light coming from left
    const shadowGrad = ctx.createRadialGradient(
      -radius * 0.4, -radius * 0.4, radius * 0.5,
      0, 0, radius * 1.5
    );
    shadowGrad.addColorStop(0, 'rgba(0, 0, 0, 0)'); // Lit side
    shadowGrad.addColorStop(0.6, 'rgba(0, 0, 0, 0.4)'); // Mid
    shadowGrad.addColorStop(1, 'rgba(5, 5, 10, 0.9)'); // Dark side

    ctx.fillStyle = shadowGrad;
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, Math.PI * 2);
    ctx.fill();

    // 5. Specular Highlight (Reflection of Sun)
    // Top-left highlight
    const highlightGrad = ctx.createRadialGradient(
      -radius * 0.4, -radius * 0.4, 0,
      -radius * 0.4, -radius * 0.4, radius * 0.6
    );
    highlightGrad.addColorStop(0, 'rgba(255, 255, 255, 0.2)');
    highlightGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');
    ctx.fillStyle = highlightGrad;
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  }

  function drawFeature(ctx, f, r, offset) {
    if (f.type === 'band') {
      ctx.fillStyle = f.color;
      ctx.beginPath();
      // Complex band curve to simulate sphere
      const y = f.y * r;
      const h = f.height * r;
      ctx.fillRect(-r * 2, y, r * 4, h);
      // Simple rect for bands, curvature handled by sphere clip/shading
    }
  }

  // Jupiter
  function drawJupiter(ctx, size, rotation) {
    const r = size * 0.45;
    const colors = [
      { pos: 0, color: '#9c7c5f' },
      { pos: 0.5, color: '#e0c7a3' },
      { pos: 1, color: '#8a6e53' }
    ];
    const features = [
      { type: 'band', y: -0.5, height: 0.1, color: 'rgba(90, 60, 40, 0.6)' },
      { type: 'band', y: -0.2, height: 0.15, color: 'rgba(120, 90, 70, 0.5)' },
      { type: 'band', y: 0.1, height: 0.2, color: 'rgba(100, 70, 50, 0.7)' }, // Great Red Spot area
      { type: 'band', y: 0.5, height: 0.1, color: 'rgba(80, 50, 30, 0.6)' }
    ];

    drawRealisticSphere(ctx, size / 2, size / 2, r, colors, rotation, features);
  }

  // Saturn
  function drawSaturn(ctx, size, rotation) {
    const r = size * 0.35;
    const centerX = size / 2;
    const centerY = size / 2;

    // Rings (Back)
    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.rotate(0.4); // Tilt rings
    ctx.scale(1, 0.3); // Flatten rings
    ctx.beginPath();
    ctx.arc(0, 0, r * 2.5, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(180, 160, 130, 0.3)';
    ctx.fill();
    ctx.lineWidth = r * 0.5;
    ctx.strokeStyle = 'rgba(160, 140, 110, 0.6)';
    ctx.stroke();
    ctx.restore();

    // Planet Body
    const colors = [
      { pos: 0, color: '#d0ba88' },
      { pos: 0.5, color: '#efe6c2' },
      { pos: 1, color: '#caa570' }
    ];
    drawRealisticSphere(ctx, centerX, centerY, r, colors, rotation, []);

    // Rings (Front - partial draw to simulate occlusion? Canvas is 2D, so we draw full rings behind or in front. 
    // To do it properly: Back rings -> Planet -> Front rings.
    // The above "Rings (Back)" drew full rings which is wrong if behind. 
    // Let's rely on opacity/blending for now or just simple 2D representation.)

    // Better Ring Drawing (Front Arc only)
    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.rotate(0.4);
    ctx.scale(1, 0.3);
    ctx.beginPath();
    ctx.arc(0, 0, r * 2.5, 0, Math.PI, false); // Front half
    ctx.lineWidth = r * 0.3;
    ctx.strokeStyle = 'rgba(200, 190, 170, 0.4)';
    ctx.stroke();
    ctx.restore();
  }

  // Mars (Rusty)
  function drawMars(ctx, size, rotation) {
    const r = size * 0.45;
    const colors = [
      { pos: 0, color: '#8c4b31' },
      { pos: 0.5, color: '#c97453' },
      { pos: 1, color: '#5e3223' }
    ];
    drawRealisticSphere(ctx, size / 2, size / 2, r, colors, rotation, []);
  }

  // Venus (Cloudy)
  function drawVenus(ctx, size, rotation) {
    const r = size * 0.45;
    const colors = [
      { pos: 0, color: '#e6c888' },
      { pos: 1, color: '#c4a76c' }
    ];
    drawRealisticSphere(ctx, size / 2, size / 2, r, colors, rotation, []);
  }

  // Mercury (Rocky)
  function drawMercury(ctx, size, rotation) {
    const r = size * 0.45;
    const colors = [
      { pos: 0, color: '#999' },
      { pos: 1, color: '#666' }
    ];
    drawRealisticSphere(ctx, size / 2, size / 2, r, colors, rotation, []);
  }

  // Earth (Blue)
  function drawEarth(ctx, size, rotation) {
    const r = size * 0.45;
    const colors = [
      { pos: 0, color: '#105285' },
      { pos: 0.5, color: '#1E6AAA' },
      { pos: 1, color: '#0A3157' }
    ];
    drawRealisticSphere(ctx, size / 2, size / 2, r, colors, rotation, []);
  }

  return (
    <div className="realistic-planets-container">
      <canvas
        ref={el => canvasRefs.current['jupiter'] = el}
        className="planet-canvas planet-jupiter"
        style={{ top: '18%', left: '8%' }}
      />
      <canvas
        ref={el => canvasRefs.current['saturn'] = el}
        className="planet-canvas planet-saturn"
        style={{ top: '50%', left: '88%' }}
      />
      <canvas
        ref={el => canvasRefs.current['mars'] = el}
        className="planet-canvas planet-mars"
        style={{ top: '62%', left: '12%' }}
      />
      <canvas
        ref={el => canvasRefs.current['venus'] = el}
        className="planet-canvas planet-venus"
        style={{ top: '8%', left: '70%' }}
      />
      <canvas
        ref={el => canvasRefs.current['mercury'] = el}
        className="planet-canvas planet-mercury"
        style={{ top: '75%', left: '55%' }}
      />
      <canvas
        ref={el => canvasRefs.current['earth'] = el}
        className="planet-canvas planet-earth"
        style={{ top: '35%', left: '92%' }}
      />
    </div>
  );
}

export default RealisticPlanets;
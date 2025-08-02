import { useEffect, useRef } from "react";

export default function NorthernLightsBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

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

    let animationId: number;
    let time = 0;

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      time += 0.003;

      // Create subtle aurora layers
      for (let layer = 0; layer < 2; layer++) {
        const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
        
        // Realistic northern lights colors - dark blues and grays
        const colors = [
          ['rgba(25, 45, 75, 0.12)', 'rgba(35, 55, 85, 0.10)', 'rgba(45, 65, 95, 0.08)'],
          ['rgba(30, 50, 80, 0.10)', 'rgba(40, 60, 90, 0.08)', 'rgba(50, 70, 100, 0.06)']
        ];

        gradient.addColorStop(0, colors[layer][0]);
        gradient.addColorStop(0.5, colors[layer][1]);
        gradient.addColorStop(1, colors[layer][2]);

        ctx.fillStyle = gradient;

        // Draw gentle wavy aurora shapes
        ctx.beginPath();
        for (let x = 0; x <= canvas.width; x += 15) {
          const wave1 = Math.sin((x * 0.008) + (time * (layer + 1) * 0.5)) * (30 + layer * 20);
          const wave2 = Math.cos((x * 0.006) + (time * (layer + 1) * 0.3)) * (20 + layer * 15);
          const y = (canvas.height * 0.4) + wave1 + wave2 + (layer * 80);
          
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        
        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.closePath();
        ctx.fill();
      }

      // Add HD animated twinkling stars with movement
      for (let i = 0; i < 150; i++) {
        // Animated position with subtle drift
        const baseX = (i * 137.5) % canvas.width;
        const baseY = (i * 73.3) % (canvas.height * 0.85);
        const driftX = Math.sin(time * 0.2 + i * 0.1) * 15;
        const driftY = Math.cos(time * 0.15 + i * 0.08) * 10;
        const x = baseX + driftX;
        const y = baseY + driftY;
        
        // Enhanced twinkling with pulsing
        const twinkle = Math.sin(time * 2 + i * 0.5) * 0.4 + 0.6;
        const pulse = Math.sin(time * 1.2 + i * 0.3) * 0.2 + 0.8;
        const size = (Math.sin(i * 0.7) * 0.5 + 0.5) * 2 + 0.5;
        const brightness = Math.sin(i * 0.3) * 0.4 + 0.6;
        
        // Create animated star cross pattern
        const starIntensity = twinkle * brightness * pulse;
        const rayLength = size * (2 + Math.sin(time + i) * 0.5);
        
        // Apply entrance animation to all star elements
        const appearanceDelay = (i * 0.05) % 4;
        const starAge = Math.max(0, time - appearanceDelay);
        const entranceAlpha = Math.min(1, starAge * 0.5);
        const entranceScale = Math.min(1, starAge * 0.8);
        
        if (entranceAlpha > 0) {
          // Main star core - bright white with pulsing and entrance effect
          ctx.fillStyle = `rgba(255, 255, 255, ${starIntensity * entranceAlpha})`;
          ctx.beginPath();
          ctx.arc(x, y, size * 0.3 * pulse * entranceScale, 0, Math.PI * 2);
          ctx.fill();
          
          // Animated star rays - rotating slightly with entrance effect
          const rotation = time * 0.1 + i * 0.05;
          ctx.strokeStyle = `rgba(240, 250, 255, ${starIntensity * 0.7 * entranceAlpha})`;
          ctx.lineWidth = size * 0.15 * entranceScale;
          ctx.save();
          ctx.translate(x, y);
          ctx.rotate(rotation);
          ctx.beginPath();
          ctx.moveTo(-rayLength * entranceScale, 0);
          ctx.lineTo(rayLength * entranceScale, 0);
          ctx.moveTo(0, -rayLength * entranceScale);
          ctx.lineTo(0, rayLength * entranceScale);
          // Add diagonal rays for 8-pointed star effect
          ctx.moveTo(-rayLength * 0.7 * entranceScale, -rayLength * 0.7 * entranceScale);
          ctx.lineTo(rayLength * 0.7 * entranceScale, rayLength * 0.7 * entranceScale);
          ctx.moveTo(-rayLength * 0.7 * entranceScale, rayLength * 0.7 * entranceScale);
          ctx.lineTo(rayLength * 0.7 * entranceScale, -rayLength * 0.7 * entranceScale);
          ctx.stroke();
          ctx.restore();
          
          // Animated outer glow with blue tint and entrance effect
          const glowSize = size * (3 + Math.sin(time * 0.8 + i) * 0.5) * entranceScale;
          ctx.fillStyle = `rgba(200, 220, 255, ${starIntensity * 0.15 * entranceAlpha})`;
          ctx.beginPath();
          ctx.arc(x, y, glowSize, 0, Math.PI * 2);
          ctx.fill();
          
          // Add occasional shooting star effect
          if (Math.sin(time * 0.5 + i * 10) > 0.99 && starAge > 1) {
            ctx.strokeStyle = `rgba(255, 255, 255, ${starIntensity * 0.8 * entranceAlpha})`;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(x - 30, y + 15);
            ctx.lineTo(x + 10, y - 5);
            ctx.stroke();
            
            // Add sparkle trail
            for (let j = 0; j < 3; j++) {
              const trailX = x - 20 + j * 8;
              const trailY = y + 12 - j * 3;
              ctx.fillStyle = `rgba(255, 255, 255, ${starIntensity * 0.3 * entranceAlpha})`;
              ctx.beginPath();
              ctx.arc(trailX, trailY, 1, 0, Math.PI * 2);
              ctx.fill();
            }
          }
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ background: 'linear-gradient(to bottom, #000000, #0a0a15, #000000)' }}
    />
  );
}
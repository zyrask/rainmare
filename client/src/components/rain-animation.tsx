import { useEffect, useRef } from "react";

export default function RainAnimation() {
  const rainContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const rainContainer = rainContainerRef.current;
    if (!rainContainer) return;

    const dropCount = 50;
    let animationId: number;

    function createRainDrop() {
      const drop = document.createElement('div');
      drop.className = 'rain-drop';
      drop.style.left = Math.random() * 100 + '%';
      drop.style.animationDuration = (Math.random() * 3 + 2) + 's';
      drop.style.animationDelay = Math.random() * 2 + 's';
      rainContainer?.appendChild(drop);

      setTimeout(() => {
        if (drop.parentNode) {
          drop.parentNode.removeChild(drop);
        }
      }, 5000);
    }

    function startRain() {
      for (let i = 0; i < dropCount; i++) {
        setTimeout(createRainDrop, i * 100);
      }
    }

    function animateRain() {
      startRain();
      animationId = requestAnimationFrame(() => {
        setTimeout(animateRain, 5000);
      });
    }

    animateRain();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      // Clean up any remaining drops
      const drops = rainContainer.querySelectorAll('.rain-drop');
      drops.forEach(drop => drop.remove());
    };
  }, []);

  return <div ref={rainContainerRef} className="rain-container" />;
}

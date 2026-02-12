import { useEffect, useRef } from "react";
import gsap from "gsap";

const AnimatedBackground = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const numBlobs = 3;
    const blobs = [];

    for (let i = 0; i < numBlobs; i++) {
      const blob = document.createElement("div");
      blob.className =
        "absolute rounded-full blur-[120px] opacity-30 pointer-events-none";

      const colors = ["bg-blue-600", "bg-purple-600", "bg-red-600"];
      blob.classList.add(colors[i % colors.length]);

      const size = Math.random() * 400 + 400;
      blob.style.width = `${size}px`;
      blob.style.height = `${size}px`;

      container.appendChild(blob);
      blobs.push(blob);
    }

    blobs.forEach((blob) => {
      gsap.set(blob, {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      });

      gsap.to(blob, {
        x: "+=random(-300, 300)",
        y: "+=random(-300, 300)",
        duration: "random(15, 25)",
        repeat: -1,
        yoyo: true,
        ease: "none",
        onRepeat: () => {
          gsap.to(blob, {
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            duration: 20,
            ease: "sine.inOut",
          });
        },
      });
    });

    return () => {
      if (container) {
        while (container.firstChild) {
          container.removeChild(container.firstChild);
        }
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
      style={{
        background: "linear-gradient(135deg, #0b011d 0%, #05001a 100%)",
      }}
    />
  );
};

export default AnimatedBackground;

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const trailImages = [
    "https://images.unsplash.com/photo-1722405375190-8d0b2a765840?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1498049860654-af1a5c566876?auto=format&fit=crop&q=80&w=400", // Gaming laptop
    "https://images.unsplash.com/photo-1600322305530-45714a0bc945?q=80&w=873&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Smart home device
    "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=400", // Security system
    "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&q=80&w=400", // Tablet device
    "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=400", // Accessories
];

const ImageTrialAnimation = ({children}) => {
  const containerRef = useRef(null);
    const indexRef = useRef(0);
    const lastX = useRef(0);
    const lastY = useRef(0);
    const [distanceThreshold] = useState(window.innerWidth < 900 ? 50 : 100);

    const createTrail = (x, y) => {
        const img = document.createElement('img');
        img.src = trailImages[indexRef.current];
        img.className = 'trail-image';
        indexRef.current = (indexRef.current + 1) % trailImages.length;

        if (!containerRef.current) return;
        containerRef.current.appendChild(img);

        gsap.set(img, {
            x: x - img.width / 2,
            y: y - img.height / 2,
            scale: 0,
            opacity: 0,
            rotation: gsap.utils.random(-15, 15),
            transformOrigin: 'center center'
        });

        gsap.to(img, { scale: 1, opacity: 1, duration: 0.3, ease: 'power2.out' });
        gsap.to(img, { scale: 0.3, opacity: 0, duration: 0.5, delay: 0.1, ease: 'power2.in', onComplete: () => img.remove() });
    };

    useEffect(() => {
        const handleMouseMove = (e) => {
            const dx = e.clientX - lastX.current;
            const dy = e.clientY - lastY.current;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance > distanceThreshold) {
                createTrail(e.clientX, e.clientY);
                lastX.current = e.clientX;
                lastY.current = e.clientY;
            }
        };

        const container = containerRef.current;
        container?.addEventListener('mousemove', handleMouseMove);

        return () => container?.removeEventListener('mousemove', handleMouseMove);
    }, [distanceThreshold]);

    return <div ref={containerRef} className="relative w-screen h-screen overflow-hidden">{children}</div>;
}

export default ImageTrialAnimation

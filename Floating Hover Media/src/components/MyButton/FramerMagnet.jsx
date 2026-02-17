import { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const FramerMagnet = ({ children }) => {
  const ref = useRef(null);

  const motionX = useMotionValue(0);
  const motionY = useMotionValue(0);

  const springX = useSpring(motionX, {
    stiffness: 150,
    damping: 12,
    mass: 0.1
  });

  const springY = useSpring(motionY, {
    stiffness: 150,
    damping: 12,
    mass: 0.1
  });

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);

    motionX.set(x * 0.3); // adjust multiplier for strength
    motionY.set(y * 0.3);
  };

  const handleMouseLeave = () => {
    motionX.set(0);
    motionY.set(0);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block px-4 py-7"
    >
      <motion.div style={{ x: springX, y: springY }}>
        {children}
      </motion.div>
    </div>
  );
};

export default FramerMagnet;

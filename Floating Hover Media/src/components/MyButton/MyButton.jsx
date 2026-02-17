import { useEffect, useRef } from 'react';
import FramerMagnet from './FramerMagnet';
import { Link } from 'react-router-dom';

const MyButton = ({children, size, url }) => {
  const btnRef = useRef(null);
  const shapeRef = useRef(null); 

  useEffect(() => {
    const handleMouseEnter = (e) => {
      const btn = btnRef.current;
      const shape = shapeRef.current;

      const rect = btn.getBoundingClientRect();
      const offsetX = e.clientX - rect.left;
      const offsetY = e.clientY - rect.top;

      // Place shape at mouse position
      shape.style.left = `${offsetX}px`;
      shape.style.top = `${offsetY}px`;

      // Animate to center & scale up
      shape.animate([
        {
          transform: 'translate(-50%, -50%) scale(0)',
          opacity: 1,
        },
        {
          transform: 'translate(-50%, -50%) scale(30)',
          opacity: 1,
        },
      ], {
        duration: 800,
        easing: 'ease-out',
        fill: 'forwards',
      });
    };

    const handleMouseLeave = (e) => {
      const btn = btnRef.current;
      const shape = shapeRef.current;

      const rect = btn.getBoundingClientRect();
      const offsetX = e.clientX - rect.left;
      const offsetY = e.clientY - rect.top;

      // Move shape to exit point
      shape.style.left = `${offsetX}px`;
      shape.style.top = `${offsetY}px`;

      // Animate shrink back to exit point
      shape.animate([
        {
          transform: 'translate(-50%, -50%) scale(20)',
        },
        {
          transform: 'translate(-50%, -50%) scale(0)',
        },
      ], {
        duration: 800,
        easing: 'ease-in-out',
        fill: 'forwards',
      });
    };

    const btn = btnRef.current;
    btn.addEventListener('mouseenter', handleMouseEnter);
    btn.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      btn.removeEventListener('mouseenter', handleMouseEnter);
      btn.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <FramerMagnet>
      <Link
        to={url} 
        ref={btnRef}
        style={{ width: size, height: size }}
        className={`border border-gray-500 rounded-full text-light relative overflow-hidden center-center`}
      >
        {children}

        <span
          ref={shapeRef}
          className="absolute w-5 h-5 bg-white rounded-full pointer-events-none"
          style={{
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%) scale(0)',
            opacity: 0,
          }}
        />
      </Link>
    </FramerMagnet>
  );
};

export default MyButton;

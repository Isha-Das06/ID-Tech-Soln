
import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const Cursor: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  
  const mouseX = useSpring(0, { stiffness: 500, damping: 28 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 28 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const target = e.target as HTMLElement;
      setIsHovering(
        !!target.closest('button') || 
        !!target.closest('a') || 
        !!target.closest('.interactive')
      );
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] mix-blend-screen flex items-center justify-center"
        style={{ x: mouseX, y: mouseY, translateX: '-50%', translateY: '-50%' }}
      >
        {/* The Outer Orb */}
        <motion.div
          animate={{
            width: isHovering ? 60 : 32,
            height: isHovering ? 60 : 32,
            scale: isClicking ? 0.8 : 1,
            borderColor: isHovering ? '#00D6FF' : 'rgba(0, 214, 255, 0.4)',
          }}
          className="rounded-full border-2 absolute transition-colors duration-300"
        />
        
        {/* The Inner Heart Core (symbolizing humanity) */}
        <motion.div
          animate={{
            scale: isHovering ? 1.5 : 1,
            opacity: isHovering ? 1 : 0.6,
          }}
          className="w-2 h-2 bg-[#00D6FF] rounded-full shadow-[0_0_10px_#00D6FF]"
        />
      </motion.div>
      
      {/* Light Trail */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#00D6FF] opacity-20 pointer-events-none z-[9998]"
        style={{
          x: useSpring(mouseX, { stiffness: 100, damping: 20 }),
          y: useSpring(mouseY, { stiffness: 100, damping: 20 }),
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
    </>
  );
};

export default Cursor;

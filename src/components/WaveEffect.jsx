import React, { useEffect, useRef } from 'react';

const WaveEffect = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Wave parameters
    let time = 0;
    const waveHeight = 60;
    const waveSpeed = 0.02;
    const waveFrequency = 0.01;

    const animate = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Set fill color (responsive to dark mode)
      const isDark = document.documentElement.classList.contains('dark');
      ctx.fillStyle = isDark ? '#0f172a' : '#ffffff';
      
      // Create wave path
      ctx.beginPath();
      ctx.moveTo(0, canvas.height);
      
      // Generate wave points
      for (let x = 0; x <= canvas.width; x += 2) {
        const y = canvas.height - waveHeight + 
                  Math.sin(x * waveFrequency + time) * waveHeight * 0.5 +
                  Math.sin(x * waveFrequency * 2 + time * 1.5) * waveHeight * 0.3;
        ctx.lineTo(x, y);
      }
      
      // Complete the shape
      ctx.lineTo(canvas.width, canvas.height);
      ctx.lineTo(0, canvas.height);
      ctx.closePath();
      ctx.fill();
      
      time += waveSpeed;
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="absolute bottom-0 left-0 w-full h-[100px] overflow-hidden z-10">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ display: 'block' }}
      />
    </div>
  );
};

export default WaveEffect;
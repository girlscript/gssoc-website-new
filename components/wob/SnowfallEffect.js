// components/SnowfallEffect.js
import React, { useEffect, useRef } from 'react';
import styles from './SnowfallEffect.module.css';

const SnowfallEffect = ({ snowflakeCount = 50 }) => {
  const snowflakeCountRef = useRef(0);

  useEffect(() => {
    const createSnowflake = () => {
      if (snowflakeCountRef.current >= snowflakeCount) return;

      const snowflake = document.createElement('div');
      snowflake.className = styles.snowflake;
      snowflake.style.left = `${Math.random() * 100}vw`;
      snowflake.style.animationDuration = `${Math.random() * 10 + 5}s`; // Speed between 5 and 15 seconds
      snowflake.style.transform = `rotate(${Math.random() * 360}deg)`;
      snowflake.style.animationDirection = Math.random() > 0.5 ? 'normal' : 'reverse';
      snowflake.style.animationDelay = `${Math.random() * -10}s`; // Delay to spread snowflakes over time
      snowflake.style.width = `${Math.random() * 10 + 5}px`; // Radius between 5 and 15 pixels
      snowflake.style.height = snowflake.style.width;
      snowflake.style.zIndex = '11'; // Ensure z-index > 10

      // Random wind effect
      const wind = (Math.random() * 3 - 1.5).toFixed(2); // Wind between -1.5 and 1.5
      snowflake.style.animation = `fall ${Math.random() * 10 + 5}s linear infinite, sway ${wind}s ease-in-out infinite alternate`;

      document.body.appendChild(snowflake);
      snowflakeCountRef.current++;

      setTimeout(() => {
        snowflake.remove();
        snowflakeCountRef.current--;
      }, 15000); // Ensure the timeout matches the maximum duration of the animation
    };

    const interval = setInterval(createSnowflake, 300); // Create a snowflake every 300ms
    return () => clearInterval(interval);
  }, [snowflakeCount]);

  return null;
};

export default SnowfallEffect;

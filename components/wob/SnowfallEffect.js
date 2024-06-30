import React, { useEffect } from 'react';
import styles from './SnowfallEffect.module.css';

const SnowfallEffect = () => {
  useEffect(() => {
    const createSnowflake = () => {
      const snowflake = document.createElement('div');
      snowflake.className = styles.snowflake;
      snowflake.style.left = `${Math.random() * 100}vw`;
      snowflake.style.animationDuration = `${Math.random() * 1.2 - 0.2}s`; // Speed between 0.5 and 3 seconds
      snowflake.style.transform = `rotate(${Math.random() * 360}deg)`;
      snowflake.style.animationDirection = Math.random() > 0.5 ? 'normal' : 'reverse';
      snowflake.style.animationDelay = `${Math.random() * -5}s`; // Delay to spread snowflakes over time
      snowflake.style.width = `${Math.random() * 15 + 5}px`; // Radius between 5 and 20 pixels
      snowflake.style.height = snowflake.style.width;
      snowflake.style.zIndex = '11';

      // Random wind effect
      const wind = (Math.random() * 3 - 0.5).toFixed(2); // Wind between -0.5 and 2.5
      snowflake.style.animation = `fall ${Math.random() * 2.5 + 0.5}s linear infinite, sway ${wind}s ease-in-out infinite alternate`;

      document.body.appendChild(snowflake);

      setTimeout(() => {
        snowflake.remove();
      }, 5000);
    };

    const interval = setInterval(createSnowflake, 100);
    return () => clearInterval(interval);
  }, []);

  return null;
};

export default SnowfallEffect;

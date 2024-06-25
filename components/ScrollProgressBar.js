import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const ScrollProgressBar = () => {
  const [scroll, setScroll] = useState(0);
  const router = useRouter();

  const handleScroll = () => {
    const scrolled = document.documentElement.scrollTop;
    const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolledPercentage = `${(scrolled / totalScroll) * 100}%`;
    setScroll(scrolledPercentage);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleRouteChange = () => {
      setScroll(0);
    };

    router.events.on('routeChangeStart', handleRouteChange);
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router.events]);

  return (
    <div className="scroll-progress-container">
      <div className="scroll-progress-bar" style={{ width: scroll }} />
    </div>
  );
};

export default ScrollProgressBar;

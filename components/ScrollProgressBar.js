import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const ScrollProgressBar = () => {
  const [scroll, setScroll] = useState(0);
  const router = useRouter();
  const [isWobRoute, setIsWobRoute] = useState(false);

  useEffect(() => {
    if (router.asPath.startsWith("/wob")) {
      setIsWobRoute(false); // set it as true if you want to launch the website
    } else {
      setIsWobRoute(false);
    }
  }, [router.asPath]);

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
      <div className="scroll-progress-bar" style={isWobRoute?{ width: scroll,background:"#85C6DC"}:{width: scroll}} />
    </div>
  );
};

export default ScrollProgressBar;

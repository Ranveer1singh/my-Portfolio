import React, { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

const Scroll = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true, // Enable smooth scrolling
      // Add your Locomotive Scroll configuration here
    });

    return () => {
      scroll.destroy(); // Cleanup when the component unmounts
    };
  }, []);

  return <div ref={scrollRef}></div>;
};

export default Scroll;
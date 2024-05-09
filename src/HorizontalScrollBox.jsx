import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // ScrollTrigger를 추가해야 합니다.

gsap.registerPlugin(ScrollTrigger); // ScrollTrigger를 등록합니다.

const HorizontalScrollBox = () => {
  const boxRef = useRef(null);

  useEffect(() => {
    const box = boxRef.current;
    gsap.to(box, {
      scrollTrigger: {
        trigger: box,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
        pin: true,
        anticipatePin: 1,
        markers: true,
      },
      transform: `translateX(${window.scrollY})`,
    });
  }, []);

  return (
    <div className="container">
      <div className="box" ref={boxRef}></div>
    </div>
  );
};

export default HorizontalScrollBox;

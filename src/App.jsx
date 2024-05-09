import gsap from 'gsap';
import './App.css';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(useGSAP, ScrollTrigger);

function App() {
  const container = useRef();
  const container2 = useRef();
  const container3 = useRef();
  const circlebox = gsap.utils.selector(container);
  const circlebox2 = gsap.utils.selector(container2);
  const circlebox3 = gsap.utils.selector(container3);

  useGSAP(
    () => {
      gsap.from(circlebox('.circle'), {
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        y: 1000,
      });
      gsap.from(circlebox('.title'), {
        opacity: 0,
        duration: 1,
        x: -500,
      });
    },
    { scope: container },
  );
  const handleRotate = e => {
    gsap.to(e.currentTarget, {
      rotate: 360,
    });
  };
  useGSAP(
    () => {
      gsap.from(circlebox2('.circle2'), {
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        x: 100,
        scrollTrigger: {
          trigger: container2.current,
          start: 'top bottom',
          end: 'bottom top',
          toggleActions: 'play none none none',
          markers: true,
        },
      });
    },
    { scope: container2 },
  );

  useGSAP(
    () => {
      gsap.to(circlebox3('.circle3'), {
        x: '-900%',
        scrollTrigger: {
          trigger: container3.current,
          start: 'top top',
          end: 'bottom end',
          pin: true,
          scrub: 3,
          markers: true,
        },
      });
    },
    { scope: container3 },
  );

  return (
    <div className="App">
      <div ref={container} className="container">
        <div className="title">
          <h1>인트로용 페이지</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet optio
            <br />
            neque qui nulla sint molestiae deserunt itaque cupiditate.
            <br />
            Ut at voluptatem nemo exercitationem natus dolorem. Praesentium
            soluta aspernatur quasi eaque.
          </p>
        </div>
        <div onClick={handleRotate} className="circle blue"></div>
        <div className="circle"></div>
      </div>
      <section>
        <h2>어쩌면 이런건</h2>
        <div ref={container2} className="container2">
          <div className="circle2 red"></div>
          <div className="circle2 blue"></div>
          <div className="circle2"></div>
        </div>
      </section>
      <div ref={container3} className="container3">
        <div className="circle3">1</div>
        <div className="circle3">2</div>
        <div className="circle3">3</div>
        <div className="circle3">4</div>
        <div className="circle3">5</div>
        <div className="circle3">6</div>
        <div className="circle3">7</div>
        <div className="circle3">8</div>
        <div className="circle3">9</div>
      </div>
      <div className="end">END</div>
    </div>
  );
}

export default App;

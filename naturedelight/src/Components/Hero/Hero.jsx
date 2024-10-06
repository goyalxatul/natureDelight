import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import image from '../../assets/image.svg'; 

function Hero() {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const subTextRef = useRef(null);
  const descriptionRef = useRef(null);
  const imageRef = useRef(null);
  const newsTickerRef = useRef(null);

  useEffect(() => { 
    gsap.fromTo( 
      heroRef.current, 
      { opacity: 0 }, 
      { opacity: 1, duration: 1.5 }
    ); 

    gsap.fromTo( 
      textRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 1, ease: 'power3.out' }
    ); 

    gsap.fromTo( 
      subTextRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 1.5, ease: 'power3.out' }
    ); 

    gsap.fromTo(
      descriptionRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 2, ease: 'power3.out' }
    );

    gsap.fromTo(
      imageRef.current,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 1, delay: 2.5, ease: 'power3.out' }
    );

    const updateTicker = () => {
      const ticker = newsTickerRef.current;
      const tickerWidth = ticker.scrollWidth;
      const containerWidth = ticker.parentElement.clientWidth;

      gsap.to(ticker, {
        x: `-${tickerWidth}px`,
        opacity: 0.7,
        duration: tickerWidth / 30, // Adjust speed for smoothness
        ease: 'linear',
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize(value => parseFloat(value) % tickerWidth)
        }
      });
    };

    updateTicker(); // Initial call to setup animation

    window.addEventListener('resize', updateTicker); // Update on resize

    return () => {
      window.removeEventListener('resize', updateTicker);
    };

  }, []);

  return (
    <>
      <div 
        className="bg-green-600 text-white py-2 text-center text-lg overflow-hidden"
        ref={newsTickerRef}
        style={{ whiteSpace: 'nowrap', padding: '0 10px' }} // Add padding to avoid edges
      >
        Latest News: Our upcoming event on environmental conservation will be held on October 15th. Join us in our mission to protect nature!
      </div>
      <section
        className="h-screen flex flex-col justify-start items-center bg-cover bg-center text-black p-4 sm:p-8" // Adjust padding for mobile
        ref={heroRef}
      >
        <h1 
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mt-6 sm:mt-12" // Adjust font size for mobile
          ref={textRef}
        >
          Nature Delight Foundation
        </h1>
        <h2
          className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mt-2 sm:mt-4"
          ref={subTextRef}
        >
          रक्षति रक्षित:
        </h2>
        <p
          className="text-base sm:text-lg text-gray-600 text-center mt-2 sm:mt-4 max-w-lg sm:max-w-2xl"
          ref={descriptionRef}
        >
          It emphasizes the moral and ethical dimension of human relationships, advocating for a sense of duty towards others.
        </p>
        <div className="mt-6 sm:mt-12">
          <img
            src={image}
            alt="Nature"
            className="w-full max-w-md rounded-lg shadow-lg"
            ref={imageRef}
          />
        </div>
      </section>
    </>
  );
}

export default Hero;














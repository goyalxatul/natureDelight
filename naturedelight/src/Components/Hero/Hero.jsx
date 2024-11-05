import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import image from '../../assets/image.svg'; 
import ReforestationCard from '../ReforstationCard/ReforestationCard';

const reforestationProcesses = [
  {
    title: 'Step 1: Seed Selection',
    description: 'Choosing the right seeds is crucial for successful reforestation.',
    details: 'In this step, we evaluate the local climate, soil conditions, and native species to select the most suitable seeds for planting.'
  },
  {
    title: 'Step 2: Site Preparation',
    description: 'Preparing the land for planting, including clearing and soil enhancement.',
    details: 'This involves removing weeds, rocks, and debris, and may include tilling the soil and adding fertilizers or compost to improve soil health.'
  },
  {
    title: 'Step 3: Planting',
    description: 'Carefully planting seeds or saplings in the prepared areas.',
    details: 'The planting process includes spacing plants adequately and ensuring they are planted at the correct depth for optimal growth.'
  },
  {
    title: 'Step 4: Maintenance',
    description: 'Regular care including watering, weeding, and monitoring growth.',
    details: 'Ongoing maintenance includes checking for pests, ensuring adequate water supply, and pruning when necessary to promote healthy growth.'
  },
];

function Hero() {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const subTextRef = useRef(null);
  const descriptionRef = useRef(null);
  const imageRef = useRef(null);
  const [selectedProcess, setSelectedProcess] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => { 
    gsap.fromTo( 
      heroRef.current, 
      { opacity: 0 }, 
      { opacity: 1, duration: 1.5 }
    ); 

    // GSAP animations for text and image
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
  }, []);

  const handleCardClick = (process) => {
    setSelectedProcess(process);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProcess(null);
  };

  return (
    <section
      className="min-h-screen flex flex-col justify-start items-center bg-cover bg-center text-black p-4 sm:p-8"
      ref={heroRef}
    >
      <h1 ref={textRef} className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mt-6 sm:mt-12">
        Nature Delight Foundation
      </h1>
      <h2 ref={subTextRef} className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mt-2 sm:mt-4">
        रक्षति रक्षित:
      </h2>
      <p ref={descriptionRef} className="text-base sm:text-lg text-gray-600 text-center mt-2 sm:mt-4 max-w-lg sm:max-w-2xl">
        It emphasizes the moral and ethical dimension of human relationships, advocating for a sense of duty towards others.
      </p>
      <div className="mt-6 sm:mt-12">
        <img src={image} alt="Nature" className="w-full max-w-md rounded-lg shadow-lg" ref={imageRef} />
      </div>

      {/* Methods of Reforestation Section */}
      <h3 className="text-2xl font-bold text-gray-600 mt-8 mb-4 text-center">
        Methods of Reforestation
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {reforestationProcesses.map((process) => (
          <ReforestationCard 
            key={process.title} 
            title={process.title} 
            description={process.description} 
            onClick={() => handleCardClick(process)} 
          />
        ))}
      </div>

      {/* Modal for Selected Process Info */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="bg-white rounded-lg p-8 max-w-lg mx-4">
            <h4 className="text-2xl font-bold mb-4">{selectedProcess.title}</h4>
            <p className="text-base mb-2">{selectedProcess.description}</p>
            <p className="text-sm text-gray-700">{selectedProcess.details}</p>
            <button 
              onClick={closeModal} 
              className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Hero;













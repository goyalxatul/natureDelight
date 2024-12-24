import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import ReforestationCard from '../ReforstationCard/ReforestationCard';
import { LoadScript, GoogleMap, Marker } from '@react-google-maps/api';  // Google Maps API components

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
  const characterRef = useRef(null);
  const [isHeroInView, setIsHeroInView] = useState(false);

  // GSAP animations for hero section
  useEffect(() => {
    gsap.fromTo(heroRef.current, { opacity: 0 }, { opacity: 1, duration: 1.5 });
    gsap.fromTo(textRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, delay: 1, ease: 'power3.out' });
    gsap.fromTo(subTextRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1, delay: 1.5, ease: 'power3.out' });
    gsap.fromTo(descriptionRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1, delay: 2, ease: 'power3.out' });
    gsap.fromTo(imageRef.current, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 1, delay: 2.5, ease: 'power3.out' });
  }, []);

  // Handling modal open and close
  const handleCardClick = (process) => {
    setSelectedProcess(process);
    setIsModalOpen(true);
  };
  const volunteerFormURL = 'https://docs.google.com/forms/d/e/1FAIpQLSeSA9HbxDfRFnFpg3Jztt1iWlVv4y9MEEKmHGGm8MFdmj_10A/viewform?vc=0&c=0&w=1&flr=0';
  const handleVolunteerClick = () => window.open(volunteerFormURL, '_blank', 'noopener,noreferrer');

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProcess(null);
  };

  // Detect if hero section is in view
  useEffect(() => {
    const handleScroll = () => {
      const heroPosition = characterRef.current.getBoundingClientRect();
      if (heroPosition.top <= window.innerHeight && heroPosition.bottom >= 0) {
        setIsHeroInView(true);
      } else {
        setIsHeroInView(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-start items-center bg-cover bg-center text-black p-4 sm:p-8">
      {/* Hero Section with Greenish Gradient */}
      <motion.div
        className="flex flex-col md:flex-row items-center justify-center h-screen bg-gradient-to-r from-green-800 to-green-800 text-white rounded-lg shadow-lg p-10 mx-10 mt-10"
        initial={{ opacity: 0 }}
        animate={isHeroInView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
        ref={characterRef}
      >
        <div className="flex-1 flex flex-col items-start justify-center space-y-6">
          <motion.h1
            className="text-5xl font-bold"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Welcome to Nature Delight Foundation
          </motion.h1>
          <div className="text-lg font-medium">
            <p>
              रक्षति रक्षित:
              <br />
              It emphasizes the moral and ethical dimension of human relationships, advocating for a sense of duty towards others.
            </p>
          </div>
          <div className="text-2xl font-semibold">
            🌲🌞<span className="text-white">Enhancing Nature's Beauty since 2020.</span>
          </div>
        </div>
        
        <motion.div
          className="flex-1 relative mt-8 md:mt-0"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src="/banner.jpg"
            alt="Nature Banner"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </motion.div>
      </motion.div>

      {/* Methods of Reforestation Section */}
      <h3 className="text-2xl font-bold text-gray-600 mt-8 mb-4 text-center">
        Methods of Reforestation
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {reforestationProcesses.map((process) => (
          <motion.div
            key={process.title}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleCardClick(process)}
          >
            <ReforestationCard
              title={process.title}
              description={process.description}
            />
          </motion.div>
        ))}
      </div>

      {/* Call-to-Action Section */}
      <div className="bg-green-100 p-10 mt-12 text-center rounded-lg shadow-md">
        <h3 className="text-3xl font-bold mb-4 text-green-700">Join Our Reforestation Effort!</h3>
        <p className="text-lg mb-6">Help us restore ecosystems and protect wildlife by planting trees in areas that need them the most. Your contribution can make a difference!</p>
        <motion.button
        onClick={handleVolunteerClick}
          className="bg-green-800 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Volunteer
        </motion.button>
      </div>

      {/* Interactive Map Section */}
      <h3 className="text-2xl font-bold text-gray-600 mt-12 mb-4 text-center">Our Reforestation Locations</h3>
      <div className="w-full h-96 rounded-lg shadow-lg">
        <LoadScript googleMapsApiKey="AIzaSyC6iBpnvQdOIBi5mPTAHwLUHIPf_h25Pds">
        <GoogleMap
            mapContainerStyle={{ width: '100%', height: '100%' }}
            center={{ lat: 18.5170, lng: 73.8100 }}  // Coordinates for Warje, Pune
            zoom={12} // Adjust the zoom level as needed for the area
          >
            {/* Marker for Warje, Pune */}
            <Marker position={{ lat: 18.5170, lng: 73.8100 }} />
          </GoogleMap>
        </LoadScript>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gray-100 p-10 mt-12 text-center rounded-lg shadow-md">
        <h3 className="text-3xl font-bold mb-4 text-gray-700">What People Are Saying</h3>
        <div className="space-y-6">
          <blockquote className="italic text-lg">
            "The reforestation efforts have brought new life to our community, improving air quality and providing a habitat for wildlife."
          </blockquote>
          <p className="font-bold">– John Doe, Environmental Advocate</p>
          <blockquote className="italic text-lg">
            "I’m so proud to be part of the Nature Delight Foundation’s reforestation initiative. It's amazing to see the change we can make together."
          </blockquote>
          <p className="font-bold">– Jane Smith, Volunteer</p>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="mt-12 text-center">
        <h4 className="text-2xl font-bold text-gray-700">Follow Us for More Updates!</h4>
        <div className="mt-4">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-3xl mx-4 text-blue-600 hover:text-blue-800">
            <i className="fab fa-facebook-square"></i>
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-3xl mx-4 text-blue-400 hover:text-blue-600">
            <i className="fab fa-twitter-square"></i>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-3xl mx-4 text-purple-600 hover:text-purple-800">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>

      {/* Modal for Selected Process Info */}
      {isModalOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="bg-white rounded-lg p-8 max-w-lg mx-4"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h4 className="text-2xl font-bold mb-4">{selectedProcess.title}</h4>
            <p className="text-base mb-2">{selectedProcess.description}</p>
            <p className="text-sm text-gray-700">{selectedProcess.details}</p>
            <motion.button
              onClick={closeModal}
              className="mt-4 px-4 py-2 bg-green-800 text-white rounded hover:bg-green-800"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Close
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}

export default Hero;

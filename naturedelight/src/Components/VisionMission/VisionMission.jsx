import React from 'react';

const VisionMission = () => {
  return (
    <div className="p-10">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Vision Card */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Vision</h1>
          <p className="text-lg text-gray-700">
            Our vision is to create a sustainable future where every community thrives. We envision a world where innovation drives progress, compassion fuels unity, and every individual has the opportunity to reach their full potential.
          </p>
        </div>

        {/* Mission Card */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Mission</h1>
          <p className="text-lg text-gray-700">
            Our mission is to empower communities through education, innovation, and sustainable development. We strive to bridge gaps in resources, foster collaboration, and inspire change that leads to a better quality of life for all.
          </p>
        </div>

      </div>
    </div>
  );
};

export default VisionMission;



import React from 'react';

const ReforestationCard = ({ title, description, onClick }) => {
  return (
    <div 
      className="bg-white rounded-lg shadow-md p-4 cursor-pointer hover:shadow-lg transition"
      onClick={onClick}
    >
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default ReforestationCard;


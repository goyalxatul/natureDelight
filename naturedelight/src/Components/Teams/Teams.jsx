// src/Components/Team/Teams.jsx
import React from 'react';

// Sample team data
const teamData = [
  {
    name: 'Shri Sampat Khaire',
    role: 'Chairman',
    bio: 'Sampat Khaire is Chairman of NDF and planning and managing various activities of NDF',
    photo: '/sampat.jpg',
  },
  {
    name: 'Chandrashekhar Aranake',
    role: 'Vice Chairman',
    bio: 'Chandrashekhar Aranake is Vice Chairman of NDF and planning and managing various activities of NDF',
    photo: '/chandrasekhar.jpg',
  },
  {
    name: 'Shri Sanjay Gole',
    role: 'Secretory',
    bio: 'Sanjay Gole is Secretory of NDF and planning and managing various activities of NDF',
    photo: '/sanjay.jpg',
  },
  {
    name: 'Shri Harishchandra Patil',
    role: 'Vice Secretory',
    bio: 'Harishchandra Patil is Vice Secretory of NDF and planning and managing various activities of NDF and planning sport and cultural activities.',
    photo: '/Harish.jpg',
  },
  {
    name: 'Somnath Wale',
    role: 'Treasurer',
    bio: 'Somnath Wale is Treasurer of NDF and planning and managing various activities of NDF and keeping financial record of NDF.',
    photo: '/somnath.jpg',
  },
  {
    name: 'Sau. Vidya Ghorpade',
    role: 'Co Treasurer',
    bio: 'Vidya Ghorpade is Co- Treasurer of NDF and planning and managing various activities of NDF and supporting for various financial work.',
    photo: '/Vidya.jpg',
  },
  {
    name: 'Shri Sadashiv Eksambe',
    role: 'Member',
    bio: 'Sadashiv Eksambe is Member of NDF and planning and managing various activities of NDF and conducting various activities of NDF i.e. Yoga, tree plantation etc.',
    photo: '/sadashiv.jpg',
  },
  {
    name: 'Deepak Chandgude',
    role: 'Member',
    bio: 'Deepak Chandgude is Member of NDF and planning and managing various activities of NDF. Supporting for tree plantation activities.',
    photo: '/Dipak.jpg',
  },
  {
    name: 'Sau. Shabdashri Yelmeli',
    role: 'Member',
    bio: 'Shabdashri Yelmeli is Member of NDF and planning and managing various activities of NDF and supporting for women empowerment activities.',
    photo: '/yalmalli.jpg',
  }
];

const Teams = () => {
  return (
    <div className="p-6 bg-white min-h-screen">
      <h1 className="text-3xl font-bold mb-4 text-center">Meet Our Team</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {teamData.map((member, index) => (
          <div key={index} className="bg-white p-3 shadow-md rounded-lg flex items-start">
            <img
              src={member.photo}
              alt={member.name}
              className="w-20 h-20 rounded-full mr-3 object-cover"
            />
            <div>
              <h2 className="text-xl font-semibold">{member.name}</h2>
              <p className="text-md text-gray-600">{member.role}</p>
              <p className="mt-1 text-gray-700 text-sm">{member.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;


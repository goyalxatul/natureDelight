import React from 'react';
import { MdArrowForward } from 'react-icons/md'; // Import the arrow icon

const Gallery = () => {
  const googleFormURL1 = 'https://photos.google.com/share/AF1QipPr803xwBLc0uTKEqAH89qilodKdwKHR0cSo4EyXefMpwW61vAM9jgZdggIeHLXfA?key=eEphQVRNV2lKWHdnUnFaSzI0VlFhNHRlblg0cURB';
  const googleFormURL2 = 'https://photos.google.com/share/AF1QipM4EtyBCZoDt8F0Nzk4ie80pYLwBjrECLrTtn93gWf3o5yPc6uvCwn500ixHnQ1wA?key=U3VMSHpLcUU1QVdiVVhyVmE2azhqb0tvaE00dXRR';
  const googleFormURL3 = 'https://photos.google.com/share/AF1QipNe0WLoVuhhkS4KfUpDQ7rrv0UkYQRjw54-8bLmIlgOspDaNOtH4BPb3yIWFT3hbw?key=Q3lkYUtsdFZBWlBYckJfUHNaTDVMamdSTXF6Mm93';
  const googleFormURL4 = 'https://photos.google.com/share/AF1QipNLzIQoDXNLBWt0GqW7h5cxKgBXbLvgbqNjeIR94G7G-lPyuy5tPQ4Iema5Sf7pcQ?key=d1o0YVNMYkVYQzJpM05VVnJUWEM2RmRJRHpkOS1n';
  const googleFormURL5 = 'https://photos.google.com/share/AF1QipN3Ju9fEqIIq4zCmZY_7ftKfQ2TNoOsPUYOUkjX7VRl3i7H2t4fkt_9LHTdXW_S0A?key=NTFnV1p5SHFxS0IxeUZqZVZxYlk4czBLZGM0eUtn';
  const googleFormURL6 = 'https://photos.google.com/share/AF1QipMOU5arlTBL2hT29d7kCIxDOHAJEcj5mp96n1BGu-mweQaqdgXdIqPgGm5H4D9xIg?key=bEpJZHhIVXJsTWd3R0JhY1hETGFRYVJDZGkzTHNB';

  const links = [
    { name: '10th Anniversary', url: googleFormURL1 },
    { name: 'First', url: googleFormURL2 },
    { name: 'Bag Distribution', url: googleFormURL3 },
    { name: 'Kundalwadi Sangli Flood Victims', url: googleFormURL4 },
    { name: 'Yoga', url: googleFormURL5 },
    { name: 'Women\'s Day Celebration', url: googleFormURL6 },
  ];

  return (
    <div className="p-8">
      <h1 className="text-6xl text-center mb-8">Gallery</h1>
      <div className="flex justify-start">
        <ul className="list-disc list-inside"> 
          {links.map((link, index) => (
            <li key={index} className="text-lg my-4 flex items-center">
              <span className="mr-2 text-black font-bold">{index + 1}.</span>
              <a 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-black font-bold hover:text-green-600 transition-colors duration-300 no-underline flex items-center"
              >
                {link.name}
                <MdArrowForward className="ml-2 text-black" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Gallery;




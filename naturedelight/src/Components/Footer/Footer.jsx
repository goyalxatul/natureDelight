import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import logo from '../../assets/logo.jpg'; 
import facebookIcon from '../../assets/nav-icon2.svg'; // Import Facebook icon
import instagramIcon from '../../assets/nav-icon3.svg'; // Import Instagram icon

const sections = [
    {
        title: 'Quick Links',
        items: [
            { name: 'Maps', link: 'https://maps.google.com/?q=your+location' },
            { name: 'Team', link: '/team' }, // Change to use the path for the Team page
            { name: 'Volunteer', link: 'https://docs.google.com/forms/d/e/1FAIpQLSeSA9HbxDfRFnFpg3Jztt1iWlVv4y9MEEKmHGGm8MFdmj_10A/viewform?vc=0&c=0&w=1&flr=0' },
            { name: 'Blogs', link: '#' },
        ]
    },
    {
        title: 'Legal',
        items: [
            { name: '80G certificate', link: '#' },
            { name: 'Contact', link: 'mailto:naturedelightfoundation@gmail.com' }, // Updated Contact link
            { name: 'Privacy Policy', link: '/privacy-policy' }
        ]
    },
];

const items = [
    { name: 'Facebook', link: 'http://facebook.com', icon: facebookIcon },
    { name: 'Instagram', link: 'http://instagram.com', icon: instagramIcon },
];

const Footer = () => {
    return (
        <div className="w-full mt-12 text-gray-300 py-6 px-4" style={{ backgroundColor: '#468237' }}>
            <div className="max-w-[1240px] mx-auto flex flex-col md:flex-row items-start py-4">
                {/* Logo */}
                <div className="flex flex-col items-center md:flex-row md:items-start md:mr-6 md:ml-8">
                    <img src={logo} alt="Logo" className="h-24 md:h-32" />
                </div>

                {/* Centered Sections */}
                <div className="flex-grow flex flex-col md:flex-row justify-center items-center md:items-start space-y-6 md:space-y-0 md:space-x-12">
                    {sections.map((section, index) => (
                        <div key={index} className="text-center md:text-left">
                            <h6 className="font-bold uppercase pt-1">
                                {section.title}
                            </h6>
                            <ul className="flex flex-col space-y-1">
                                {section.items.map((item, i) => (
                                    <li 
                                        key={i} 
                                        className="text-gray-50 hover:text-white cursor-pointer"
                                    >
                                        {item.name === 'Team' ? (
                                            <Link to={item.link}>
                                                {item.name}
                                            </Link>
                                        ) : (
                                            <a href={item.link} target='_blank' rel='noopener noreferrer'>
                                                {item.name}
                                            </a>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* Social icons */}
            <div className="flex flex-col max-w-[1240px] px-4 py-2 mx-auto justify-between sm:flex-row text-center text-white">
                <p className="py-2">
                    &copy; 2024 Nature Delight Foundation 
                </p>
                <div className="flex justify-center sm:w-auto pt-2 text-xl space-x-4">
                    {items.map((x, index) => (
                        <a key={index} href={x.link} className="hover:text-white cursor-pointer">
                            <img src={x.icon} alt={x.name} className="w-6 h-6 inline-block"/> 
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Footer;

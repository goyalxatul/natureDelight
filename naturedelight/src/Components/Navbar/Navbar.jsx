import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.jpg';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Access backend URL from environment variables for Vite
  const backendURL = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleClick = () => setClick(!click);
  const toggleDropdown = () => setDropdown(!dropdown);
  const closeDropdown = () => setDropdown(false);

  const volunteerFormURL = 'https://docs.google.com/forms/d/e/1FAIpQLSeSA9HbxDfRFnFpg3Jztt1iWlVv4y9MEEKmHGGm8MFdmj_10A/viewform?vc=0&c=0&w=1&flr=0';
  const handleVolunteerClick = () => window.open(volunteerFormURL, '_blank', 'noopener,noreferrer');

  const handleDonateClick = async (e) => {
    e.preventDefault();
    const amount = 50000;
    const currency = "INR";
    const receiptId = "qwsaq1";
    try {
      const response = await fetch(`${backendURL}/order`, {
        method: "POST",
        body: JSON.stringify({ amount, currency, receipt: receiptId }),
        headers: { "Content-Type": "application/json" },
      });
      const order = await response.json();
      const options = {
        key: "rzp_test_Y7J8yPZseC3NNh",
        amount,
        currency,
        name: "Nature Delight Foundation",
        description: "Donate for a cause",
        image: logo,
        order_id: order.id,
        handler: async (response) => {
          const paymentDetails = {
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
            amount,
            currency,
            receipt: receiptId,
          };
          const validateRes = await fetch(`${backendURL}/order/validate`, {
            method: "POST",
            body: JSON.stringify(paymentDetails),
            headers: { "Content-Type": "application/json" },
          });
          const jsonRes = await validateRes.json();
          alert("Thank you for your donation!");
        },
        prefill: { name: "John Doe", email: "johndoe@example.com", contact: "9999999999" },
        theme: { color: "#3399cc" },
      };
      const rzp = new window.Razorpay(options);
      rzp.on("payment.failed", (response) => alert("Payment failed. Please try again."));
      rzp.open();
    } catch (error) {
      console.error("Error creating order:", error);
    }
  };

  const sidebarContent = (
    <div className={`fixed top-0 right-0 h-full w-[75%] bg-white shadow-lg rounded-xl transition-transform duration-500 ease-in-out ${click ? "translate-x-0" : "translate-x-full"} z-50`}>
      <ul className="text-center text-xl font-bold p-2">
        <Link to="/" onClick={handleClick}><li className="my-4 py-4 border-b border-gray-300 hover:bg-green-700 hover:rounded">Home</li></Link>
        <div>
          <li className="my-4 py-4 border-b border-gray-300 hover:bg-green-700 hover:rounded cursor-pointer" onClick={toggleDropdown}>About</li>
          {dropdown && (
            <ul className="text-center text-lg p-2 bg-gray-100 rounded-lg shadow-inner z-50">
              <Link to="/about/vision-mission" onClick={closeDropdown}><li className="my-2 hover:bg-green-700 hover:rounded">Vision & Mission</li></Link>
              <Link to="/about/contacts" onClick={closeDropdown}><li className="my-2 hover:bg-green-700 hover:rounded">Contacts</li></Link>
            </ul>
          )}
        </div>
        <Link to="/team" onClick={handleClick}><li className="my-4 py-4 border-b border-gray-300 hover:bg-green-700 hover:rounded">Team</li></Link>
        <Link to="/gallery" onClick={handleClick}><li className="my-4 py-4 border-b border-gray-300 hover:bg-green-700 hover:rounded">Gallery</li></Link>
        <li className="my-4 flex flex-col items-center gap-4">
          <button onClick={handleVolunteerClick} className="w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">Volunteer</button>
          <button onClick={handleDonateClick} className="w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">Donate</button>
        </li>
      </ul>
    </div>
  );

  return (
    <nav className="relative w-full">
      <div className="bg-white shadow-lg rounded-b-lg p-4 flex justify-between items-center z-40 w-full">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-12 w-12 mr-4" />
          <span className="text-3xl font-bold">Nature Delight Foundation</span>
        </div>
        <div className="lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden">
          <ul className="flex gap-8 text-[18px] list-none">
            <NavLink to="/" className="hover:text-green-600 transition"><li>Home</li></NavLink>
            <div className="relative">
              <li className="hover:text-green-600 transition" onClick={toggleDropdown}>About</li>
              {dropdown && (
                <ul className="absolute bg-white shadow-lg mt-2 text-center rounded-lg z-50">
                  <NavLink to="/about/vision-mission" onClick={closeDropdown}><li className="py-2 px-4 hover:bg-green-700 hover:text-white rounded-lg">Vision & Mission</li></NavLink>
                  <NavLink to="/about/contacts" onClick={closeDropdown}><li className="py-2 px-4 hover:bg-green-700 hover:text-white rounded-lg">Contacts</li></NavLink>
                </ul>
              )}
            </div>
            <NavLink to="/team" className="hover:text-green-600 transition"><li>Team</li></NavLink>
            <NavLink to="/gallery" className="hover:text-green-600 transition"><li>Gallery</li></NavLink>
            <li><button onClick={handleVolunteerClick} className="bg-gray-400 text-white px-3 py-1.5 rounded-md hover:bg-green-700 transition">Volunteer</button></li>
            <li><button onClick={handleDonateClick} className="bg-green-600 text-white px-3 py-1.5 rounded-md hover:bg-green-700 transition">Donate</button></li>
          </ul>
        </div>
        <div className="lg:hidden"><button onClick={handleClick} className="text-3xl">&#9776;</button></div>
      </div>
      
      {/* News Ticker */}
      <marquee className="bg-green-600 text-white font-bold py-2" behavior="scroll" direction="left">
        Stay updated with our latest news and events! Check out our upcoming tree plantation drives and volunteer opportunities.
      </marquee>

      {sidebarContent}
    </nav>
  );
};

export default Navbar;

import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.jpg';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  const closeDropdown = () => {
    setDropdown(false);
  };

  // Google Form URLs
  const volunteerFormURL = 'https://docs.google.com/forms/d/e/1FAIpQLSeSA9HbxDfRFnFpg3Jztt1iWlVv4y9MEEKmHGGm8MFdmj_10A/viewform?vc=0&c=0&w=1&flr=0'; // Replace with your actual Volunteer Form URL

  // Button click handlers
  const handleVolunteerClick = () => {
    window.open(volunteerFormURL, '_blank', 'noopener,noreferrer');
  };

  // Razorpay Donate Button Handler
  const handleDonateClick = async (e) => {
    e.preventDefault();
    const amount = 50000; // 500 INR in paise
    const currency = "INR";
    const receiptId = "qwsaq1"; // example receipt ID
  
    try {
      // Create order
      const response = await fetch("http://localhost:5000/order", {
        method: "POST",
        body: JSON.stringify({
          amount,
          currency,
          receipt: receiptId,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const order = await response.json();
  
      // Configure Razorpay options
      const options = {
        key: "rzp_test_Y7J8yPZseC3NNh", // Replace with your test key
        amount, // Razorpay expects the amount in paisa
        currency,
        name: "Nature Delight Foundation",
        description: "Donate for a cause",
        image: logo, // optional
        order_id: order.id, // Razorpay Order ID
        handler: async (response) => {
          const paymentDetails = {
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
            amount,
            currency,
            receipt: receiptId,
          };
  
          // Validate the payment and store it in the database
          const validateRes = await fetch("http://localhost:5000/order/validate", {
            method: "POST",
            body: JSON.stringify(paymentDetails),
            headers: {
              "Content-Type": "application/json",
            },
          });
  
          const jsonRes = await validateRes.json();
          console.log("Payment Success:", jsonRes);
          alert("Thank you for your donation!");
        },
        prefill: {
          name: "John Doe",
          email: "johndoe@example.com",
          contact: "9999999999",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      };
  
      const rzp = new window.Razorpay(options);
      rzp.on("payment.failed", (response) => {
        console.error("Payment Failed:", response.error);
        alert("Payment failed. Please try again.");
      });
      rzp.open();
    } catch (error) {
      console.error("Error creating order:", error);
    }
  };

  const content = (
    <div
      className={`fixed top-0 right-0 h-full w-[45%] bg-white shadow-lg rounded-xl transition-transform duration-300 ease-in-out ${
        click ? "translate-x-0" : "translate-x-full"
      } z-50`}
    >
      <ul className="text-center text-xl font-bold p-2"> {/* Reduced padding */}
        <Link to="/" onClick={handleClick}>
          <li className="my-4 py-4 border-b border-gray-300 hover:bg-green-700 hover:rounded">Home</li>
        </Link>
        <div>
          <li className="my-4 py-4 border-b border-gray-300 hover:bg-green-700 hover:rounded cursor-pointer" onClick={toggleDropdown}>
            About
          </li>
          {dropdown && (
            <ul className="text-center text-lg p-2 bg-gray-100 rounded-lg shadow-inner">
              <Link to="/about/vision-mission" onClick={closeDropdown}>
                <li className="my-2 hover:bg-green-700 hover:rounded">Vision & Mission</li>
              </Link>
              <Link to="/about/contacts" onClick={closeDropdown}>
                <li className="my-2 hover:bg-green-700 hover:rounded">Contacts</li>
              </Link>
            </ul>
          )}
        </div>
        <Link to="/team" onClick={handleClick}>
          <li className="my-4 py-4 border-b border-gray-300 hover:bg-green-700 hover:rounded">Team</li>
        </Link>
        <Link to="/gallery" onClick={handleClick}>
          <li className="my-4 py-4 border-b border-gray-300 hover:bg-green-700 hover:rounded">Gallery</li>
        </Link>
        <li className="my-4 flex justify-center gap-4">
          <button onClick={handleVolunteerClick} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">Volunteer</button>
          <button onClick={handleDonateClick} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">Donate</button>
        </li>
      </ul>
    </div>
  );
  

  return (
    <nav className="relative w-full">
      <div className="bg-white shadow-lg rounded-b-lg p-4 flex justify-between items-center z-50 w-full">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-12 w-12 mr-4" /> {/* Adjust size as needed */}
          <span className="text-3xl font-bold">Nature Delight Foundation</span>
        </div>
        <div className="lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden">
          <ul className="flex gap-8 text-[18px] list-none">
            <NavLink to="/" className="hover:text-green-600 transition hover:border-green-600 cursor-pointer">
              <li>Home</li>
            </NavLink>
            <div className="relative">
              <li className="hover:text-green-600 transition hover:border-green-600 cursor-pointer" onClick={toggleDropdown}>
                About
              </li>
              {dropdown && (
                <ul className="absolute bg-white shadow-lg mt-2 text-center rounded-lg">
                  <NavLink to="/about/vision-mission" onClick={closeDropdown}>
                    <li className="py-2 px-4 hover:bg-green-700 hover:text-white rounded-lg">Vision & Mission</li>
                  </NavLink>
                  <NavLink to="/about/contacts" onClick={closeDropdown}>
                    <li className="py-2 px-4 hover:bg-green-700 hover:text-white rounded-lg">Contacts</li>
                  </NavLink>
                </ul>
              )}
            </div>
            <NavLink to="/team" className="hover:text-green-600 transition hover:border-green-600 cursor-pointer">
              <li>Team</li>
            </NavLink>
            <NavLink to="/gallery" className="hover:text-green-600 transition hover:border-green-600 cursor-pointer">
              <li>Gallery</li>
            </NavLink>
            <li>
              <button onClick={handleVolunteerClick} className="bg-gray-400 text-white px-3 py-1.5 rounded-md hover:bg-green-700 transition">Volunteer</button>
            </li>
            <li>
              <button onClick={handleDonateClick} className="bg-green-600 text-white px-3 py-1.5 rounded-md hover:bg-green-700 transition">Donate</button>
            </li>
          </ul>
        </div>
        <div className="lg:hidden">
          <button onClick={handleClick} className="text-3xl">
            &#9776; {/* Hamburger icon */}
          </button>
        </div>
      </div>
      {content}
    </nav>
  );
};

export default Navbar;




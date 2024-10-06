import React from 'react';

const Contacts = () => {
  return (
    <div className="p-10">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">Contacts</h1>
        <p className="mt-4 text-lg">
          Feel free to reach out to us through any of the methods below!
        </p>
      </div>

      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left side */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Site Address</h2>
            <p className="text-gray-700 mb-6">
              Nature delight Foundation<br />
              S. No:132/2A/2, ShubhashreeVilla <br />
              Near Ishan Nagari, Warje<br />
              Pune-411058<br />
              Maharashtra
            </p>

            <h2 className="text-2xl font-bold mb-4">Phone Number</h2>
            <p className="text-gray-700 mb-6">
            (+91) 8087608729
            </p>

            <h2 className="text-2xl font-bold mb-4">Email Addresses</h2>
            <p className="text-gray-700">
              <strong>General inquiries: naturedelightfoundation@gmail.com</strong> <br />
            </p>
          </div>

          {/* Right side */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Registration Number</h2>
            <p className="text-gray-700 mb-6">
            8906060598594040
            </p>

            <h2 className="text-2xl font-bold mb-4">Pune Office</h2>
            <p className="text-gray-700 mb-6">
            S. No : 132/2A/2, ShubhashreeVilla<br />
            Near Ishan Nagari, Warje, Pune 411058<br />
              Maharashtra
            </p>

            <h2 className="text-2xl font-bold mb-4">Contact for Grievances</h2>
            <p className="text-gray-700">
              <strong>Email:</strong>naturedelightfoundation@gmail.com<br />
              <strong>Phone:</strong> (+91) 921177845
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;

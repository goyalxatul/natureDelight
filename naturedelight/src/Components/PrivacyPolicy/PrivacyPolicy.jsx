import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div className="max-w-4xl mx-auto p-4">
            <h1 className="text-3xl font-bold text-center my-4">Privacy Policy</h1>
            <p className="text-gray-700 mb-4">
                At Nature Delight Foundation, we value your privacy and are committed to protecting your personal information. This privacy policy outlines how we collect, use, and protect your information.
            </p>
            <h2 className="text-2xl font-semibold mt-6 mb-2">Information We Collect</h2>
            <p className="text-gray-700 mb-4">
                We may collect personal information from you when you visit our website, register for an account, or interact with our services. This information may include:
            </p>
            <ul className="list-disc ml-8 mb-4">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Location</li>
            </ul>
            <h2 className="text-2xl font-semibold mt-6 mb-2">How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">
                The information we collect may be used for the following purposes:
            </p>
            <ul className="list-disc ml-8 mb-4">
                <li>To provide and maintain our services</li>
                <li>To communicate with you</li>
                <li>To improve our website and services</li>
                <li>To process donations and volunteer registrations</li>
            </ul>
            <h2 className="text-2xl font-semibold mt-6 mb-2">Data Protection</h2>
            <p className="text-gray-700 mb-4">
                We implement a variety of security measures to maintain the safety of your personal information. However, please be aware that no method of transmission over the Internet or method of electronic storage is 100% secure.
            </p>
            <h2 className="text-2xl font-semibold mt-6 mb-2">Your Rights</h2>
            <p className="text-gray-700 mb-4">
                You have the right to access, correct, or delete your personal information. If you wish to exercise these rights, please contact us using the information below.
            </p>
            <h2 className="text-2xl font-semibold mt-6 mb-2">Contact Us</h2>
            <p className="text-gray-700 mb-4">
                If you have any questions about this privacy policy, please contact us at:
            </p>
            <p className="text-gray-700 mb-4">
                Email: <a href="mailto:naturedelightfoundation@gmail.com" className="text-blue-500">naturedelightfoundation@gmail.com</a>
            </p>
        </div>
    );
};

export default PrivacyPolicy;

import React, { useState } from 'react';
import './DonationForm.css';

const DonationForm = ({ onGenerateCertificate }) => {
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onGenerateCertificate({ name, amount, email });
    };

    return (
        <div className="donation-form">
            <h2>Donate Now</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>


                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="amount">Amount:</label>
                    <input
                        type="number"
                        id="amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        required
                    />
                </div>

                

                <button type="submit">Donate and Generate 80G Certificate</button>
            </form>
        </div>
    );
};

export default DonationForm;

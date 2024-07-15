import React, { useState } from 'react';
import notifiimage from '@/assets/illustration-sign-up-desktop.svg';
import icons from '@/assets/icon-list.svg';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateEmail(email)) {
            setError('Invalid email address');
        } else {
            setError('');
            setSubmitted(true);
            // Handle successful form submission
            console.log('Email submitted:', email);
        }
    };

    const handleDismiss = () => {
        setSubmitted(false);
        setEmail('');
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-500 font-Roboto">
            {!submitted ? (
                <div className="w-[60%] p-8 bg-white shadow-md rounded-lg flex justify-between">
                    <div className="pl-8">
                        <h2 className="font-extrabold text-4xl">Stay Updated!</h2>
                        <p className="text-sm py-2">
                            Join 60,00+ products managers receiving our monthly newsletter updates on
                        </p>
                        <ul className="my-5 text-sm">
                            <li className="flex items-center gap-x-2 my-3">
                                <img src={icons} alt="icons" className="w-[18px]" />
                                <span>Product discovery and building what matters</span>
                            </li>
                            <li className="flex items-center gap-x-2 my-3">
                                <img src={icons} alt="icons" className="w-[18px]" />
                                <span>Product discovery and building what matters</span>
                            </li>
                            <li className="flex items-center gap-x-2 my-3">
                                <img src={icons} alt="icons" className="w-[18px]" />
                                <span>Product discovery and building what matters</span>
                            </li>
                        </ul>
                        <form onSubmit={handleSubmit} className="flex flex-col w-[88%]">
                            <div className="flex justify-between">
                                <label htmlFor="email" className="text-sm">Email</label>
                                {error && <span className="text-red-500 text-sm">{error}</span>}
                            </div>
                            <input
                                type="text"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="email@company.com"
                                className={`w-[100%] p-2 my-2 border-2 ${error ? 'border-red-500' : 'border-black'} rounded-lg`}
                            />
                            <button type="submit" className="bg-[#2A292F] text-white p-2 rounded-lg">Subscribe</button>
                        </form>
                    </div>
                    <img src={notifiimage} alt="Notification" className="w-[300px]" />
                </div>
            ) : (
                <div className="w-[50%] h-auto bg-white p-10 rounded-2xl">
                    <img src={icons} alt="" className="w-20 py-5" />
                    <h1 className="text-5xl text-black w-[60%] font-Roboto font-bold">Thank you for subscribing</h1>
                    <p className="w-[80%] py-5">
                        A confirmation email has been sent to your {email} address. Please click on the confirmation link to confirm your subscription.
                    </p>
                    <button
                        type="button"
                        onClick={handleDismiss}
                        className="bg-[#2A292F] text-white p-2 rounded-lg w-[90%] mx-auto hover:scale-90 transform transition duration-300 ease-in-out"
                    >
                        Dismiss Message
                    </button>
                </div>
            )}
        </div>
    );
};

export default Newsletter;

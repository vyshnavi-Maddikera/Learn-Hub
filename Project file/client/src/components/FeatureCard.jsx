// components/Card.js

import React from 'react';

const FeatureCard = ({ title, description, imageUrl, reverse }) => {
    return (
        <div className={`md:flex ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
            <div className="md:w-1/2">
                <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
                    <h2 className="text-2xl font-semibold mb-4">{title}</h2>
                    <p className="text-gray-600">{description}</p>
                </div>
            </div>
            
        </div>
    );
};

export default FeatureCard;

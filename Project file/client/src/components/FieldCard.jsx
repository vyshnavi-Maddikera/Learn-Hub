import React from 'react';

const FieldCard = ({ icon, title, description }) => {
    return (
        <div className="max-w-xs mx-auto p-4">
            <div className="bg-white rounded-lg shadow-lg">
                <div className="p-6 text-center">
                    <div className="text-4xl text-blue-500">{icon}</div>
                    <h3 className="text-2xl font-semibold text-gray-800 mt-4">{title}</h3>
                    <p className="text-gray-600 mt-2">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default FieldCard;

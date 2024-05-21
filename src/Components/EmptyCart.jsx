import React from 'react';
import { Link } from 'react-router-dom';


const EmptyCart = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6">
            <h1 className="text-4xl font-bold mb-4 text-gray-800">Your Cart is Empty</h1>
            <p className="text-lg text-gray-600 mb-8">
                It looks like you haven't added anything to your cart yet.
            </p>
            <Link to="/">
                <button className="bg-black text-white p-2 rounded-xl" variant="contained" color="primary" size="large">
                    Go to Shop
                </button>
            </Link>
        </div>
    );
}

export default EmptyCart;

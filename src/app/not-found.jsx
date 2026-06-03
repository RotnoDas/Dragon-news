import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center bg-gray-50">
            <h1 className="text-7xl font-bold text-red-600">404</h1>
            <h2 className="mt-4 text-2xl font-semibold text-gray-800">
                News Not Found
            </h2>
            <p className="mt-2 text-gray-600">
                Sorry, the page or article you are looking for does not exist.
            </p>
            <Link
                href="/"
                className="mt-6 bg-red-600 text-white px-5 py-2 rounded-md hover:bg-red-700 transition"
            >
                Back to Home
            </Link>
        </div>
    );
};

export default NotFound;
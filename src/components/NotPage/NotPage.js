import React from 'react';
import { Link } from 'react-router-dom';

const NotPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div>
                <div className="flex items-center">
                    <div>
                        <h1 className="text-6xl md:text-8xl">404</h1>
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold">Oops! 😖 you're lost</h1>
                        <p className="text-lg font-medium">The page you are looking for was not found.</p>
                    </div>
                </div>
                <div className="mt-5 text-center">
                    <Link className="border-2 border-yellow-800 py-2 px-6 text-yellow-800 font-bold hover:text-yellow-100 hover:border-yellow-100 bg-yellow-50 hover:bg-yellow-800 smooth-animation" to="/home">Go Home</Link>
                </div>
            </div>
        </div>
    );
};

export default NotPage;
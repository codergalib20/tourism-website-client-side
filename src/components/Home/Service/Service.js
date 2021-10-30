import React from 'react';
import Zoom from 'react-reveal/Zoom';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    const {_id, name, description, price, url, } = service || {}
    return (
        <Zoom>
            <div className="bg-white shadow-xl smooth-animation border-t-8 flex justify-between flex-col border-yellow-900 rounded-t-3xl hover:shadow-2xl p-4 pb-8">
              <div className="h-64 overflow-hidden rounded-t-2xl">
                <img className="min-h-full max-w-full transform scale-100 hover:scale-110 transition-all duration-500 ease-linear cursor-pointer" src={url} alt={name} />
              </div>
              <h2 className="mt-3 text-2xl font-medium">{name}</h2>
              <div className="text-2xl py-3 text-yellow-900">$
                <span className="font-medium">{price}</span>
                <span className="text-lg font-semibold text-gray-500"> / Per person</span>
              </div>
              <div className="bg-yellow-900 h-1 opacity-40">
                  {/* This is Divider */}
              </div>
              <p className="pt-3 pb-8 text-md text-yellow-700 font-medium">{description.substring(0, 130)}</p>
              <div>
              <Link className="smooth-animation bg-yellow-50 hover:bg-yellow-800 text-yellow-900 hover:text-yellow-50 border-2 border-yellow-900 py-2 px-8" to={`/services/${_id}`}>Book Ticket</Link>
              </div>
            </div>
        </Zoom>
    );
};

export default Service;
import React from 'react';
import './Banner.css';


const Banner = () => {
    const bannerSectionStyle = {
        background : `linear-gradient(rgba(120, 54, 15, 0.645), rgba(120, 54, 15, 0.645)),url(https://i.ibb.co/py7p0Kc/banner-2-bg-2.jpg) no-repeat top center`,
        backgroundSize : 'cover'
    }
    return (
        <div style={bannerSectionStyle} className=" min-h-screen flex items-center justify-center">
             <div className="container mx-auto px-3 py-10 text-center lg:text-left lg:py-0 lg:flex items-center justify-between">
                <div >
                    <h1 style={{fontFamily: `'Festive', cursive`}} className="text-4xl md:text-6xl lg:text-8xl font-bold text-white">Find your <span className="banner-span-text-style relative text-yellow-500"> next tour</span></h1>
                    <p className="text-2xl mt-10 text-white">Where would you like to go?</p>
                </div>
                <div className="mt-10 lg:mt-0">
                    <form className="w-full bg-white max-w-xs mx-auto lg:mx-0 md:max-w-sm p-4">
                        <input className="w-full outline-none mb-3 border py-3 px-3 border-yellow-900" type="text" placeholder="Area Name" />
                        <input className="w-full outline-none mb-3 border py-3 px-3 border-yellow-900" type="email" placeholder="Email"/>
                        <input className="w-full outline-none mb-3 border py-3 px-3 border-yellow-900" type="password" placeholder="Password" />
                        <button className="w-full outline-none smooth-animation border-2 border-yellow-900 text-yellow-900 hover:text-yellow-100 text-lg font-bold cursor-pointer  py-3 px-3 hover:bg-yellow-900">Subscribe</button>
                    </form>
                </div>
             </div>
        </div>
    );
};

export default Banner;
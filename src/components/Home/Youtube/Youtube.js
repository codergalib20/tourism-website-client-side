import React from 'react';

const Youtube = () => {
    return (
        <div className="flex items-center justify-center" style={{background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://i.ibb.co/nzrT70W/banner-1-1-bg.jpg)`, backgroundSize: 'cover', backgroundAttachment: 'fixed', minHeight: '60vh'}}>
            <div>
                <div className="w-16 border-2 border-white p-2 mx-auto h-16 block">
                     <a className="text-xl flex items-center justify-center border-2 border-white w-full h-full text-white" href=""><i class="fab fa-youtube"></i></a>
                 </div>
                 <div className="text-center text-white">
                    <p className="text-xl py-2 italic">Love where you're going</p>
                    <h1 className="text-3xl sm:text-4xl">Tripo is a World Leading Online Tour Booking Platform</h1> 
                 </div>
            </div>
        </div>
    );
};

export default Youtube;
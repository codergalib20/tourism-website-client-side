import React from 'react';

const Contact = () => {
    return (
        <div>
            <div>
                <div className="py-4 container mx-auto text-center">
                    <span className="text-yellow-500 text-lg"> Contact with us</span>
                    <h1 className="text-3xl font-bold">Have any Question? feel free to contact with us.</h1>
                </div>
                <div className="container mx-auto grid md:grid-cols-2 gap-3 py-5">
                     <div>
                       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3585.918558571811!2d88.75315370094998!3d26.0034851048153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e4a04e603d7d29%3A0x10d0634fce7cd3bb!2z4Kao4KeA4Kay4Ka44Ka-4KaX4Kaw!5e0!3m2!1sbn!2sbd!4v1635612094997!5m2!1sbn!2sbd" style={{border : 'none', width: '100%', height: '100%'}} allowfullscreen="" loading="lazy"></iframe>
                     </div>
                     <div>
                         <input className="py-1 px-2 block w-full border border-yellow-900 mb-3" type="text" placeholder="First Name"/>
                         <input className="py-1 px-2 block w-full border border-yellow-900 mb-3" type="text" placeholder="Second Name"/>
                         <input className="py-1 px-2 block w-full border border-yellow-900 mb-3" type="email" placeholder="E-mail"/>
                         <input className="py-1 px-2 block w-full border border-yellow-900 mb-3" type="password" placeholder="Password"/>
                         <button className="text-md border-2 border-yellow-900 bg-yellow-900 text-yellow-50 hover:text-yellow-900 hover:bg-yellow-50 py-2 px-10 smooth-animation">Submit</button>
                     </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
import React from 'react';

const Footer = () => {
    return (
        <div className="bg-yellow-900">
            <div className="container mx-auto grid sm:grid-cols-2 py-10 gap-6">
                <ul className="grid grid-cols-4 max-w-xs">
                    <li><a className="text-yellow-900 flex items-center justify-center w-9 bg-yellow-50 border-2 border-white hover:bg-yellow-900  hover:text-yellow-50 smooth-animation h-9" href=""><i class="fab fa-instagram"></i></a></li>
                    <li><a className="text-yellow-900 flex items-center justify-center w-9 bg-yellow-50 border-2 border-white hover:bg-yellow-900  hover:text-yellow-50 smooth-animation h-9" href=""><i class="fab fa-facebook-square"></i></a></li>
                    <li><a className="text-yellow-900 flex items-center justify-center w-9 bg-yellow-50 border-2 border-white hover:bg-yellow-900  hover:text-yellow-50 smooth-animation h-9" href=""><i class="fab fa-github-alt"></i></a></li>
                    <li><a className="text-yellow-900 flex items-center justify-center w-9 bg-yellow-50 border-2 border-white hover:bg-yellow-900  hover:text-yellow-50 smooth-animation h-9" href=""><i class="fab fa-linkedin-in"></i></a></li>
                </ul>
                <div>
                    <ul>
                        <li className="text-lg cursor-pointer text-white">-Asadullah Hil Glaib</li>
                        <li className="text-lg cursor-pointer text-white">-Sheybul Alif Sakib</li>
                        <li className="text-lg cursor-pointer text-white">-Arif Hasan</li>
                        <li className="text-lg cursor-pointer text-white">-Saifur Rahman</li>
                    </ul>
                </div>
            </div>
            <div className="text-gray-400 bg-black py-2 text-center">
                <span>Copyright &copy; 2021 Asadullah Hil Galib || All rights reserved codergalib20 </span>
            </div>
        </div>
    );
};

export default Footer;
import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Services from '../Services/Services';
import Youtube from '../Youtube/Youtube';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Services/>
            <Youtube/>
            <Contact/>
        </div>
    );
};

export default Home;
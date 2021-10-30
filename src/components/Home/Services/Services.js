import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';


const Services = () => {
    const [services, setServices] = useState([])
    useEffect(()=>{
          fetch('https://evening-ridge-39840.herokuapp.com/services')
          .then(res => res.json())
          .then(data => setServices(data))
          .catch(error => console.log(error));
    },[services])
    return (
        <div className="bg-white">
            {
                services.length === 0 ? 
                <div style={{height: '100vh', width:'100%'}} className="flex items-center justify-center">
                    <div className="spinner-border" style={{width: '100px', height: '100px'}} role="status">
                     <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
                  :
               <div className="container mx-auto px-2 grid lg:grid-cols-3 sm:grid-cols-2 gap-3 py-10">
                    {
                        services.map(service => <Service key={service._id} service={service}></Service>)
                    }
               </div>
            }
            
        </div>
    );
};

export default Services;
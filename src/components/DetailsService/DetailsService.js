import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';
import swal from 'sweetalert';
import useAuth from '../../hooks/useAuth';


const DetailsService = () => {
    const {serviceId} = useParams()
    const [service, setService] = useState({})
    const [email, setEmail] = useState('')
    const [userName, setUserName] = useState('');
    const [imgUrl, setImgUrl] = useState('')
    const {user} = useAuth()
    useEffect(()=>{
        fetch(`https://evening-ridge-39840.herokuapp.com/services/${serviceId}`)
        .then(res => res.json())
        .then(data => setService(data))
        .catch(error => console.log(error))
    },[])

    const { register, handleSubmit } = useForm();
    const {url, description, name, price} = service
    const onSubmit = data => {
        console.log(data)
        data.status = 'Pending'
        data.serviceName = name
        data.price = price;
        data.description = description;
        data.url = url;
        data.imgUrl = user.photoUrl
        axios.post('https://evening-ridge-39840.herokuapp.com/addOrders', data)
        .then(res => {
            if(res.data.insertedId){
                swal('Wow!', 'You\'r Order added.', 'success')
            }
          })
        };
    
    return (
        <div className="py-10 min-h-screen">
            <div className="container mx-auto px-3 grid grid-cols-1 lg:grid-cols-3">
           <div>
               <img src={url} alt="" />
           </div>
           <div className="lg:col-span-2 px-3 lg:py-0">
               <h1 className="text-2xl text-yellow-900 font-bold">{name}</h1>
               <p className="text-md text-yellow-700 py-3">{description}</p>
               <h1 className="text-yellow-900 text-xl font-bold capitalize py-2">Order information</h1>
               <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <input className="border-2 border-red-500 py-1 px-3"  value={user.displayName} placeholder="Name" {...register("name", { required: true})} />
                    <input className="border-2 border-red-500 py-1 px-3"  value={user.email} placeholder="Email" {...register("email", { required: true })} />
                    <input className="border-2 border-red-500 py-1 px-3" placeholder="home towns" {...register("towns", { required: true })} />
                    <input className="border-2 border-red-500 py-1 px-3" placeholder="Country" {...register("country", { required: true })} />
                    <input className="border-2 border-red-500 py-1 px-3" placeholder="Post office Serial" {...register("post_office", { required: true })} />
                    <input className="border-2 border-red-500 py-1 px-3" type="number" {...register("age", {required: true, min: 18, max: 75 })} placeholder="Age 18 to 75"/>
                    <input className="border-2 py-2 px-3 cursor-pointer bg-yellow-900 hover:bg-yellow-50 text-yellow-50 hover:text-yellow-900 border-yellow-900 smooth-animation" type="submit" value="Confirm Book Ticket"/>
                </form>
           </div>
        </div>
        </div>
    );
};

export default DetailsService;
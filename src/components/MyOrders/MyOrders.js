import React, { useEffect, useState } from 'react';
import Zoom from 'react-reveal/Zoom';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import useAuth from '../../hooks/useAuth';



const MyOrders = () => {
    const [myOrders, setMyOrders] = useState([]);
    const {user} = useAuth()
    useEffect(()=>{
        fetch('https://evening-ridge-39840.herokuapp.com/addOrders')
        .then(res => res.json())
        .then(data => setMyOrders(data));
    }, [myOrders])
    // ----------------Handle My Orders------------------
    const handleDelete = id => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this Order'd Service!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                const url =  `https://evening-ridge-39840.herokuapp.com/addOrders/${id}`;
                fetch(url, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    
                    const remaining = myOrders.filter(service => service._id !== id);
                    setMyOrders(remaining)
                })
            } else {
              swal("Your Customer's order Service is safe!");
            }
          });
     }
    const checkMyOrder = myOrders.filter(order => order.email === user.email)
    return (
        <div className="container mx-auto py-10  min-h-screen">
            <div className="bg-yellow-900 py-3">
                <h1 className="text-center text-3xl text-white md:text-6xl font-bold">My Orders <span ><Link to="/home" className="text-yellow-300 text-lg hover:text-red-50 smooth-animation" > / Home</Link></span></h1>
            </div>
           {
               checkMyOrder.map(order => <Zoom>
               
               <div key={order._id} className="grid border border-yellow-800 p-2 md:grid-cols-3 gap-4 mb-3">
                    {/* Product */}
                    <div className="sm:col-span-2 md:grid grid-cols-2 gap-4">
                    <div>
                        <img className="w-full" src={order.url} alt="" />
                    </div>
                    <div className="py-3 md:py-0">
                        <h2 className="text-xl md:text-2xl text-justify font-medium">{order.serviceName}</h2>
                        <h1 className="text-2xl text-justify">Price : {order.price}</h1>
                        <p className="text-md text-justify">{order.description.substring(1, 150)}</p>
                    </div>
                    </div>
                    {/* User */}
                    <div className="grid lg:grid-cols-4 gap-2">
                        <div className=" flex md:block items-center">
                            <img className="md:w-16 lg:w-full" src={order.userImg} alt="" />
                        </div>
                        <div className="lg:col-span-3 text-left">
                            <h2 className="text-md font-bold text-yellow-900">{order.name}</h2>
                            <h2 className="text-md font-bold text-yellow-900">{order.email}</h2>
                            <h2 className="text-md font-bold text-yellow-900">Age : {order.age}</h2>
                            <button onClick={()=> handleDelete(order._id)} className="bg-yellow-900 mt-3 hover:bg-yellow-50 text-yellow-50 hover:text-yellow-900 py-2 px-8 border-yellow-900 border-2 smooth-animation cursor-pointer mr-2">Delete</button>
                        </div>
                    </div>
                </div>
                 
               </Zoom>)
           }
        </div>
    );
};

export default MyOrders;
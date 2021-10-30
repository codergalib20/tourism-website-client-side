import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import swal from 'sweetalert';


const AddNewService = () => {
      const { register, handleSubmit, reset } = useForm();
      const onSubmit = data => {
          console.log(data);
          axios.post('https://evening-ridge-39840.herokuapp.com/services', data)
          .then(res=>{
              if(res.data.insertedId){
                swal("Wow!", "You're Service has been added!", "success");
                reset()
              }
          })
    };
    return (
        <div className="flex items-center justify-center bg-yellow-900 min-h-screen">
            <div className="bg-yellow-900 w-full max-w-xl p-8">
                <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
                    <input className="border w-full border-none outline-none px-4 py-1 border-black mt-4 text-base placeholder-yellow-500" {...register("name", { required: true})} placeholder="Tour area name"/>
                    <input className="border w-full border-none outline-none px-4 py-1 border-black mt-4 text-base placeholder-yellow-500" {...register("description", { required: true, minLength: 150})} placeholder="Description min 100 letter"/>
                    <input className="border w-full border-none outline-none px-4 py-1 border-black mt-4 text-base placeholder-yellow-500" {...register("url")} placeholder="Image Url"/>
                    <input className="border w-full border-none outline-none px-4 py-1 border-black mt-4 text-base placeholder-yellow-500" type="number" {...register("price",{ required: true})} placeholder="Price"/>
                    <input className="border w-full border-none outline-none px-4 py-1 border-black mt-4 text-base placeholder-yellow-500" type="number" {...register("age")} placeholder="Age"/>
                    <select className="border border-none outline-none py-1 px-3 mb-4 border-black block w-6/12 mt-4 text-base" {...register("time")}>
                        <option className="bg-white" value="five">five</option>
                        <option className="bg-red-500 text-white" value="three">ten</option>
                        <option className="bg-green-800 text-green-100" value="three">three</option>
                    </select>
                    <input className="smooth-animation py-2 px-10 bg-yellow-100 border-2 border-white hover:bg-yellow-900 text-lg font-medium cursor-pointer hover:text-white" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddNewService;
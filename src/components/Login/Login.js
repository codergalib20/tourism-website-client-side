import React from 'react';
import Zoom from 'react-reveal/Zoom';
import { useHistory, useLocation } from 'react-router-dom';
import swal from 'sweetalert';
import useAuth from '../../hooks/useAuth';


const Login = () => {
    const { signInUsingGoogle, user,error,
        getPassword,userLoginEmailPassword,setUser } = useAuth();
    const location = useLocation()

    
    const redirect_url = location.state?.from || '/home'
    const history = useHistory()


    // Handle Google Sign In_________________
    const HandleGoogleSignIn = () => {
        signInUsingGoogle()
            .then(result => {
                swal("Good job!", "Account has been created!", "success");
                history.push(redirect_url);
            })
            .catch(error => swal("Warning", `${error.message}`, "error"));
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-black">
            <div>
                   <Zoom>
                   <button onClick={HandleGoogleSignIn} className="bg-yellow-600 text-red-100 px-8 h-12 mt-4 mx-auto flex items-center justify-between rounded-full text-2xl capitalize"><span className="mr-4"><i className="fab fa-google"></i></span> by google</button>
                   </Zoom>
            </div>
        </div>
    );
};

export default Login;
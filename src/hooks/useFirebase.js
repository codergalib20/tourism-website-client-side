import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../components/Login/firebase/firebase.init";
initializeAuthentication()
const useFirebase = () => {
    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false);


    const signInUsingGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider)
            .finally(() => setIsLoading(false))
    }

    // Logout 
    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .finally(() => setIsLoading(false))
    }
    const toggolLogin = e => {
        setIsLogin(e.target.checked);
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            setIsLoading(false)
        });
        return ()=> unsubscribed;
    }, []);


    return {
        user,
        signInUsingGoogle,
        logOut,
        error,
        isLogin,
        setIsLoading,
        isLoading
    }

}


export default useFirebase;
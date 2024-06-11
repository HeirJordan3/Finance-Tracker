import { useState } from 'react';
import { projectAuth } from '../firebase/config';
import { useAuthContext } from './useAuthContext';

export const useSignup = () => {

    // 1. Create a new state variable called error.
    // 2. Create a new state variable called isPending.

    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const { dispatch } = useAuthContext();
   
    // 3. Create a new async function called signup that takes in email, password and displayName as arguments.
    const signup = async (email, password, displayName) => {   
        
        setIsPending(true);
        setError(null);


        try {
            // 1. Create a new user account with the email, password and displayName provided by the user. 
            const res = await projectAuth.createUserWithEmailAndPassword(email, password);
            
            
            if (!res) {
                throw new Error('Could not complete the signup');
            }

            // 2. Update the user's displayName to the displayName provided by the user.

            await res.user.updateProfile({ displayName });

            // dispatch login action

            dispatch({ type: 'LOGIN', payload: { email: res.user.email, uid: res.user.uid, displayName: res.user.displayName } });



            setIsPending(false);
            setError(null);

            
        } 
        catch (err) {
            console.log(err.message);
            setError(err.message);
            setIsPending(false);
        }
       
    };

    
return { error, isPending, signup };

}

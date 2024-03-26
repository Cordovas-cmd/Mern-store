import {useState, useEffect, createContext  } from "react";
import { useToken } from "./useToken";
import { jwtDecode } from "jwt-decode";


export const CurrentUserContext = createContext();

// grab token from useToken hook
export const CurrentUserProvider = ({children}) => {
    const [token, setToken] = useToken();

    
    // create function to decode token
    const getCurrentUser = () => {
        if(!token) return null;
      
        // install jwt-decode to decode the json web token
        try {
            // try to decode token and send it back
            const verifyToken= jwtDecode(token);
            return verifyToken

        } catch(e) {

            console.log("Error decoding token:", token, e);
            // after error set token to null almost as if signed out if there is an error.
            setToken(null);
        }
    };
    // set state for current user
    const [currentUser, setCurrentUser] = useState(() => getCurrentUser());


    // everytime token changes
    useEffect(() => setCurrentUser(()=> getCurrentUser()), [token])
    console.log("Current User:", currentUser);
    return (
        <CurrentUserContext.Provider value={[currentUser, token, setToken]}>
            {children}
        </CurrentUserContext.Provider>
    )
}
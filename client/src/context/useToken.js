import { useState } from "react";

// creating a custom hook. whenever making a custom hook use the word "use" so react can tell it's a custom hook
export const useToken = () => {

    // go to local storage and get the token;
    const [token, setInternalToken] = useState(() => localStorage.getItem("token"))

    // be careful, if user provides new token we set it internally, otherwise remove it from storage and turn it to null
    // two places to get token, one in memory and one in local storage, this function will make sure they have the same value
    const setToken = (newToken) => {
        if(!newToken) {
            localStorage.removeItem("token");
            setInternalToken(null)
        } else {
            localStorage.setItem("token", newToken)
            setInternalToken(newToken)
        }
    }

    return [token, setToken];
};
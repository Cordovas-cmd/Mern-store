import { useContext, useState } from "react"
import { Modal } from "./Modal"
import { InputField } from "./InputField";
import axios from "axios"
import { CurrentUserContext } from "../context/CurrentUserProvider";

/*
validation:
1.maybe set a minimum amount of characters for first and last name
2.possibly include a list of countries and or states to allow and or choose from
3. Use regex to verify email and make sure there's no room for cross site scripting or malicious code injections in any of the form fields.
4 Include rules for password, make sure it includes combination of upper, lower, symbols etc..
*/ 

export const SignUp = ()=> {

// make sure to import context in main.jsx
    const [user, token, setToken] = useContext(CurrentUserContext);
    const [isVisible, setVisibility]  = useState(false);
    const [firstName, setFirstName] = useState("soso");
    const [lastName, setLastName] = useState("soso");
    const [location, setLocation] = useState("soso");
    const [email, setEmail] = useState("test@test.com");
    const [password, setPassword] = useState("soso");
    const [confirmPassword, setConfirmPassword] = useState("soso");

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    // if any of the form fields are empty, don't continue.
    const emptyFormFields = !firstName || !lastName || !location || !email || !password || !confirmPassword;

    // check if passwords match
    const passwordMismatch = password !== confirmPassword;

    if(!isVisible) return <button  onClick={() => setVisibility(true)}>Sign Up</button>

    return (
        <Modal setVisibility={setVisibility}>
            <InputField label="First Name:" value={firstName} setValue={setFirstName} />
            <InputField label="Last Name:" value={lastName} setValue={setLastName} />
            <InputField label="Email:" value={email} setValue={setEmail} />
            <InputField label="Password:" value={password} setValue={setPassword}  type="password" />
            <InputField label="Confirm Password:" value={confirmPassword} setValue={setConfirmPassword}  type="password" />
            <InputField label="Location:" value={location} setValue={setLocation} />

            {errorMessage && <div 
            style={{border:"2px solid red"}}>
                <p style={{color:"red"}}>{errorMessage}</p>
                </div>}
                {/* use async function because it takes info and sends it to the back end */}
            <button onClick={ async() => {

                setIsSubmitted(true)
                if(emptyFormFields) return setErrorMessage("All Fields are required");

                if(passwordMismatch) return setErrorMessage("Passwords do not match");

                setErrorMessage("")

                // send backend request, always have try catch lock
                try {
                    // when using axios the specify the method and the url/ object/data we want to send
                    const response = await axios.post("http://localhost:3001/api/signup", {firstName,lastName,email,password,location} )

                    const {data:{token}} = response
                    // console.log(token);               
                    setToken(token)
                    setVisibility(false)
                } catch(e){
                    if(e.response.status === 409) {
                        setErrorMessage("Email already in use.")
                    } else {
                        setErrorMessage("Error Creating User");
                        console.log(e);
                    }
                }
            }}>Sign Up</button>
        </Modal>
    )
}
import { useContext, useState } from "react"
import {Modal} from "./Modal"
import { InputField } from "./InputField";
import axios from "axios";
import { CurrentUserContext } from "../context/CurrentUserProvider";
export const LogIn= ()=> {
    const [  , , setToken] = useContext(CurrentUserContext);
    // set state so the browser will re render the UI when variable changes. (set to false so it's not visible)
    const [isVisible, setVisibility] = useState(false);
    // set email to empty string at beginning
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    if(!isVisible) return <button onClick={() => setVisibility(true)}>Login</button>;
    return (
        <Modal setVisibility={setVisibility}>
            <InputField label="Email:" setValue={setEmail} value={email}/>
            <InputField label="Password:" setValue={setPassword} value={password} type="password"/>
            <button onClick={ async ()=>{
              try {
                // when using axios the specify the method and the url/ object/data we want to send
                const response = await axios.post("http://localhost:3001/api/sign-in", { email, password } )

                const {data:{token}} = response;
                // console.log(token);               
                setToken(token);
                setVisibility(false);
            } catch(e) {
                    console.log(e);
            }   
            }}>Log In</button>
        </Modal>
    )
}
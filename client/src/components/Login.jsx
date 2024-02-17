import { useState } from "react"
import {Modal} from "./Modal"
import { InputField } from "./InputField";

export const LogIn= ()=> {
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
            <button>Log In</button>
        </Modal>
    )
}
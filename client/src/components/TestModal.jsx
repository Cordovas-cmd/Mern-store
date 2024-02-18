import { useState } from "react"
import {Modal} from "./Modal"

export const TestModal= ()=> {
    // set state so the browser will re render the UI when variable changes. (set to false so it's not visible)
    const [isVisible, setVisibility] = useState(false);

    if(!isVisible) return <button onClick={() => setVisibility(true)}>Show Modal</button>;
    return (
        <Modal setVisibility={setVisibility}>
            <p>Test Modal</p>
        </Modal>
    )
}
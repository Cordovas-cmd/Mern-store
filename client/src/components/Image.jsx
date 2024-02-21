// import Placeholder from "../assets/industrialninja.gif";
import {useState} from "react";
import { ImageZoom } from "./ImageZoom"
export const Image = ({src=Placeholder, title, alt, style})  => {
    
    // zoom version starts off as not visible
    const [isVisible, setVisibility] = useState(false);
   
    return (
        <>
        <div
        style={{
            display: "flex",
            placeItems: "center",
            border: "1px solid lightgray",
            minHeight:"200px",
            backgroundColor: "white",
            cursor: "pointer"
        }}
        // when image is clicked set modal visibility to true
        onClick={() => setVisibility(true)}
        >
            {/* accept from props and import styles with spread */}
            <img  src={src} title={title} alt={alt} style={{width:"100%", ...style}} />
    </div>
    {/* hit ctrl space to see props */}
    <ImageZoom isVisible={isVisible} setVisibility={setVisibility} src={src} alt={alt} title={title} />
            </>
    )
}
import { useState, useContext } from "react";
import {Column} from "../components/Column";
import {InputField} from "../components/InputField" ;
import { CurrentUserContext } from "../context/CurrentUserProvider";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export const AddProduct = () => {

    const [, token] = useContext(CurrentUserContext);
    const navigate = useNavigate();

    if (!token) return navigate("/");

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [img,setImg] =useState(null);

    const [message, setMessage] = useState("")
    return (
        <Column>

        <InputField 
        label="Product title:" 
        value={title} 
        setValue={setTitle} 
        />

        <InputField 
        label="Product price:" 
        value={price} 
        setValue={setPrice} 
        type="number"  
        />

        <input 
        label="Product Image:" 
        name="productImage" 
        type="file" 
        accept=".png, .jpg, .jpeg" 
        onChange={(e) => setImg(e.target.files[0])} 
        />

        {message && <p>{message}</p>}

        <button onClick={async () => {
            const formData = new FormData();
            formData.append("title", title)
            formData.append("price", price)
            formData.append("productImage", img);

            try {
                await axios.post("http://localhost:8080/api/product", formData, {
                    headers: {
                        authorization: `Bearer ${token}`,
                        "Content-Type": "multipart/form-data",
                    },
                });
                setMessage("Successfully uploaded file.");
            } catch (e) {
                setMessage("Error uploading file.");
                console.log(e);
            }
        }}>Upload Product</button>
        
        </Column>
    )

} 
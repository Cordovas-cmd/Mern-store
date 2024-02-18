// import Placeholder from "../assets/industrialninja.gif";

export const Image = ({src=Placeholder, title, alt, style})  => {
    
   
    return (
        <div
        style={{
            display: "flex",
            placeItems: "center",
            border: "1px solid lightgray",
            minHeight:"200px",
            backgroundColor: "white"
        }}
        >
            {/* accept from props and import styles with spread */}
            <img  src={src} title={title} alt={alt} style={{width:"100%", ...style}} />
    </div>
    )
}
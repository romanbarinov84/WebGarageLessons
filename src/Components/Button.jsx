
export default function Button({label,onClick,btnStyles}){
 
    return(
        <button className="Btn" onClick={onClick} style={btnStyles}>{label || "Just button"}</button>
    )
}
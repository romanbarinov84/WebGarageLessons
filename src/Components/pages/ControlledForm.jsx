import { useState } from "react"



export function ControlledForm() {
const [value, setValue] = useState("");

const handleChange = (event) => {
 setValue(event.target.value);
}

const handleSubmit = (event) => {
    event.preventDefault();
    alert("Message to be a send " + value);
}

    return(
        <form  onSubmit={handleSubmit}>
            <label><input type="text" value={value} onChange={handleChange}/></label>
            <button className="Btn">Submit</button>    
          
        </form>
    )
}
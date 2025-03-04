
export function UnControlledForm(){

    const handleSubmit = (event) => {
        event.preventDefault();
        const inputValue = event.target.elements.name.value;
        alert("Message to be a send :" + inputValue)
       
    }
    return(
        <form onSubmit={handleSubmit}>
            <label >
                <input type="text" name="name" />
            </label>
            <button type="submit" >Sabmit</button>
        </form>
    )
}

export default function Button(){
    const handleClick = () => {
        alert("push me");
    }
    return(
        <button className="Btn" onClick={handleClick}>Push the button</button>
    )
}
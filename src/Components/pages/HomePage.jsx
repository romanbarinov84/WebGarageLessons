import "./HomePage.css"
import Button from "../Button";



export default function HomePage(){
    const handleClick = () => {
        alert("push me");
    }
    const showMassage = () =>{
        alert("This another massage")
    }
    return(
        <div className="page-div">
            <h2 className="page-title">Home Page</h2>
            <p className="page-text">Welcome to my site</p>
       
          
            <Button label="Push me" 
            onClick={() =>{
                handleClick();
            }}
            />
              <Button label="Some massage" 
            onClick={() =>{
                showMassage();
            }}
            />
        
            
        </div>
    )
}
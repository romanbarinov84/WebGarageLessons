import "../Header/Header.css"
import Button from "../Button"

export default function Header(){
    return(
        <header className="container">
            <h1>Text Ahead</h1>
            <Button label={"registration"} btnStyles={{background:"red"}}/>
            <Button label={"Autorization"}/>
        </header>
    )
}
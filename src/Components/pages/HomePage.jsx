import "./HomePage.css"
import Button from "../Button";
import UserList from "../UserList";
import Images from "/178045-meshok-bagazh_i_sumki-gadzhet-elektrik-pryamougolnik-x750.jpg"

export default function HomePage(){
    return(
        <div className="page-div">
            <h2 className="page-title">Home Page</h2>
            <p className="page-text">Welcome to my site</p>
            <UserList/>
            <Button />
            <img className="imgHead" src={Images} alt="" />
        </div>
    )
}
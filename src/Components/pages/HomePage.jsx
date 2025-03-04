import "./HomePage.css";
//import { Greeting } from "./Greeting";
//import { Notification } from "./Notification";
//import { UserProFile } from "./UserProFile";
import { ToDoList } from "./ToDoList";


export default function HomePage() {
 //const messages = ["message 1","message 2","message 3","message 4"]
 //const user = {
 // name:"Ivan",
  //age: 45,
 //};

const todos = [
  {id:1,text:"Advanced react and redux", completed:true},
  {id:2,text:"Created project", completed:false},
  {id:3,text:"Created git repo", completed:true},
  {id:4,text:"Find new work", completed:false},
]

  return(
   <>
    <div className="content">
      {/* <Greeting isLoggedIn={true}/>
       <Greeting isLoggedIn={false}/>*/}
       {/*<Notification messages={messages}/>
       <Notification messages={["message1",]}/>*/}

       {/*<UserProFile user={user}/>
       <UserProFile user={null}/>*/}
       <ToDoList todos={todos}/>
      </div>;
   
   
   </>
   
  ) 
}

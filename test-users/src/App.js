import { useState } from "react";
import UserForm from "./UserForm";
import UserList from "./UserList";


function App() {
  const [users,setUsers]=useState([]);

  const onUserAdded = (user) =>{
    setUsers([...users,user]);
  }
  console.log(users);

  return (
   <div>
      <UserForm onUserAdd={onUserAdded}/>
      <hr/>
      <UserList users={users}/>
   </div>
  );
}

export default App;

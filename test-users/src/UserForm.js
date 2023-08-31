
import React, { useState } from 'react'

const UserForm = ({ onUserAdd }) => {
    const [email,setEmail] = useState('');
    const [name,setName] =useState('');

    const handleSubmit=(event)=>{
        event.preventDefault();
        // console.log(name+ ' '+ email);
        onUserAdd({name:name,email:email})
        setEmail('');
        setName('');
    }
  return (
      <form onSubmit={handleSubmit}>
          <div>
              <label htmlFor='name'>Name</label>
              <input label='name' id='name' value={name} onChange={(e)=>setName(e.target.value)} />
          </div>
          <div>
              <label htmlFor='email'>Email</label>
              <input label='name' id='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
          </div>
          <button>Add User</button>
      </form>
  )
}

export default UserForm
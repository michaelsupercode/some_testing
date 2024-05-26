import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';

function App() {
  const [email,setEmail] = useState('')
  const [pass,setPass] = useState('')
  const [firstName,setFirstName] = useState('')
  const [lastName,setLastName] = useState('')
  const [newEmail,setNewEmail] = useState('')
  const [newPass,setNewPass] = useState('')

  const urlLogin = 'http://localhost:8080/login'
  const urlRegister = 'http://localhost:8080/register'

  const login = (e)=> {
    e.preventDefault()
    const userInfo = {email,pass}
    axios.post(urlLogin,userInfo).then((respond)=>{console.log(respond.data)})
  }
  const signUp = (e ) => {
    e.preventDefault()
    const newUser = {firstName,lastName,newEmail,newPass}
    axios.post(urlRegister,newUser).then((respond)=>{console.log(respond.data)})
  }
  return (
    <div className="App">
      <h1>Login</h1>
      <form action="">
        <input type="email" onClick={e => {setEmail(e.target.value)}} />
        <input type="password" onClick={e => {setPass(e.target.value)}}/>
        <input type="submit" onClick={login} value='login' />
      </form>
      <h1>Sign up</h1>
      <form action="">
        <input type="text" placeholder='firstName' defaultValue={firstName}  onChange={e => setFirstName(e.target.value)} />
        <input type="text" placeholder='lastName' defaultValue={lastName}  onChange={e => setLastName(e.target.value)} />
        <input type="email" placeholder='Email' defaultValue={newEmail} onChange={e => setNewEmail(e.target.value)} />
        <input type="password" placeholder='Password' defaultValue={newPass}  onChange={e => setNewPass(e.target.value)}/>
        <input type="submit" onClick={signUp} value='Sign up' />
      </form>
    </div>
  );
}

export default App;

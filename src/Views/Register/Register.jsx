import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../../firebaseContext/AuthContext'

function Register() {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [error,setError] = useState('')
  const navigate = useNavigate()
  const {createUser} = UserAuth()
  const handleSubmit = async e => {
    e.preventDefault()
    setError('')
    try {
      await createUser(email, password)
      navigate('/')
    }catch (e) {
      setError(e.message)
      console.log(e.message)
    }
  }
  return (
    <main
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        
      }}
    >
      <section>
        <h1>REGISTER</h1>
        <form
          className="nes-container with-title is-centered"
          style={{ display: "flex", flexDirection: "column", gap: "24px", backgroundColor: 'white ' }}
          onSubmit={handleSubmit}
        >
          <div>
          
          </div>
          <div className="nes-field">
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              className="nes-input"
              style={{ outline: "none" }}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="nes-field">
            <label htmlFor="password">Your Password</label>
            <input
              type="password"
              id="password"
              className="nes-input"
              style={{ outline: "none" }}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <button className="nes-btn is-success">REGISTER ME</button>
          <p className="nes-container">Have an account? <Link to='/login' style={{color: 'black'}}>Log in</Link></p>
        </form>
        
      </section>
    </main>
  );
}

export default Register;

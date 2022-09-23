import React from "react";
import { Link } from 'react-router-dom'
function Register() {
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
        >
          <div>
            <div className="nes-field">
              <label for="name">Your name</label>
              <input
                type="text"
                id="name"
                className="nes-input "
                style={{ outline: "none" }}
              />
            </div>
          </div>
          <div className="nes-field">
            <label for="email">Your Email</label>
            <input
              type="email"
              id="email"
              className="nes-input"
              style={{ outline: "none" }}
            />
          </div>
          <div className="nes-field">
            <label for="password">Your Password</label>
            <input
              type="password"
              id="password"
              className="nes-input"
              style={{ outline: "none" }}
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

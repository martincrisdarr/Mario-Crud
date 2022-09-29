import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { GoogleButton } from "react-google-button";
import { UserAuth } from "../../firebaseContext/AuthContext";
function Login() {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [error,setError] = useState('')
  const navigate = useNavigate()
  const SignIn = () => {
    const { signIn } = UserAuth();
  };
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
        <h1>LOGIN</h1>
        <form
        onSubmit={handleSubmit}
          className="nes-container with-title is-centered"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            backgroundColor: "white ",
          }}
        >
          <div className="nes-field">
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              className="nes-input"
              style={{ outline: "none" }}
            />
          </div>
          <div className="nes-field">
            <label htmlFor="password">Your Password</label>
            <input
              type="password"
              id="password"
              className="nes-input"
              style={{ outline: "none" }}
            />
          </div>
          <button className="nes-btn is-success">LOGIN</button>
          <GoogleButton style={{ width: "100%" }} />
          <p className="nes-container">
            Dont have account?{" "}
            <Link to="/register" style={{ color: "black" }}>
              Register
            </Link>
          </p>
        </form>
      </section>
    </main>
  );
}

export default Login;

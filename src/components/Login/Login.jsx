import React, { useContext } from "react";
import "./Login.css";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {

  const {signIn} = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation();
  console.log(location);
  const from = location.state?.from?.pathname || '/';

  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email,password);
  
    signIn(email,password)
    .then(result => {
      const loggedUser = result.user;
      console.log(loggedUser);
      form.reset();
      navigate(from, {replace: true})
    })
    .catch(error => {
      console.log(error);
    })
  }
  

  return (
    <div className="form-container">
      <form onSubmit={handleLogin}>
        <h2>Login</h2>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Email" required />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required placeholder="Password" />

        <input className="btn-submit" type="submit" value="Login" />

        <div className="login-link">
          <p>New to Ema John? <Link to="/signUp">Sign Up</Link></p>
        </div>

        <div className="google-login">
          <button>Continue with Google</button>
        </div>
      </form>
    </div>

  );
};

export default Login;
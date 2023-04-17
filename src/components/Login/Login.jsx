import React from "react";
import "./Login.css";
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    // <div className="center">
    //   <div className="form-container">
    //     <h2 className="form-title">Login</h2>
    //     <form>
    //       <div className="form-control">
    //         <label htmlFor="">Email</label>
    //         <input
    //           type="email"
    //           name="email"
    //           id="email"
    //           placeholder="Email"
    //           required
    //         />
    //       </div>
    //     </form>
    //   </div>
    // </div>

    <div className="form-container">
      <form>
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

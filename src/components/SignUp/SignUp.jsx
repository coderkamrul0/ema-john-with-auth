import React from "react";
import "./SignUp.css";
import { Link } from 'react-router-dom';


const SignUp = () => {
  return (
    <div className="signup-container">
      <form>
        <h2>Create an account</h2>

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          minLength="6"
          required
        />

        <label htmlFor="confirm-password">Confirm Password:</label>
        <input
          type="password"
          id="confirm-password"
          name="confirm-password"
          minLength="6"
          required
        />

        <input className="signUp" type="submit" value="Sign Up" />

        <div className="login-link">
          <p>Already have an account? <Link to="/login">Log in</Link></p>
        </div>
        <div className="google-login">
          <button>Continue with Google</button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;

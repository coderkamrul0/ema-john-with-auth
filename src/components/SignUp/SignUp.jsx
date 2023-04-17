import React, { useContext, useState } from "react";
import "./SignUp.css";
import { Link } from 'react-router-dom';
import { AuthContext } from "../providers/AuthProvider";


const SignUp = () => {

    const [error, setError] = useState('')
    const {createUser} = useContext(AuthContext)



    const handleSignUp = event =>{

        event.preventDefault();
        const form = event.target;
        const email = form.email.value
        const password = form.password.value
        const confirmPassword = form.confirmPassword.value
        console.log(email, password, confirmPassword);

        setError('');
        if(password !== confirmPassword){
            setError("Password Not Match")
            return
        }
        else if(password.length < 6){
            setError('Password must be 6 character')
            return
        }

        createUser(email,password)
        .then(result => {
          const loggedUser = result.user;
          console.log(loggedUser);
          form.reset();
        })
        .catch(error => {
          console.log(error);
          setError(error.message)
        })
    }

  return (
    <div className="signup-container">
      <form onSubmit={handleSignUp}>
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
          id="confirmPassword"
          name="confirmPassword"
          minLength="6"
          required
        />
        <p className="error">{error}</p>

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

import {React, useState} from 'react';
import './Login.css';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

export default function Login(props) {
    const [errorMessage, setErrorMessage]= useState();
    const auth = getAuth();
    const navigate = useNavigate();
    function handleSubmit(e) {
        e.preventDefault();
        const credentials = {
            email: e.target.email.value,
            password: e.target.password.value
        };
        signInWithEmailAndPassword(auth, credentials.email, credentials.password)
            .then((userCredential) => {
                // Signed in 
                setErrorMessage("");
                props.setCurrentUser(true);
                navigate("/homepage");
            })
            .catch((error) => {
                switch(error.code){
                    case 'auth/invalid-email': setErrorMessage("Invalid Email"); break;
                    case 'auth/missing-email': setErrorMessage("Please enter an email"); break;
                    case 'auth/missing-password': setErrorMessage("Please enter a password"); break;
                    case 'auth/wrong-password': setErrorMessage("Wrong password or email"); break;
                    default: setErrorMessage("Something went wrong"); break;
                }
                console.error(error.code + " " + error.message);
                // ..
            });
    }

  return(
    <form className="form-wrapper" onSubmit={handleSubmit}>
        <div className="form-group">
            <label>Email</label>
            <input type="email" className="form-control" name="email" placeholder="Email"/>
        </div>
        <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" name="password" placeholder="Password"/>
        </div>
        <button type="submit" className="btn btn-primary">Log In</button>
        <h3>{errorMessage}</h3>
    </form> 
  )
}
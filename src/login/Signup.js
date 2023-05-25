import {React, useState} from 'react';
import './Login.css';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { useNavigate } from 'react-router';

export default function Signup(props) {
    const [errorMessage, setErrorMessage] = useState("");
    const auth = getAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const credentials = {
            email: e.target.email.value,
            password: e.target.password.value
        };

        createUserWithEmailAndPassword(auth, credentials.email, credentials.password)
            .then((userCredential) => {
                setErrorMessage("Check your email for valifation");
            })
            .catch((error) => {
                switch(error.code){
                    case 'auth/invalid-email': setErrorMessage("Invalid Email"); break;
                    case 'auth/missing-email': setErrorMessage("Please enter an email"); break;
                    case 'auth/missing-password': setErrorMessage("Please enter a password"); break;
                    case 'auth/email-already-in-use': setErrorMessage("Your email is already registered"); break;           
                    default: setErrorMessage("Something went wrong"); break;
                }
                console.log(error.code + " " + error.message);
                // ..
            });
        sendEmailVerification(auth.currentUser).then(() => {
            props.setCurrentUser(true);
            navigate("/homepage");
        });
    }

  return(
    <form onSubmit={handleSubmit} className="form-wrapper">
        <div className="form-group">
            <label>Email address</label>
            <input type="email" className="form-control" name="email" placeholder="Enter Email"/>
        </div>
        <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" name="password" placeholder="Enter Password"/>
        </div>
        {errorMessage}
        <button type="submit" className="btn btn-primary">Sign Up</button>
    </form> 
  );
}
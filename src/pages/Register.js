import React from "react";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword, signInWithGoogle } from "../actions/authActions";
import {connect} from 'react-redux'





function Register(props) {
    if (!props.auth.isLoaded) return null;
    if (!props.auth.isEmpty) props.history.push("/");

    

    const handleSubmit = (e) => {
        e.preventDefault();
    
        let email = e.target.elements.email.value;
        let password = e.target.elements.password.value;
    
        props.createUserWithEmailAndPassword(email, password);
      };

      return(
          <>
          <h2>Register</h2>

          <form onSubmit={handleSubmit}>
              <input name="email" type="email" placeholder="Email" />
              <input name="password" type="password" placeholder="Password" />
              <input type="submit" />
              <Link to="/Login">Have an account? Login..</Link>
          </form>
          <button onClick={props.signInWithGoogle}>sign-in with Gmail</button>

          </>
      )
}

const mapStateToProps = (state) => {
    return{
       auth: state.firebase.auth
    };
}

const mapDispatchToProps = {
    createUserWithEmailAndPassword,
    signInWithGoogle,
}


export default connect(mapStateToProps, mapDispatchToProps) (Register);
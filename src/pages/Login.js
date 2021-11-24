import React from "react";
import { login, signInWithGoogle } from "../actions/authActions";
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'



function Login(props)  {
    if(!props.auth.isLoaded) return null;
    if(!props.auth.isEmpty) props.history.push("/")


    const handleSubmit= (e) => {
        e.preventDefault();

        let email= e.target.element.email.value;
        let password= e.target.element.password.value;
        
        props.login(email, password)
    };


    return(
        <div>
            <h2>Login</h2>

            <form handleSubmit={() => handleSubmit}>
                <input name="email" type="email" placeholder="Email" />
                <input name="password" type="password" placeholder="Password"/>
                <input type="submit"/>
                <Link to="/Register">New? Register..</Link>
            </form>
            <button onClick={props.signInWithGoogle}>Sign in with Google</button>
        </div>
    );


}

const mapStateToProps = (state) => {
    return {
       auth: state.firebase.auth
    }
}

const mapDispatchToProps = {
    login,
    signInWithGoogle,
}


export default connect(mapStateToProps, mapDispatchToProps) (Login);
import React from "react";
import './css/LoginSignup.css';
const LoginSignup = ()=>{
    return(
        <div className="loginsignup">
            <div className="loginsignup-container">
                <h1>Sign up</h1>

                <div className="loginsignup-fields">
                    <input type="text" placeholder="your Name" />
                    <input type="email" placeholder="your Email" />
                    <input type="password" placeholder="your Password" />
                    
                </div>
                <button>Continue</button>
                <p className="loginsignup-login">Already have an account? <span>Login Here!</span></p>
                <div className="login-signup-agree">
                    <input type="checkbox" name="" id="" />
                    <p>By continuing, I agree to the Terms of Use and Privacy Policy</p>
                </div>
            </div>

        </div>
    )
}
export default  LoginSignup;
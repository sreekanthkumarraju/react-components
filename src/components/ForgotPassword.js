import React from "react";
import redpuppy from './redpuppy.jpg'
export default function ForgotPassword(){
    return(
        <div className="container login-container">
            <div className="row row-col-2 ">
             
             <div className="col login-left">
                <img src={redpuppy} id='puppy' alt='puppy'/>
             </div>
             
             <div className="col login-right">
                <form className="d-flex flex-column ">
                    <span style={{"fontSize":"30px"}}>Forgot Your Password?</span>
                    <span style={{"fontSize":"20px","fontFamily":"'Times New Roman', Times, serif'"}}>We get it, stuff happens. Just enter your email address below and we'll send you a link to reset your password!</span>
                    <input type="email" id="loginemail" placeholder='Enter Email address....'/>
                    
                    <button type='button' id='loginbutton' className="bg-primary">Reset Password</button>
                    <hr/>
                    <a href=''> Create an Account!</a>
                    <a href=''> Already have an account? Login!</a>
                </form>

              </div>
            
            </div>
         </div>
    )
}
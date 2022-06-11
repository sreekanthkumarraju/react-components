import React from "react";
import puppy from './images.jpg'

 export default function Login(){
     return(
         <div className="container login-container">
            <div className="row row-col-2 ">
             
             <div className="col login-left">
                <img src={puppy} id='puppy' alt='puppy'/>
             </div>
             
             <div className="col login-right">
                <form className="d-flex flex-column ">
                    <input type="email" id="loginemail" placeholder='Enter Email address....'/>
                    <input type='password' id='loginpassword' placeholder="Password" />
                    <div className="d-flex justify-content-start">
                    <input type="checkbox" id='logincheckbox' class="form-check-input"/>
                    <label class="form-check-label login-label" for="exampleCheck1"> Remember me</label>
                     </div>   
                    <button type='button' id='loginbutton' className="bg-primary">Login</button>
                    <button type='button' id='glogin' className="bg-danger" ><i class="fa-brands fa-google"></i>Login With Google</button>
                    <button type='button' id='flogin' className="bg-primary"><i class="fa-brands fa-facebook-f"></i>Login with Facebook</button>
                </form>
              </div>
            
            </div>
         </div>
     )
 }
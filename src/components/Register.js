import React from "react";
import Adorablepuppy from './adorable.jpg'
export default function Register(){
  
      
     return(
         <div className="container login-container">
            <div className="row row-col-2 ">
             
             <div className="col login-left">
                <img src={Adorablepuppy} id='adorablepuppy' alt='puppy'/>
             </div>
             
             <div className="col login-right">
                <form className="d-flex flex-column ">
                        <span style={{"fontSize":"30px"}}>Create An Account </span>
                      <input type="email" id="loginemail" placeholder='FirstName'/>
                    <input type='password' id='loginpassword' placeholder="LastName" />
                    <input type="email" id="loginemail" placeholder='Email address....'/>
                    <input type='password' id='loginpassword' placeholder="Password" />
                    <input type='password' id='loginpassword' placeholder="Repeat Password" />
                     
                    <button type='button' id='loginbutton' className="bg-primary">Register</button>
                    <button type='button' id='glogin' className="bg-danger" ><i class="fa-brands fa-google"></i>Register With Google</button>
                    <button type='button' id='flogin' className="bg-primary"><i class="fa-brands fa-facebook-f"></i>Register with Facebook</button>
                </form>
              </div>
            
            </div>
         </div>
     )
 }
    

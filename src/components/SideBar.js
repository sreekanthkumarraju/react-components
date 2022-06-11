import React from "react";
import { Link } from "react-router-dom";

export default function SideBar(){
    return(

        <div className="float-start border  w-25 bg-primary text-white sidebar" style={{"minHeight": "800vh "}}>
            
            <ul className="navbar-nav flex-column">
            
                <li className="nav-item " style={{"paddingTop":"10px"}}>
                    <i className="fa-regular fa-face-laugh-wink fa-2xl" data-fa-transform="flip-v"></i>
                    <span>SB ADMIN</span>
                </li>
              
              <hr/>
               
                  <li className="nav-item" style={{"textAlign":"left"}}>
                 <Link to='/dashboard' >
                    <button className='text-white' style={{"border":"none","background":"none"}}>Dashboard</button>
                    </Link>  
                  </li>
                
                

              <hr/>
  
                <li className="nav-item"  style={{"textAlign":"left"}}>
                  <span>INTERFACE</span>
             
                  <div className="dropdown ">
  
                    <a className="btn  dropdown-toggle text-white" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                      Components
                    </a>

                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
   
                       <li><a className="dropdown-item text-secondary"  href="#">Custom Components</a></li>
                       <li><hr className="dropdown-divider"/></li> 
                       <Link to="/buttons">   
                         <li><a className="dropdown-item" href="#">Buttons</a></li>
                         </Link>
                         <Link to='/Cards'> 
                         <li><a className="dropdown-item" href="#">Cards</a></li>
                       </Link>
                    </ul>
              
                  </div>

                 {/* <div className="dropdown ">
  
                   <a className="btn  dropdown-toggle text-white" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                       Utilities
                   </a>

                   <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">

                     <li><a className="dropdown-item text-secondary" href="#">Custom Utilities</a></li>
                     <li><hr className="dropdown-divider"/></li>   
                     <Link to='/colors'>
                     <li><a className="dropdown-item" href="#">Colors</a></li>
                     </Link>
                     <Link to='/borders'>
                     <li><a className="dropdown-item" href="#">Borders</a></li>
                     </Link>
                     <Link to='/Animations'>
                     <li><a className="dropdown-item" href="#">Animations</a></li>
                     </Link>
                     <Link to="/Others">
                     <li><a className="dropdown-item" href="#">Others</a></li>
                     </Link>
 
                   </ul>

                  </div> */}

                   <hr/>
              
                </li>
  
              <li className="nav-item"  style={{"textAlign":"left"}}>
                  <span>ADDONS</span>
             
                  <div className="dropdown ">
  
                     <a className="btn  dropdown-toggle text-white" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                        Pages
                     </a>

                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
   
                      <li><a className="dropdown-item text-secondary"  href="#">Login Screens</a></li>
                      <li><hr className="dropdown-divider"/></li>    
                      <Link to='/login'>
                      <li><a className="dropdown-item" href="#">Login</a></li>
                      </Link>
                      <Link to='/register'>
                      <li><a className="dropdown-item" href="#">Register</a></li>
                      </Link>
                      <Link to="/forgotpassword">
                      <li><a className="dropdown-item" href="#">Forgot Password</a></li>
                      </Link>
                      <li><hr className="dropdown-divider"/></li>    
                      <li><a className="dropdown-item text-secondary"  href="#">Other pages</a></li>
                      <li><hr className="dropdown-divider"/></li>    
                      <li><a className="dropdown-item" href="#">404 page</a></li>
                      <li><a className="dropdown-item" href="#">Blank Page</a></li>
                     
                    </ul>
              
                  </div>
                   
                   {/* <li className="nav-item chart" >
                  
                   <Link to='/Charts' >
                    <button className='text-white' style={{"border":"none","background":"none"}}>Charts</button>
                    </Link> 
                     
                   </li> */}
                  
                   
                 
                   <li className="nav-item tables" >
                  
                   <Link to='/tables' >
                    <button className='text-white' style={{"border":"none","background":"none"}}>Tables</button>
                    </Link> 
                    
                  </li>
                  
                   <hr/>
              
                </li>
            </ul>
           
        </div>
    )
}
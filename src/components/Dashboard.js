import React from "react";
import App1 from "./App1";

export default function Dashboard(){
    return(
        <div>
           
          <nav className="navbar bg-light">
  
            <div className="container-fluid bg-white  ">
     
              <div className='float-start mt-2 mb-2'>
    
                <form className='d-flex' role="search">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                  <button className="btn btn-outline-success" type="submit">Search</button>
                 </form>
              </div>
    
             <div className='float-end mt-2 mb-2'>
      
               <button type="button" className="btn btn-primary position-relative">
                    <i className="fa-regular fa-envelope"></i>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                       9+
                      <span className="visually-hidden">unread messages</span>
                   </span>
                </button>
        
                 <button type="button" className="btn btn-primary position-relative ms-4">
      
                    <i className="fa-regular fa-bell"></i>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      9+
                       <span className="visually-hidden">unread messages</span>
                    </span>
                </button>
              </div>
            </div>
          </nav>
         <div className="mt-4">
          <span style={{"textAlign":"left"}}>Dashboard</span>
          
        <div className="row row-col-4 mt-2">
           
          
  
         <div className="col ">
           <div className="card left">
         
            <div className="card-body" style={{"textAlign":"left"}}>
             <div className='float-start'>
                <h5 className="card-title">EARNINGS(ANNUAL)</h5>
                <p className="card-text">$215,000</p>
               </div> 
               <div className="float-end">
                <i className="fa-solid fa-dollar-sign"></i>
              </div>
            </div>
          </div>
         </div>

         <div className="col ">
           <div className="card left">
         
            <div className="card-body" style={{"textAlign":"left"}}>
            <div className='float-start'>
                <h5 className="card-title">TASKS</h5>
                <p className="card-text">50%</p>
              </div>  
              <div className="float-end"> 
              <i className="fa-solid fa-list-check"></i>
              </div>
            </div>
          </div>
         </div>
         <div className="col ">
           <div className="card left">
         
            <div className="card-body" style={{"textAlign":"left"}}>
            <div className='float-start'>
                <h5 className="card-title">PENDING REQUESTS</h5>
                <p className="card-text">18</p>
                </div>
                <div className="float-end"> 
                <i className="fa-solid fa-comments"></i>
                </div>
              
            </div>
          </div>
         </div>
        </div>
      </div>

      <div className="row mt-5">
          <div className="col col-xs-8">
          <App1/> 
         </div>
         
      </div>
        </div>
    )
}
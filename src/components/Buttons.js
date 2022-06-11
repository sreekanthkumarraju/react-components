import React from "react";

export default function Buttons(){
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

<div>
    <p style={{"textAlign":"center","fontSize":"30px"}}>Buttons</p>
</div>

   

   <div class='Container'>
   
      <div class='row row-col-2'>
  
        <div class="card col ms-5"> 
        <div class="card-header text-primary ">Circle Buttons</div>
          <div class="card-body">
               <h5 class="card-title"></h5>
               <p class="card-text text-danger" style={{"textAlign":"left"}}>.btn-circle</p>
               
               <div style={{"width":"fit-content"}}>
                      <button type="button" class="btn btn-primary btn-circle btn-btn"><i class="fa-brands fa-facebook fa-2xl"></i></button>
                      <button type="button" class="btn btn-danger btn-circle btn-btn"><i class="fa-solid fa-check fa-2xl"></i></button>
                      <button type="button" class="btn btn-warning btn-circle btn-btn"><i class="fa-light fa-exclamation fa-2xl"></i></button>
                      <button type="button" class="btn btn-secondary btn-circle btn-btn"><i class="fa-solid fa-trash fa-2xl"></i></button>
                </div>
                <p class="card-text text-danger" style={{"textAlign":"left"}}>.btn-circle .btn-sm</p>
                <div style={{"width":"fit-content"}}>
                      <button type="button" class="btn btn-primary  btn-sm btn-btn"><i class="fa-brands fa-facebook "></i></button>
                      <button type="button" class="btn btn-danger  btn-sm btn-btn"><i class="fa-solid fa-check "></i></button>
                      <button type="button" class="btn btn-warning  btn-sm btn-btn"><i class="fa-light fa-exclamation "></i></button>
                      <button type="button" class="btn btn-secondary btn-sm btn-btn"><i class="fa-solid fa-trash "></i></button>
                </div>

                <p class="card-text text-danger" style={{"textAlign":"left"}}>.btn-circle .btn-lg</p>
                <div style={{"width":"fit-content"}}>
                      <button type="button " class="btn btn-primary  btn-lg btn-btn"><i class="fa-brands fa-facebook fa-2xl"></i></button>
                      <button type="button" class="btn btn-danger btn-lg btn-btn"><i class="fa-solid fa-check fa-2xl"></i></button>
                      <button type="button" class="btn btn-warning  btn-lg btn-btn"><i class="fa-light fa-exclamation fa-2xl"></i></button>
                      <button type="button" class="btn btn-secondary  btn-lg btn-btn"><i class="fa-solid fa-trash fa-2xl"></i></button>
                </div>
          </div>
        </div>

        <div class="card col ms-5">
           <div class="card-header text-primary">
           Split Buttons with Icon
           </div>
           <div class="card-body">
               
               
               <div className="btn-icon-split d-flex flex-column">
               <button type="button" class="btn btn-primary btn-btn btn-icon-split">
               <i class="fa-solid fa-check fa-xl start"></i>
                     <span class='right'>Split Button Primary</span>
                </button>
               <button type="button" class="btn btn-secondary btn-btn btn-icon-split">
               <i class="fa-brands fa-font-awesome fa-xl start "></i>
                   <span class='right'>Split Button Secondary</span>
                </button>
               <button type="button" class="btn btn-success btn-btn btn-icon-split ">
                   <i class="fa-solid fa-trash fa-xl start"></i>
                   <span class='right'>Split Button Success</span>
                </button>
               <button type="button" class="btn btn-danger btn-btn btn-icon-split" >
                   <i class="fa-brands fa-font-awesome fa-xl start "></i>
                   <span class='right'>Split Button Danger</span> 
                </button>
               <button type="button" class="btn btn-info btn-btn btn-icon-split">
                 <i class="fa-solid fa-trash fa-xl start"></i>
                   <span class='right'>Split Button Info</span>
               </button>
               <button type="button" class="btn btn-dark btn-btn btn-icon-split">
               <i class="fa-solid fa-check fa-xl start"></i>
                  <span class='right'>Split Button Dark</span> 
               </button>
            </div>
          </div>
        </div>
      
        
      </div>
    </div>
        
        
  
  
  
  </div>
    )
}
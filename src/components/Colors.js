import React from "react";

export default function Colors(){
    return(
        <div>
            Hello welcome to Colors Component
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

            <div class="card-group first">
  
              <div class="card">
                
                <div class="card-header bg-white text-primary border-primary">Custom Text Color Utilities</div>
                <div class="card-body">
                  <div class='card-1-first'>
                  <p class=".text-gray-100">.text-gray-100</p>
                  <p class=".text-gray-200">.text-gray-200</p>
                  <p class=".text-gray-300">.text-gray-300</p>
                  <p class=".text-gray-400">.text-gray-400</p>
                  </div>

                  <div class='card-1-next'>
                  <p class=".text-gray-500">.text-gray-500</p>
                  <p class=".text-gray-600">.text-gray-600</p>
                  <p class=".text-gray-700">.text-gray-700</p>
                  <p class=".text-gray-800">.text-gray-800</p>
                  <p class=".text-gray-900">.text-gray-900</p>
                  </div>
                </div>
             
              
             
             </div>
  
             <div class="card">
              
             <div class="card-header bg-white text-primary border-success">Custom Background Gradient Utilities</div>
              <div class="card-body">
               <h5 class="card-title">Card title</h5>
                  <p></p>
              </div>
           
             
             </div>
  
             <div class="card">
                <div class="card-header bg-white  text-primary border-success">Custom Grayscale Background Utilities</div>
                <div class="card-body">
                   <h5 class="card-title">Card title</h5>
                   <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                </div>
    
              
             </div>
             </div>
</div>
    )
}
import React from "react";


export default function Cards(){
    return(

        <div style={{"minHeight": "800vh "}}>
        
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
       
       <div class="row row-cols-1 row-cols-md-2 g-4 mt-4">
  <div class="col">
    <div class="card">
      
      <div class="card-header bg-transparent ">Default Card Example</div>
      <div class="card-body ">
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
    <div class="btn-group dropend">
    
 
     <button type="button"  class="card-header bg-primary" data-bs-toggle="dropdown" style={{"border":"none","width":"100vw"}}>
     Dropdown Card Example
                      <ion-icon name="ellipsis-vertical-outline" style={{"fontSize":"14px","color":"black","marginLeft":"8vmin"}}></ion-icon>
                
            </button>
    
     
                        <div class="dropdown-menu">
                            <a href="#" class="dropdown-item">Inbox</a>
                            <a href="#" class="dropdown-item">Drafts</a>
                            <a href="#" class="dropdown-item">Sent Items</a>
                            <div class="dropdown-divider"></div>
                            <a href="#"class="dropdown-item">Trash</a>
                        </div>
      </div>
      <div class="card-body">
        
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
    <div class="card-header bg-primary ">Basic Card Example</div>
      <div class="card-body">
        
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  <div class='col'>
  <p >
  <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample" style={{"width":"420px"}}>
    Collapsable card
  </button>
</p>
<div style={{"minHeight":"100vh"}}>
  <div class="collapse collapse-horizontal" id="collapseWidthExample">
    <div class="card card-body" style={{"width":"35vw"}}>
      This is some placeholder content for a horizontal collapse. It's hidden by default and shown when triggered.
    </div>
  </div>
</div>
</div>
</div> 
</div>
   
    )
}
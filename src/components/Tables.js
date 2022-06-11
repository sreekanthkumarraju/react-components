import React from "react";
import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";

import $ from "jquery";

const names = [
  {
    "title" : "mr",
    "firstname" : "Lawson",
    "lastname" : "Luke",
    "age" : 28,
    "occupation" : "Software Developer",
    "hobby" : "coding"
  },
  {
    "title" : "mr",
    "firstname" : "Michael",
    "lastname" : "Jackson",
    "age" : 35,
    "occupation" : "Singer",
    "hobby" : "dancing"
  },
  {
    "title" : "mr",
    "firstname" : "Janet",
    "lastname" : "Jackson",
    "age" : 35,
    "occupation" : "Singer",
    "hobby" : "dancing"
  },
  {
    "title" : "mr",
    "firstname" : "Lawson",
    "lastname" : "Luke",
    "age" : 28,
    "occupation" : "Software Developer",
    "hobby" : "coding"
  },
  {
    "title" : "mr",
    "firstname" : "Michael",
    "lastname" : "Jackson",
    "age" : 35,
    "occupation" : "Singer",
    "hobby" : "dancing"
  },
  {
    "title" : "mr",
    "firstname" : "Janet",
    "lastname" : "Jackson",
    "age" : 35,
    "occupation" : "Singer",
    "hobby" : "dancing"
  },
  {
    "title" : "mr",
    "firstname" : "Lawson",
    "lastname" : "Luke",
    "age" : 28,
    "occupation" : "Software Developer",
    "hobby" : "coding"
  },
  {
    "title" : "mr",
    "firstname" : "Michael",
    "lastname" : "Jackson",
    "age" : 35,
    "occupation" : "Singer",
    "hobby" : "dancing"
  },
  {
    "title" : "mr",
    "firstname" : "Janet",
    "lastname" : "Jackson",
    "age" : 35,
    "occupation" : "Singer",
    "hobby" : "dancing"
  },
  {
    "title" : "mr",
    "firstname" : "Lawson",
    "lastname" : "Luke",
    "age" : 28,
    "occupation" : "Software Developer",
    "hobby" : "coding"
  },
  {
    "title" : "mr",
    "firstname" : "Michael",
    "lastname" : "Jackson",
    "age" : 35,
    "occupation" : "Singer",
    "hobby" : "dancing"
  },
  {
    "title" : "mr",
    "firstname" : "Janet",
    "lastname" : "Jackson",
    "age" : 35,
    "occupation" : "Singer",
    "hobby" : "dancing"
  }
]


class Tables extends React.Component {

  componentDidMount(){
 if (!$.fn.DataTable.isDataTable("#myTable")) {
            $(document).ready(function () {
              setTimeout(function () {
                $("#table").DataTable({
                  pagingType: "full_numbers",
                  pageLength: 10,
                  processing: true,
                  dom: "Bfrtip",
                  select: {
                    style: "single",
                  },     
                  fnRowCallback: function (
                    nRow,
                    aData,
                    iDisplayIndex,
                    iDisplayIndexFull
                  ) {
                    var index = iDisplayIndexFull + 1;
                    $("td:first", nRow).html(index);
                    return nRow;
                  },
      
                  lengthMenu: [
                    [10, 20, 30, 50, -1],
                    [10, 20, 30, 50, "All"],
                  ],
                  columnDefs: [
                    {
                      targets: 0,
                      render: function (data, type, row, meta) {
                        return type === "export" ? meta.row + 1 : data;
                      },
                    },
                  ],
                });
              }, 1000);
            });
          }
}  

showTable = () => {
        try {
          return names.map((item, index) => {
            return (
                <tr >
                <td className="text-xs font-weight-bold" style={{"border":"1px solid black"}}>{index +1}</td>
               <td className="text-xs font-weight-bold" style={{"border":"1px solid black"}}>{item.title}</td>
               <td className="text-xs font-weight-bold" style={{"border":"1px solid black"}}>{item.firstname+ ' ' + item.lastname}</td>
               <td className="text-xs font-weight-bold" style={{"border":"1px solid black"}}>{item.age}</td>
               <td className="text-xs font-weight-bold" style={{"border":"1px solid black"}}>{item.hobby}</td>
               <td className="text-xs font-weight-bold" style={{"border":"1px solid black"}}>{item.occupation}</td>
<td></td>
</tr>
                );
          });
        } catch (e) {
     
        }
      };

  render(){
  return(
  <div class="container-fluid py-4">
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
         <div class="table-responsive p-4 pb-2">
       <table id="table" className="table align-items-center justify-content-center mb-0" style={{"margin":"30px","color":"gray"}}>
           <thead>
               <tr>
               <th className="text-uppercase text-secondary text-sm font-weight-bold opacity-7 ps-2" style={{"border":"1px solid black"}}>S/N</th>
               <th className="text-uppercase text-secondary text-sm font-weight-bold opacity-7 ps-2" style={{"border":"1px solid black"}}>Title</th>
               <th className="text-uppercase text-secondary text-sm font-weight-bold opacity-7 ps-2" style={{"border":"1px solid black"}}>Name</th>
               <th className="text-uppercase text-secondary text-sm font-weight-bold opacity-7 ps-2" style={{"border":"1px solid black"}}>Age</th>
               <th className="text-uppercase text-secondary text-sm font-weight-bold opacity-7 ps-2" style={{"border":"1px solid black"}}>Hobby</th>
               <th className="text-uppercase text-secondary text-sm font-weight-bold opacity-7 ps-2" style={{"border":"1px solid black"}}>Occupation</th>
<th></th>
</tr>
           </thead>

           <tbody>
                   {this.showTable()}
           </tbody>
       </table>
           </div>
           </div>
)
}
}

export default Tables;
import React from "react";
import {Routes,Route} from 'react-router-dom'
import Buttons from "./Buttons";
import Dashboard from "./Dashboard";
import Cards from './Cards'
import Colors from "./Colors";
import Borders from "./Borders";
import Animations from "./Animations";
import Others from "./Others";
import Register from "./Register";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";
import Tables from "./Tables";
import Chart from "./Chart";

export default function Body(){
    return(
       
            <Routes>
              <Route path="/dashboard"    element={<Dashboard/>}></Route>
              <Route path='/buttons'      element={<Buttons/>}></Route>
              <Route path="/cards"        element={<Cards/>}></Route>
              <Route path="/colors"       element={<Colors/>}></Route>
              <Route path="/borders"      element={<Borders/>}></Route>
              <Route path='/Animations'   element={<Animations/>}></Route>
              <Route path='/others'       element={<Others/>}></Route>
              <Route path="/login"        element={<Login/>}></Route>
              <Route path='/register'     element={<Register/>}></Route>
              <Route path="/forgotpassword" element={<ForgotPassword/>}></Route>
              <Route path='/tables'       element={<Tables/>}></Route>
              <Route path='/charts'       element={<Chart/>}></Route>
            </Routes>
       
    )
}
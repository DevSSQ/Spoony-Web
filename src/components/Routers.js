import React from "react";
import {Routes, Route} from 'react-router-dom';
import AboutUs from "./AboutUs";
import HomePage from "./HomePage";
import Recipes from "./Recipes";
import Login from "./Login";



function Routers() {
    return (
      <div>
          <Routes>

          <Route  path='/homepage' element ={<HomePage/>}></Route>
          <Route  path='/recipes' element = {<Recipes/>}></Route>
          <Route  path='/aboutus' element = {<AboutUs/>}></Route>
          <Route  path='/login' element = {<Login/>}></Route>

          
  
  </Routes>
  
      </div>
    )
  }
  
  export default Routers
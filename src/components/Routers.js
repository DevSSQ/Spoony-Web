import React from "react";
import {Routes, Route} from 'react-router-dom';
import AboutUs from "./AboutUs";
import HomePage from "./HomePage";
import Recipes from "./Recipes";
import Login from "./Login";
import FullRecipesCard from "./FullRecipesCard";
import Info from "./Info";


function Routers() {
    return (
      <div>
        
          <Routes>
          <Route path='/' element ={<Login/>}></Route>
    <Route path='/Home' element ={<HomePage/>}></Route>
          <Route  path='/homepage' element ={<HomePage/>}></Route>
          <Route  path='/recipes' element = {<Recipes/>}></Route>
          <Route  path='/aboutus' element = {<AboutUs/>}></Route>
          <Route  path='/login' element = {<Login/>}></Route>
          <Route  path='/info' element = {<Info/>}></Route>


          
  
  </Routes>
  
      </div>
    )
  }
  
  export default Routers

// import React from 'react'
// import HomePage from './HomePage'
// import Login from './Login'
// import { Routes, Route } from "react-router-dom"

// function Routers() {
//   return (
//     <div>
// <Routes>
 
// </Routes>
//     </div>
//   )
// }

// export default Routers

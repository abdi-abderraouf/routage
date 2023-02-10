import React from 'react';
import {NavLink} from 'react-router-dom';
const Navigation =()=>{ 
    return(
 <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
  <nav class="nav">
  <NavLink to="/"class="nav-link"><h3>home</h3></NavLink>
 </nav> 
  <nav class="nav">
  <NavLink to="/About"class="nav-link"><h3>about</h3></NavLink>
 </nav> 
 <nav class="nav">
 <NavLink to="/Contact"class="nav-link"><h3>contact</h3></NavLink>
 </nav> 
</div>   
</nav>       );
}
export default Navigation;
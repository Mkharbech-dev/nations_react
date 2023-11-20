import React from "react";
import { NavLink } from "react-router-dom";


const Navigation = () => {
  return (
    
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container-fluid" >
     
        <a class="navbar-brand"  href="/">
        <img className="logo" src="./logo192.png" alt="logo react" />
        <h5>Nations du Monde</h5>
        </a>
       
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <NavLink className="nav-link active" aria-current="page" href="#" to="/">
                  Accueil 
              </NavLink>
            </li>
            <li class="nav-item">
                <NavLink className="nav-link active" aria-current="page" href="#" to="/about">
                  A propos
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
  
};
export default Navigation;

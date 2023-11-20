import React from 'react';
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
    <footer className="py-3   bg-dark">
    <ul className="nav justify-content-center mb-2 ">
      <li className="nav-item"><NavLink to="/" className="nav-link px-2 text-muted">Home</NavLink></li>

      <li className="nav-item"><NavLink to="/about" className="nav-link px-2 text-muted">About</NavLink></li>
    </ul>
    <p className="text-center text-muted">&copy; 2023 Mkharbech salah eddine, Tout droit résérvé</p>
  </footer>
    );
};

export default Footer;
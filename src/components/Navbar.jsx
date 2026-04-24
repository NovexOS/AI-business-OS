import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{background:"#111",padding:"15px"}}>
      <Link style={{color:"white",marginRight:"20px"}} to="/">Home</Link>
      <Link style={{color:"white",marginRight:"20px"}} to="/features">Features</Link>
      <Link style={{color:"white",marginRight:"20px"}} to="/pricing">Pricing</Link>
      <Link style={{color:"white",marginRight:"20px"}} to="/about">About</Link>
      <Link style={{color:"white",marginRight:"20px"}} to="/contact">Contact</Link>
      <Link style={{color:"white",marginRight:"20px"}} to="/login">Login</Link>
      <Link style={{color:"white"}} to="/signup">Signup</Link>
    </nav>
  );
}

export default Navbar;
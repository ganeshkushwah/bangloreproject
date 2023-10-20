import React from "react";
import { Link } from "react-router-dom";
import "../../Scss/styling/navbar.css";
import brand from "../../Assets/Images/navbar-brand.png"


const Navbar = () => {
  return (
    <header>
      <Link to={"/"} className="heading">
        <img src={brand} alt="" />
      </Link>
      <ul>
        <div className="ul-link">
          <Link className="nav-link" href={"/"}>Products</Link>
          <Link className="nav-link" href={"/"}>Sale</Link>
          <Link className="nav-link" href={"/"}>Cart  <p className="p-nav">O</p></Link>
         
          <input type="text" placeholder="Search" className="input-nav"/>
          <button className="btn">Search</button>
        </div>
      </ul>
    </header>
  );
};

export default Navbar;

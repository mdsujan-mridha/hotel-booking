import React from 'react';
import "./Navbar.css";
const Navbar = () => {
    return (
       <section>
         <div className="navbar">
            <div className="navbar-container">
                <span className="logo"> BOOKING </span>
                <div className="nav-items">
                    <button className="nav-btn">Register</button>
                    <button className="nav-btn">Login</button>
                </div>
            </div>
         </div>
       </section>
    );
};

export default Navbar;
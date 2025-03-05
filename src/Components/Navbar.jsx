import React from "react";
import { Nav } from "../Constants/Nav";
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <section className="navsec">
        <div className="container">
        <nav className="navbar navbar-expand-lg ">
        <div className="brand-logo">
            <img src={Nav.logo} className="img-fluid"/>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
            <div className="nav-links willenet d-lg-flex d-block align-items-center ">
                {
                    Nav.titles.map((data , i)=>{
                        return(
                            <div className="nav-items" key={i}>
                              <Link to={data?.link}><h5>{data?.name}</h5></Link>
                                
                            </div>
                        )
                    })
                }
            
            </div>
        </div>
      </nav>
        </div>

   </section>
  );
}

export default Navbar;

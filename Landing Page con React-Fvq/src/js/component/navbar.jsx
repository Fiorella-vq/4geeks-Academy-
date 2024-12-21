import React from "react";

const Navbar = () => {
    return (
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="#">
            Start Bootstrap
          </a>
  
          <div className="collapse navbar-collapse" id="navbarNav">

            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a
                  className="nav-link active text-white"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-secondary" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-secondary" href="#">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-secondary" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  };
  
export default Navbar;


import React, { useContext, useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

  
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

  return (
    <nav className="navbar">
      <Link to="/">
        <button className="btn m-3">
          <h1 className="logo" style={{ fontFamily: 'Star Wars', color: "#FF1493", textShadow: "1px 1px 0 #fff" }}>
            STAR WARS
          </h1>
        </button>
      </Link>
      <div className="btn-group m-3" ref={dropdownRef}>
        <button 
          type="button" 
          className="btn" 
          style={{ backgroundColor: "#FF1493", color: "white", boxShadow: "1px 1px 0 #fff" }}
          aria-label="Favorites"
          onClick={toggleDropdown}
        >
          <i className="fa-solid fa-heart"></i> {store.favorites.length}
        </button>
        {dropdownOpen && (
          <div className="dropdown-menu show mt-5" style={{ right: 0, minWidth: "200px" }}>
            {store.favorites.length === 0 ? (
              <span className="dropdown-item">
                <i className="fa-solid fa-circle-exclamation" style={{ color: "#FF1493" }}> No favorites</i>
              </span>
            ) : (
              store.favorites.map((fav, index) => (
                <div key={index} className="dropdown-item d-flex justify-content-between align-items-center">
                  <span>{fav.name}</span>
                  <button 
                    className="btn btn-link p-0" 
                    onClick={() => actions.removeFavorite(fav.uid)} 
                    style={{ color: "#FF1493", textShadow: "1px 1px 0 #fff" }}
                    aria-label="Remove favorite"
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext"; 
import "../../styles/navbar.css"


export const Navbar = () => {
    const { actions } = useContext(Context); // asegurar  extraer acciones del contexto

    return (
        <nav 
            className="navbar Navbar mb-3" style={{ "color": "white" }}>
               
            <Link to="/">
            <button className="btn text-light btn-sm m-2 " style={{"background": "#1B5E20", color: "white" }}>
              <i
                className="fa-solid fa-house m-2"
                style={{ color: "#FF3B3F", width: "15px" }}
              ></i>{" "}
              BACK HOME
            </button>
            </Link>
        
            <div 
                className="button-container" 
                style={{ 
                    position: "absolute", 
                    top: "10px", 
                    right: "10px", 
                    display: 'flex', 
                    justifyContent: 'flex-end' 
                }}
            >
                <Link to="/create">
                    <button
                        onClick={() => actions.createContact()} 
                         className="btn  mt-2 m-2"
                        style={{ background: "#1B5E20", color: "white" }}
                    >
                        <i className="fa-solid fa-user m-auto text-warning"></i> ADD A NEW CONTACT
                    </button>
                </Link>
            </div>
        </nav>
    );
};
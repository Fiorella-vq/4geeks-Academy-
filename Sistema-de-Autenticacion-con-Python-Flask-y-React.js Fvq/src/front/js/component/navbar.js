import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar m-3" style={{
			backgroundColor: "transparent"}}>
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1"style={{color: "#4CAF50"}}>Home</span>
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn"style={{backgroundColor:"#FF7043", color:"white"}}>Go</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};

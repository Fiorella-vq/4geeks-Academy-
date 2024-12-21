import React from "react";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {

	// const location = useLocation();
	// const isLoginRoute = location.pathname === "/login";
	// const isRegisterRoute = location.pathname === "/register";

	// if (isLoginRoute || isRegisterRoute) {
		return (
			<div className="text-center position-fixed w-100 " style={{ backgroundColor: "#3865e5", "zIndex": "1030", "top": "0" }}>
				<img className="andalogo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHwhLQMZ2CZSdjF3LVpaD1878PAVn3HvUy8g&s"></img>
			</div>
		);
	// }

	// return (
	// 	<div className="text-center position-fixed w-100 mb-4" style={{ backgroundColor: "#3865e5", "zIndex": "1030", "top": "0" }}>
	// 		<img className="andalogo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHwhLQMZ2CZSdjF3LVpaD1878PAVn3HvUy8g&s"></img>
	// 	</div>
	// );
};

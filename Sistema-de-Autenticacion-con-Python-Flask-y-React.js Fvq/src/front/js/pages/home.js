import React, { useContext } from "react";
import { Context } from "../store/appContext";
import images from "../../img/images.png";
import { Navigate } from "react-router-dom";
import "../../styles/home.css";

export const Home = () => {
	const { store } = useContext(Context);
	

	return (
		<div className="text-center bg-light">
		  <img src={images} alt="Imagen de prueba" />
		  {store.token == null ? <Navigate to="/login" /> : <h1>Tienes acceso a la vista privada</h1>}
		</div>
	  );
	  
};
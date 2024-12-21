import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from 'react-router-dom';
import "../../styles/home.css";
import { Login } from "../component/login";

export const Home = () => {
    const { store, actions } = useContext(Context);


    return (
        <div>
            <Login />
        </div>
    );
};

import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

export const Private = ()=>{
    const { store } = useContext(Context);
    const usuario = localStorage.getItem("access_token")
    useEffect(() => {



    },[])
    

 
    return(
        <div>{usuario}</div>
    );
}

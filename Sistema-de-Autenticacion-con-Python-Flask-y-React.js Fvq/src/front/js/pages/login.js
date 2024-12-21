import React, { useState, useContext } from "react";
import { useNavigate , Link} from "react-router-dom";
 

import { Context } from "../store/appContext";

export const Login = () => {
    const navigate = useNavigate()
    const { store, actions } = useContext(Context)
  
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const login = async (e) => {
        e.preventDefault()
        let userNew = {
         
            email: email,
            password: password

        }
        let response = await actions.login(userNew)
       
        if (response){navigate("/")}
        else{alert("Error al hacer login")}
        console.log(response) 
       

        
       
    }
    return (
        <div className="container"
        style={{
          backgroundColor: "#B4E197",
          borderRadius: "5px",
          boxShadow: "0px 4px 6px 0px rgba(132, 173, 123, 0.9)",
          color: "#4CAF50"
        }}
        >
        
			<h1>Iniciar Sesión</h1>
			<form>
				
				<div className="mb-3">
					<label htmlFor="exampleInputEmail" className="form-label"><strong>Email address</strong></label>
					<input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputPassword" className="form-label"><strong>Password</strong></label>
					<input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" />
				</div>
				<button type="button" onClick={(e)=>login(e)} className="btn m-2"style={{backgroundColor:"#FF7043", color:"white"}}>Submit</button>
                <Link to="/signup"style={{ color: "#4CAF50"}}>Register</Link>
            </form>
		</div>
    );
}
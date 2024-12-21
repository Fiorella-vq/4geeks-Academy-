import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Signup = () => {
	const { store, actions } = useContext(Context);
	const [name,setName]=useState("")
	const [email,setEmail]=useState("")
	const[password,setPassword]=useState("")

	const add = async (e)=>{
     e.preventDefault()
	 let newUser = {
		name : name,
		email : email,
		password : password,

	}
	let resp = await actions.signup(newUser)
	console.log(resp)
	}
	return (
		<div className="container "  style={{
			backgroundColor: "#B4E197",
			borderRadius: "5px",
			boxShadow: "0px 4px 6px 0px rgba(132, 173, 123, 0.9)",
			color: "#4CAF50"
		  }}>
			<h1>Signup</h1>
			<form>
				<div className="mb-3">
					<label htmlFor="exampleInputEmail12" className="form-label"><strong>Name</strong></label>
					<input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputEmail12" className="form-label"><strong>Email address</strong></label>
					<input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputPassword12" className="form-label"><strong>Password</strong></label>
					<input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" />
				</div>
				<button type="button" onClick={(e)=>add(e)} className="btn m-2"style={{backgroundColor:"#FF7043", color:"white"}}>Submit</button>
				
			</form>
		</div>
	);
};
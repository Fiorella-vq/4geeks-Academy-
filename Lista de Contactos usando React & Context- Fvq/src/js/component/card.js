import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const ContactCard = (props) => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    const uniqueImageURL = `https://i.pravatar.cc/150?u=${props.email || props.id}`;

    return (
        <div className="card mb-3 position-relative" style={{ maxWidth: "100%", "background":"#FDCFE8" }}>
            <div className="row g-0">
           
                <div className="position-absolute p-2 d-flex flex-column align-items-end justify-content-start" >
                    <i
                       className ="fa-solid fa-user-pen mb-2"
                        title="Edit contact"
                        style={{ cursor: "pointer" }}
                        onClick={() => navigate("/edit/" + props.id)}
                    />
                    <i
                        className="fa-solid fa-trash me-1"
                        title="Delete contact"
                        style={{ "cursor": "pointer" }}
                        onClick={async () => {
                            await actions.deleteContact(props.id);
                            navigate("/");
                        }}
                    />
                </div>

               
                <div className="col-md-4 d-flex align-items-center justify-content-center">
                    <img
                        src={props.imageURL ? props.imageURL : uniqueImageURL}
                        className="img-fluid rounded-circle"
                        alt="Contact"
                        style={{ width: "150px", height: "150px", objectFit: "cover" }}
                    />
                </div>

                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text">
                            <i className="fa-solid fa-location-dot"></i> {props.address}
                        </p>
                        <p className="card-text">
                            <i className="fa-solid fa-phone"></i>
                            <small className="text-body-secondary"> {props.phone}</small>
                        </p>
                        <p className="card-text">
                            <i className="fa-solid fa-envelope"></i>
                            <small className="text-body-secondary"> {props.email}</small>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
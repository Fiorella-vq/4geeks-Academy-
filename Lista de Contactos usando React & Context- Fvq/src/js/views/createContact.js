import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate, useParams } from "react-router-dom";

export const CreateContact = () => {
  const { actions, store } = useContext(Context);
  const navigate = useNavigate();
  const { id } = useParams();

//Cada campo lo pongo separado
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    if (id) {
      const existingContact = store.contacts.find((c) => c.id === parseInt(id));
      if (existingContact) {
        setName(existingContact.name || "");
        setEmail(existingContact.email || "");
        setPhone(existingContact.phone || "");
        setAddress(existingContact.address || "");
      }
    }
  }, [id, store.contacts]);

  const handleSubmit = async () => {
    const contact = { name, email, phone, address };
    if (id) {
      await actions.editContact(id, contact);
    } else {
      await actions.createContact(contact);
    }
    navigate("/");
  };

  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="px-5" style={{ width: "550px" }}>
        <div className="mb-3">
          <label className="form-label" style={{ color: "#556B2F" }}>
            <strong>Full Name</strong>
          </label>
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            type="text"
            className="form-control bg-light text-success"
            placeholder="Full Name"
          />
        </div>
        <div className="mb-3">
          <label className="form-label" style={{ color: "#556B2F" }}>
            <strong>Email</strong>
          </label>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            className="form-control bg-light text-success"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label className="form-label" style={{ color: "#556B2F" }}>
            <strong>Phone</strong>
          </label>
          <input
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            type="phone"
            className="form-control bg-light text-success"
            placeholder="Enter phone"
          />
        </div>
        <div className="mb-3">
          <label className="form-label" style={{ color: "#556B2F" }}>
            <strong>Address</strong>
          </label>
          <input
            value={address}
            onChange={(event) => setAddress(event.target.value)}
            type="text"
            className="form-control bg-light text-success"
            placeholder="Enter address"
          />
        </div>

        <button onClick={handleSubmit} className="mt-3 btn btn-success w-100">
          SAVE
        </button>

        <div className="mt-2">
          <Link to="/">
            <button className="btn btn-light text-black btn-sm">
              <i className="fa-solid fa-backward m-2" style={{ color: "#FF3B3F" }}></i>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

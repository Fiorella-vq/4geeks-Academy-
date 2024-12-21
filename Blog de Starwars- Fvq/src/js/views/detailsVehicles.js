import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export const DetailsVehicles = () => {
  const { uid } = useParams();
  const navigate = useNavigate();
  const [vehicle, setVehicle] = useState();

  useEffect(() => {
    fetch(`https://www.swapi.tech/api/vehicles/${uid}`)
      .then((res) => res.json())
      .then((data) => setVehicle(data.result.properties));
  }, [uid]);

  if (!vehicle) return null;

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-12">
          <div
            className="card mb-4"
            style={{
              backgroundColor: "#FFD1DC",
              boxShadow: "5px 5px 5px 5px #8A2BE2",
              width: "100%",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div className="w-50">
              <img
                src={`https://starwars-visualguide.com/assets/img/vehicles/${uid}.jpg`}
                className="card-img-top"
                alt={`Vehicle ${uid}`}
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                }}
              />
            </div>

            <div className="card-body w-50 d-flex flex-column">
              <h5
                className="card-title"
                style={{
                  fontFamily: "Star Wars",
                  color: "#FF1493",
                  textShadow: "1px 1px 0 #fff",
                }}
              >
                {vehicle.name}
              </h5>
              <div
                className="info"
                style={{ fontFamily: "Arial", color: "#FF1493" }}
              >
                <p className="card-text">
                  <strong>Model:</strong> {vehicle.model}
                </p>
                <p className="card-text">
                  <strong>Passengers:</strong> {vehicle.passengers}
                </p>
                <p className="card-text">
                  <strong>Manufacturer:</strong> {vehicle.manufacturer}
                </p>
                <p className="card-text">
                  <strong>Cost in Credits:</strong> {vehicle.cost_in_credits}
                </p>
                <p className="card-text">
                  <strong>Length:</strong> {vehicle.length}
                </p>
                <p className="card-text">
                  <strong>Create:</strong> {vehicle.created}
                </p>
                <p className="card-text">
                  <strong>Cargo Capacity:</strong> {vehicle.cargo_capacity}
                </p>
                <p className="card-text">
                  <strong>Consumables:</strong> {vehicle.consumables}
                </p>
                <p className="card-text">
                  <strong>Crew:</strong> {vehicle.crew}
                </p>
                <p className="card-text">
                  <strong>Max Atmospheric Speed:</strong>{" "}
                  {vehicle.max_atmosphering_speed}
                </p>
                <p className="card-text">
                  <strong>Vehicle Class:</strong> {vehicle.vehicle_class}
                </p>
              </div>
              <button
                className="btn d-flex justify-content-center mt-auto"
                onClick={() => navigate("/")}
                style={{
                  fontFamily: "Star Wars",
                  backgroundColor: "#9B30FF",
                  color: "white",
                  textAlign: "center",
                }}
              >
                HoME
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

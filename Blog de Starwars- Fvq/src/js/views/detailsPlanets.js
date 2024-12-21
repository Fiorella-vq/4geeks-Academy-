import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export const DetailsPlanets = () => {
  const { uid } = useParams();
  const navigate = useNavigate();
  const [planet, setPlanet] = useState(null);

  useEffect(() => {
    fetch(`https://www.swapi.tech/api/planets/${uid}`)
      .then((res) => res.json())
      .then((data) => setPlanet(data.result.properties))
      .catch((error) => console.error("Error fetching planet data:", error));
  }, [uid]);

  if (!planet) return null;

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
                src={`https://starwars-visualguide.com/assets/img/planets/${uid}.jpg`}
                className="card-img-top"
                alt={`planet ${planet.name}`}
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
                {planet.name}
              </h5>
              <div
                className="info"
                style={{ fontFamily: "Arial", color: "#FF1493" }}
              >
                <p className="card-text">
                  <strong>Climate:</strong> {planet.climate}
                </p>
                <p className="card-text">
                  <strong>Diameter:</strong> {planet.diameter}
                </p>
                <p className="card-text">
                  <strong>Gravity:</strong> {planet.gravity}
                </p>
                <p className="card-text">
                  <strong>Orbital Period:</strong> {planet.orbital_period}
                </p>
                <p className="card-text">
                  <strong>Population:</strong> {planet.population}
                </p>
                <p className="card-text">
                  <strong>Rotation Period:</strong> {planet.rotation_period}
                </p>
                <p className="card-text">
                  <strong>Surface Water:</strong> {planet.surface_water}
                </p>
                <p className="card-text">
                  <strong>Terrain:</strong> {planet.terrain}
                </p>
                <p className="card-text">
                  <strong>Created:</strong> {planet.created}
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

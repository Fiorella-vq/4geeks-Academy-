import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export const DetailsCharacters = () => {
  const { uid } = useParams();
  const navigate = useNavigate();
  const [characters, setCharacters] = useState();

  useEffect(() => {
    fetch(`https://www.swapi.tech/api/people/${uid}`)
      .then((res) => res.json())
      .then((data) => setCharacters(data.result.properties));
  }, [uid]);

  if (!characters) return null;
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
                src={`https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`}
                className="card-img-top"
                alt={`characters ${uid}`}
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
                {characters.name}
              </h5>
              <div
                className="info"
                style={{ fontFamily: "Arial", color: "#FF1493" }}
              >
                <p className="card-text">
                  <strong>Height:</strong> {characters.height}
                </p>
                <p className="card-text">
                  <strong>Mass:</strong> {characters.mass}
                </p>
                <p className="card-text">
                  <strong>Hair Color:</strong> {characters.hair_color}
                </p>
                <p className="card-text">
                  <strong>Skin Color:</strong> {characters.skin_color}
                </p>
                <p className="card-text">
                  <strong>Birth Year:</strong> {characters.birth_year}
                </p>
                <p className="card-text">
                  <strong>Gender:</strong> {characters.gender}
                </p>
                <p className="card-text">
                  <strong>Eye Color:</strong> {characters.eye_color}
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

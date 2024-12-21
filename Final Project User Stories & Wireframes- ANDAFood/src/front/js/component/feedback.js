
import React, { useState, useEffect } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";


export const Feedback = ({ initialRating = 0 }) => {

  const navigate = useNavigate();

  const { id } = useParams();
  const location = useLocation();
  const item = location.state;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const volver = () => {
    navigate(-1); // Navega a la página anterior
  };

  const [rating, setRating] = useState(initialRating);

  const handleClickStar = (newRating) => {
    setRating(newRating);
  };

  const starElements = [];
  for (let i = 1; i <= 5; i++) {
    const filled = i <= rating;
    starElements.push(
      <span key={i} onClick={() => handleClickStar(i)}>
        {filled ? (
          <i className="fas fa-star " style={{ color: "gold" }}></i>
        ) : (
          <i className="far fa-star" style={{ color: "gold" }}></i>
        )}
      </span>
    );
  }

  return (
    <div className="container d-flex mt-4 mb-3 justify-content-center">
      <div className="card " style={{ width: "19rem", border: "2px solid blue" }}>
        <img src={item?.img} alt={item?.name}
          className="card-img-top"
        />
        <div className="card-body border-primary">
          <h3 className="card-title text-primary">Descripcion</h3>
          <p>{item?.description || "No description available."}</p>

          <div className="d-flex justify-content-between">
            <p className="card-text">
              {starElements} { }
            </p>
            <button className="text-primary fs-6" style={{ padding: '10px', marginTop: '10px', cursor: 'pointer', backgroundColor: "transparent", border:"none" }}
              title="Volver al menú"
              onClick={volver} 
            >
              Volver al menú
            </button>
          </div>



        </div>
      </div>
    </div>
  );
};

import React from "react";

const Card = () => {
  return (
    <div className="col-sm-6 col-md-3 mb-4" style={{ width: "18rem" }}>
      <img src="https://via.placeholder.com/500x325" className="card-img-top" alt="placeholder" />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quas, neque molestiae a velit doloremque est, maxime illo vitae, aliquid distinctio rerum incidunt quos! Quisquam repellendus blanditiis doloribus tenetur officiis!
        </p>
        <a href="#" className="btn btn-primary">
          Find Out More!
        </a>
      </div>
    </div>
  );
};

export default Card;

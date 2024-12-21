import React, { useState } from "react";

const TrafficLights = () => {
  const [colorSelected, setColorSelected] = useState("red");
  const [colorList, setColorList] = useState(["red", "yellow", "green"]);
  const generateColor = () => {
    const hexColors = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 4; i++) {
      color += hexColors[Math.floor(Math.random() * hexColors.length)];
    }
    return color;
  };

  console.log(generateColor());

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <div className="bg-dark" style={{ width: "20px", height: "100px" }}></div>
      <div
        className="bg-dark rounded-4 d-flex justify-content-evenly flex-column align-items-center"
        style={{ width: "200px", height: "400px", padding: "20px" }}
      >
        {colorList.map((color, indexColor) => (
          <div
            key={indexColor}
            onClick={() => setColorSelected(color)}
            className={
              "rounded-circle " +
              (colorSelected === color ? "onLightYellow" : "")
            }
            style={{ width: "100px", height: "100px", backgroundColor: color }}
          ></div>
        ))}
      </div>
      <button
        type="button"
        className="btn btn-primary m-3"
        onClick={() => {
          setColorList([...colorList, generateColor()]);
        }}
      >
        Choose New Color
      </button>
    </div>
  );
};

export default TrafficLights;

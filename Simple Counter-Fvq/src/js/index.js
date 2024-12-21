// index.js
import React from "react";
import ReactDOM from "react-dom/client";
import "../styles/index.css"; 
import SecondsCounter from "./component/SecondsCounter.jsx"; 


// Inicializa el tiempo
let seconds = 0;
let intervalo;
let sentido = true; // true = adelante /false = atrás


const app = ReactDOM.createRoot(document.getElementById("app"));

//ACTUALIZAR EL CONTADOR
const renderSecondCounter = () => {
  if (sentido) {
    seconds++;
  } else {
    seconds--;
  }

  app.render(
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <div className="d-flex justify-content-center flex-wrap w-100 px-2">
        <SecondsCounter seconds={seconds} />
      </div>

      <div className="text-center mt-4 w-100 px-3">
        <input
          id="finDelMundo"
          className="form-control mb-3"
          onChange={(event) => {
            seconds = parseInt(event.target.value, 10);
          }}
          placeholder="Ingresar la cantidad de segundos para la cuenta regresiva"
          type="number"
        />
        <div className="d-flex justify-content-center flex-wrap w-100">
          <button
            onClick={() => {
              clearInterval(intervalo);
            }}
            type="button"
            className="btn m-2 rounded btn-danger w-25"
          >
            Pausar
          </button>
          <button
            onClick={() => {
              seconds = 0;
              document.querySelector("#finDelMundo").value = "";
            }}
            type="button"
            className="btn m-2 rounded btn-success w-25"
          >
            Reiniciar
          </button>
          <button
            onClick={() => {
              intervalo = setInterval(renderSecondCounter, 1000);
            }}
            type="button"
            className="btn m-2 rounded btn-warning w-25"
          >
            Resumir
          </button>
          <button
            onClick={() => {
              sentido = !sentido;
            }}
            type="button"
            className="btn m-2 rounded btn btn-info w-25"
          >
            {sentido ? "RETURN" : "NEXT"}
          </button>
        </div>
      </div>
    </div>
  );

  if (seconds <= 0 && !sentido) {
    alert("ALEEEEEEERT!");
    clearInterval(intervalo);
  }
};

// Inicia el intervalo de actualización
intervalo = setInterval(renderSecondCounter, 1000);

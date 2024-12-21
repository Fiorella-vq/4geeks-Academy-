// SimpleCounter.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";

// Componente que representa cada dígito
const Digitos = (props) => {
  return (
    <div className="d-flex">
      <div className="card pink-background mb-3">
        <div className="card-body">
          <h5 className="card-title white-text">{props.seconds}</h5>
        </div>
      </div>
    </div>
  );
};

// Componente principal que renderiza el contador
const SecondsCounter = (props) => {
  return (
    <div className="d-flex">
      <Digitos seconds={<FontAwesomeIcon icon={faClock} />} />
      <Digitos seconds={Math.floor(props.seconds / 100000) % 10} />
      <Digitos seconds={Math.floor(props.seconds / 10000) % 10} />
      <Digitos seconds={Math.floor(props.seconds / 1000) % 10} />
      <Digitos seconds={Math.floor(props.seconds / 100) % 10} />
      <Digitos seconds={Math.floor(props.seconds / 10) % 10} />
      <Digitos seconds={props.seconds % 10} />
    </div>
  );
};

export default SecondsCounter;

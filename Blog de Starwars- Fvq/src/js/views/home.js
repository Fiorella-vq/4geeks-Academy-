import React, { useState, useEffect } from "react";
import "../../styles/home.css";
import { CharactersCard } from "../component/charactersCard";
import { PlanetsCard } from "../component/planetsCard";
import { VehiclesCard } from "../component/vehicleCards";

export const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const res = await fetch("https://www.swapi.tech/api/people");
        const data = await res.json();

        const detailedCharacters = await Promise.all(
          data.results.map(async (item) => {
            const res = await fetch(item.url);
            const details = await res.json();
            return { ...details.result.properties, uid: item.uid };
          })
        );

        setCharacters(detailedCharacters);
      } catch (err) {
        console.error(err);
      }
    };
    fetchCharacters();
  }, []);

  useEffect(() => {
    const fetchPlanets = async () => {
      try {
        const res = await fetch("https://www.swapi.tech/api/planets");
        const data = await res.json();

        const detailedPlanets = await Promise.all(
          data.results.map(async (item) => {
            const res = await fetch(item.url);
            const details = await res.json();
            return { ...details.result.properties, uid: item.uid };
          })
        );

        setPlanets(detailedPlanets);
      } catch (err) {
        console.error(err);
      }
    };
    fetchPlanets();
  }, []);

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const res = await fetch("https://www.swapi.tech/api/vehicles");
        const data = await res.json();

        const detailedVehicles = await Promise.all(
          data.results.map(async (item) => {
            const res = await fetch(item.url);
            const details = await res.json();
            return {
              ...details.result.properties,
              uid: item.uid,
              model: details.result.properties.model,
              passengers: details.result.properties.passengers,
            };
          })
        );

        setVehicles(detailedVehicles);
      } catch (err) {
        console.error(err);
      }
    };
    fetchVehicles();
  }, []);

  return (
    <div className="text-center mb-3 " style={{ color: "#FF1493" }}>
      <h1
        className="title"
        style={{ "font-family": "Star Wars", textShadow: "1px 1px 0 #fff" }}
      >
        CHARACTERS <i class="fa-solid fa-user-astronaut"></i>
      </h1>
      <div className="d-flex flex-nowrap overflow-auto px-3">
        {characters.map((item) => (
          <div className="mx-2" key={item.uid}>
            <CharactersCard
              name={item.name}
              uid={item.uid}
              hair_color={item.hair_color}
              eye_color={item.eye_color}
              gender={item.gender}
            />
          </div>
        ))}
      </div>
      <h1
        className="title mt-2"
        style={{ fontFamily: "Star Wars", textShadow: "1px 1px 0 #fff" }}
      >
        PLANETS <i className="fa-solid fa-globe"></i>
      </h1>
      <div className="d-flex flex-nowrap overflow-auto px-3">
        {planets.map((item) => (
          <div className="mx-1" key={item.uid}>
            <PlanetsCard
              name={item.name}
              uid={item.uid}
              climate={item.climate}
              diameter={item.diameter}
            />
          </div>
        ))}
      </div>

      <h1
        className="title mt-2"
        style={{ fontFamily: "Star Wars", textShadow: "1px 1px 0 #fff" }}
      >
        VEHICLES <i className="fa-solid fa-shuttle-space"></i>
      </h1>
      <div className="d-flex flex-nowrap overflow-auto px-3 m-0">
        {vehicles.map((item) => (
          <div className="mx-2" key={item.uid}>
            <VehiclesCard
              name={item.name}
              uid={item.uid}
              model={item.model}
              passengers={item.passengers}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

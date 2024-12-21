import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { useContext, useState } from "react";
import { Context } from "../store/appContext.js";
import { ContactCard } from "../component/card.js";

export const Home = () => {
  // importando actions, de esta forma tenemos acceso al flux
  const { actions, store } = useContext(Context);

  return (
    <div className="container d-flex flex-column justify-content-center mt-5">
      {store.contacts &&
        store.contacts.map((item, index) => {
          return (
            <ContactCard
              key={index}
              name={item.name}
              email={item.email}
              phone={item.phone}
              address={item.address}
              id={item.id}
            />
          );
        })}
    </div>
  );
};

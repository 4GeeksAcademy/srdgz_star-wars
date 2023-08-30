import React, { useState, useEffect, useContext } from "react";
import { CardCharacter } from "../component/cardCharacter";
import { CardPlanet } from "../component/cardPlanet";
import { CardStarship } from "../component/cardStarship";
import { Context } from "../store/appContext.js";
import "../../styles/home.css";

export default function Home() {
  const { store, actions } = useContext(Context);
  const [state, setState] = useState({});
  useEffect(() => {
    actions.getCharacters();
    actions.getPlanets();
    actions.getStarships();
    actions.getFavorites();
  }, []);

  return (
    <div className="container">
      <div className="m-5 d-grid justify-content-center">
        <h2 className="text-danger m-3">Characters</h2>
        <div
          id="chacarter-container"
          className="d-flex overflow-auto col-6 w-100"
        >
          {store.character.map((item, index) => (
            <CardCharacter key={index} name={item.name} id={item.uid} />
          ))}
        </div>
      </div>
      <div className="m-5 d-grid justify-content-center">
        <h2 className="text-danger m-3">Planets</h2>
        <div id="planet-container" className="d-flex overflow-auto col-6 w-100">
          {store.planet.map((item, index) => (
            <CardPlanet
              key={index}
              namePlanet={item.name}
              idPlanet={item.uid}
            />
          ))}
        </div>
      </div>
      <div className="m-5 d-grid justify-content-center">
        <h2 className="text-danger m-3 ">Starships</h2>
        <div
          id="starship-container"
          className="d-flex overflow-auto col-6 w-100"
        >
          {store.starship.map((item, index) => (
            <CardStarship
              key={index}
              nameStarship={item.name}
              idStarship={item.uid}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

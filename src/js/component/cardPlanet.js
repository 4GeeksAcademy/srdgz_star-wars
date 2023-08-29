import React, { useContext, useState, useEffect } from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const CardPlanet = (props) => {
  const { store, actions } = useContext(Context);
  const [state, setState] = useState({});
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    setIsFavorite(store.favoritesList.includes(props.namePlanet));
  }, [store.favoritesList]);

  function sendFavorite(e) {
    e.preventDefault();
    actions.addFavorite(props.namePlanet);
  }

  function DetailPlanet(e) {
    actions.DetailPlanet(props.idPlanet);
  }

  return (
    <div className="card-container my-2">
      <div className="card m-3" style={{ width: 300 }}>
        <img
          src="https://starwars-visualguide.com/assets/img/categories/planets.jpg"
          className="card-img-top"
          style={{ width: 300, height: 200 }}
        />
        <div className="card-body">
          <h5 className="card-title"> {props.namePlanet} </h5>
          <div className="d-flex justify-content-between">
            <Link
              to={"/DetailPlanet/" + props.namePlanet + "/" + props.idPlanet}
            >
              <button
                href="#"
                className="btn btn-outline-primary"
                onClick={DetailPlanet}
              >
                Learn more!
              </button>
            </Link>
            <a
              onClick={sendFavorite}
              href="#"
              className="btn btn-outline-warning"
            >
              {isFavorite ? (
                <i className="fa-solid fa-heart"></i>
              ) : (
                <i className="fa-regular fa-heart"></i>
              )}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

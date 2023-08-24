import React, { useContext, useState, useEffect } from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const CardPlanet = (props) => {
  const { store, actions } = useContext(Context);
  const [state, setState] = useState({});

  function sendFavorite(e) {
    e.preventDefault();
    actions.addFavorite(props.namePlanet);
  }
  function singlePlanet(e) {
    actions.singlePlanet(props.idPlanet);
  }

  return (
    <div className="">
      <div className="card" style={{ width: 280 }}>
        <img
          src="https://reviewsyouread.files.wordpress.com/2021/03/10-more-star-wars-planets-as-countries.png"
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title"> {props.namePlanet} </h5>
          <p className="card-text m-0 p-0">Population:</p>
          <p className="card-text m-0 p-0">Terrain:</p>
          <div className="d-flex justify-content-between">
            <Link to={"/Planets/" + props.namePlanet + "/" + props.idPlanet}>
              <button
                href="#"
                className="btn btn-outline-primary"
                onClick={singlePlanet}
              >
                Learn more!
              </button>
            </Link>
            <a
              onClick={sendFavorite}
              href="#"
              className="btn btn-outline-warning"
            >
              <i className="fa fa-heart" />
            </a>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

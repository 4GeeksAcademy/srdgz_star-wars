import React, { useContext, useState } from "react";
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
    <div className="card-container my-2">
      <div className="card m-3" style={{ width: 300 }}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqh7hedjKnYPNr4V4fzhWfbAXj8GpVW3VP_w&usqp=CAU"
          className="card-img-top"
          style={{ width: 300, height: 200 }}
        />
        <div className="card-body">
          <h5 className="card-title"> {props.namePlanet} </h5>
          <p className="card-text m-0 p-0">Population:</p>
          <p className="card-text m-0 p-0">Terrain:</p>
          <div className="d-flex justify-content-between">
            <Link
              to={"/SinglePlanet/" + props.namePlanet + "/" + props.idPlanet}
            >
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
              <i className="fa-regular fa-heart" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

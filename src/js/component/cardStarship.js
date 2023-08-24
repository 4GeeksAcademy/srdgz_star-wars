import React, { useContext, useState, useEffect } from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const CardStarship = (props) => {
  const { store, actions } = useContext(Context);
  const [state, setState] = useState({});

  function sendFavorite(e) {
    e.preventDefault();
    actions.addFavorite(props.nameStarship);
  }

  function singleStarship(e) {
    actions.singleStarship(props.idStarship);
  }

  return (
    <div className="">
      <div className="card" style={{ width: 280 }}>
        <img
          src="https://oyster.ignimgs.com/mediawiki/apis.ign.com/star-wars-episode-7/7/7f/Vehicles.png"
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title"> {props.nameStarship} </h5>
          <p className="card-text m-0 p-0">Crew:</p>
          <p className="card-text m-0 p-0">Model:</p>
          <div className="d-flex justify-content-between">
            <Link
              to={"/Starships/" + props.nameStarship + "/" + props.idStarship}
            >
              <button
                href="#"
                className="btn btn-outline-primary"
                onClick={singleStarship}
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

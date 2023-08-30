import React, { useContext, useState, useEffect } from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const CardStarship = (props) => {
  const { store, actions } = useContext(Context);
  const [state, setState] = useState({});
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    setIsFavorite(store.favoritesList.includes(props.nameStarship));
  }, [store.favoritesList]);

  function sendFavorite(e) {
    e.preventDefault();
    if (isFavorite) {
      actions.deleteFavorite(props.nameStarship);
    } else {
      actions.addFavorite(props.nameStarship);
    }
  }

  function DetailStarship(e) {
    actions.DetailStarship(props.idStarship);
  }

  return (
    <div className="card-container my-2">
      <div className="card m-3" style={{ width: 300 }}>
        <img
          src="https://starwars-visualguide.com/assets/img/categories/starships.jpg"
          className="card-img-top"
          style={{ width: 300, height: 200 }}
        />
        <div className="card-body">
          <h5 className="card-title"> {props.nameStarship} </h5>
          <div className="d-flex justify-content-between">
            <Link
              to={
                "/DetailStarship/" + props.nameStarship + "/" + props.idStarship
              }
            >
              <button
                href="#"
                className="btn btn-outline-primary"
                onClick={DetailStarship}
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

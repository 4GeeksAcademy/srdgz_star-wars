import React, { useContext, useState } from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const CardCharacter = (props) => {
  const { store, actions } = useContext(Context);
  const [state, setState] = useState({});
  const [isFavorite, setIsFavorite] = useState(false);

  function sendFavorite(e) {
    e.preventDefault();
    actions.addFavorite(props.name);
    if (isFavorite == true) {
      setIsFavorite(false);
    } else {
      setIsFavorite(true);
    }
  }

  function DetailCharacter(e) {
    actions.DetailCharacter(props.id);
  }

  return (
    <div className="card-container my-2">
      <div className="card m-3" style={{ width: 300 }}>
        <img
          src="https://starwars-visualguide.com/assets/img/categories/character.jpg"
          className="card-img-top"
          style={{ width: 300, height: 200 }}
        />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <div className="d-flex justify-content-between">
            <Link to={"/DetailCharacter/" + props.name + "/" + props.id}>
              <button
                href="#"
                onClick={DetailCharacter}
                className="btn btn-outline-primary"
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

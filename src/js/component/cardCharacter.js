import React, { useContext, useState } from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const CardCharacter = (props) => {
  const { store, actions } = useContext(Context);
  const [state, setState] = useState({});

  function sendFavorite(e) {
    e.preventDefault();
    actions.addFavorite(props.name);
  }

  function singleCharacter(e) {
    actions.singleCharacter(props.id);
  }

  return (
    <div className="card-container my-2">
      <div className="card m-3" style={{ width: 300 }}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl8EsOSt7sJj7GSmaBp5PFYpH9KTfz2ZPbKw&usqp=CAU"
          className="card-img-top"
          style={{ width: 300, height: 200 }}
        />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text m-0 p-0">Gender:</p>
          <p className="card-text m-0 p-0">Hair color:</p>
          <p className="card-text m-0 p-0">Eye-color:</p>
          <div className="d-flex justify-content-between">
            <Link to={"/SingleCharacter/" + props.name + "/" + props.id}>
              <button
                href="#"
                onClick={singleCharacter}
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
              <i className="fa-regular fa-heart" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

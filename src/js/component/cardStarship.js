import React, { useContext, useState } from "react";
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

  function DetailStarship(e) {
    actions.DetailStarship(props.idStarship);
  }

  return (
    <div className="card-container my-2">
      <div className="card m-3" style={{ width: 300 }}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVqlUJCLDmXfMST49-26E2olfwMGL9KjFa-A&usqp=CAU"
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
              <i className="fa-regular fa-heart" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

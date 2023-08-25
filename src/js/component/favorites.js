import React, { useContext, useState } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext.js";

export const Favorites = (props) => {
  const { store, actions } = useContext(Context);
  const [state, setState] = useState({});

  function deleteFavorite(e) {
    actions.deleteFavorite(props.name);
  }

  return (
    <div className="d-flex justify-content-between">
      {props.name}
      <button onClick={deleteFavorite} className="btn-close"></button>
    </div>
  );
};

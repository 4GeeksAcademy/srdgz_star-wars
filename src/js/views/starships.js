import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { CardCharacter } from "../component/cardCharacter";
import { CardPlanet } from "../component/cardPlanet";
import { CardStarship } from "../component/cardStarship";
import { Favorites } from "../component/favorites";

export const singleStarship = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  useEffect(() => {
    actions.singleStarship(params.idStarship);
  }, []);

  return (
    <div className="w-100 h-100">
      <div className="d-flex w-100 m-3 p-3 border-bottom border-danger">
        <img
          src="https://i.blogs.es/7de56b/650_1200/1366_2000.jpeg"
          className=""
          style={{ width: 450 }}
        />

        <div className="w-100 text-center">
          <h1 className="">{params.name}</h1>
          <p className="me-2">
            {" "}
            Dos Jedis, Qui-Gon Jinn y su Padawan Obi-Wan Kenobi deben proteger a
            la reina Amidala. En medio de la misión conocen a un niño llamado
            Anakin Skywalker quien forma parte de una antigua profecía Jedi pues
            es el elegido que traerá equilibrio a la galaxia. Los enemigos de
            esta saga son los Sith. Un aprendiz de esta raza malvado, Darth Maul
            y su maestro Darth Sidious (quien se hace pasar por un senador de la
            República Galáctica llamado Palpatine). Al final Darth Maul asesina
            a Qui-Gon Jinn. Obi-Wan asesina a Darth Maul y Anakin se convierte
            en Padawan de Obi-Wan. Mientras, la Guerra entre la República y los
            Separatistas continúa.{" "}
          </p>
        </div>
      </div>
      <div>
        <tr className="d-flex col-12 justify-content-between">
          <th className="text-danger col-2 m-2 ms-2 fw-bold fs-5 text-center">
            Name
          </th>
          <th className="text-danger col-2 m-2 fw-bold fs-5 text-center">
            Model
          </th>
          <th className="text-danger col-2 m-2 fw-bold fs-5 text-center">
            Manufacturer
          </th>
          <th className="text-danger col-2 m-2 fw-bold fs-5 text-center">
            Crew
          </th>
          <th className="text-danger col-2 m-2 fw-bold fs-5 text-center">
            Passengers
          </th>
          <th className="text-danger col-2 m-2 fw-bold fs-5 me-2 text-center">
            Starship Class
          </th>
        </tr>
        <tr className="col-12 d-flex justify-content-between">
          <td className="col-2 text-danger fs-5 m-2 ms-2 text-center">
            {store.singleStarship.name}
          </td>
          <td className="col-2 text-danger fs-5 m-2 text-center">
            {store.singleStarship.model}
          </td>
          <td className="col-2 text-danger fs-5 m-2 text-center">
            {store.singleStarship.manufacturer}
          </td>
          <td className="col-2 text-danger fs-5 m-2 text-center">
            {store.singleStarship.crew}
          </td>
          <td className="col-2 text-danger fs-5 m-2 text-center">
            {store.singleStarship.passengers}
          </td>
          <td className="col-2 text-danger fs-5 m-2 me-2 text-center">
            {store.singleStarship.starship_class}
          </td>
        </tr>
      </div>

      <div className="d-flex w-100 m-3 p-3">
        <Link to="/">
          <button
            className="btn btn-primary btn-lg mt-5"
            href="#"
            role="button"
          >
            Back home
          </button>
        </Link>
      </div>
    </div>
  );
};

singleStarship.propTypes = {
  match: PropTypes.object,
};

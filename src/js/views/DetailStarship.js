import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const DetailStarship = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  useEffect(() => {
    actions.DetailStarship(params.idStarship);
  }, []);

  return (
    <div className="w-100 h-100">
      <div className="d-flex w-80 m-5 p-5 border-bottom border-danger">
        <img
          src="https://lumiere-a.akamaihd.net/v1/images/starwars_e58d682b.png?region=0,14,768,432"
          className=""
          style={{ width: 450 }}
        />
        <div className="w-100 text-start px-3">
          <h1 className="text-center">{params.name}</h1>
          <p className="me-2">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            to repeat predefined chunks as necessary, making this the first true
            generator on the Internet. It uses a dictionary of over 200 Latin
            words, combined with a handful of model sentence structures, to
            generate Lorem Ipsum which looks reasonable. The generated Lorem
            Ipsum is therefore always free from repetition, injected humour, or
            non-characteristic words etc.
          </p>
        </div>
      </div>
      <div>
        <tr className="d-flex w-100 justify-content-center">
          <th className="text-danger col-1 mx-3 fw-bold fs-5 text-center">
            Name
          </th>
          <th className="text-danger col-1 mx-3 fw-bold fs-5 text-center">
            Model
          </th>
          <th className="text-danger col-1 mx-3 fw-bold fs-5 text-center">
            Manufacturer
          </th>
          <th className="text-danger col-1 mx-3 fw-bold fs-5 text-center">
            Crew
          </th>
          <th className="text-danger col-1 mx-3 fw-bold fs-5 text-center">
            Passengers
          </th>
          <th className="text-danger col-1 mx-3 fw-bold fs-5 text-center">
            Starship Class
          </th>
        </tr>
        <tr className="d-flex w-100 justify-content-center">
          <td className="col-1 text-danger mx-3 fs-5 text-center">
            {store.DetailStarship.name}
          </td>
          <td className="col-1 text-danger mx-3 fs-5 text-center">
            {store.DetailStarship.model}
          </td>
          <td className="col-1 text-danger mx-3 fs-5 text-center">
            {store.DetailStarship.manufacturer}
          </td>
          <td className="col-1 text-danger mx-3 fs-5 text-center">
            {store.DetailStarship.crew}
          </td>
          <td className="col-1 text-danger mx-3 fs-5 text-center">
            {store.DetailStarship.passengers}
          </td>
          <td className="col-1 text-danger mx-3 fs-5 text-center">
            {store.DetailStarship.starship_class}
          </td>
        </tr>
      </div>

      <div className="d-flex m-5">
        <Link to="/">
          <button
            className="btn btn-primary btn-lg mt-5"
            href="#"
            role="button"
          >
            Go back
          </button>
        </Link>
      </div>
    </div>
  );
};

DetailStarship.propTypes = {
  match: PropTypes.object,
};

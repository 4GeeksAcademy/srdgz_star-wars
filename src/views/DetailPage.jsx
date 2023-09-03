import React from "react";
import { useParams, Link } from "react-router-dom";

import useAppContext from "../contexts/AppContext.jsx";

import PeopleAllDetails from "../components/Card/components/PeopleAllDetails.jsx";

const DetailPage = ({ resourceType, gender, birth_year }) => {
  const params = useParams();
  const { store } = useAppContext();
  const { people, planets, starships } = store;
  const allResources = [...people, ...planets, ...starships];
  const targetResource = allResources.find((items) => items.uid == params.uid);
  return (
    <div className="w-100 h-100">
      <div className="d-flex w-80 m-5 p-5 border-bottom border-danger">
        <img
          src="https://lumiere-a.akamaihd.net/v1/images/starwars_e58d682b.png?region=0,14,768,432"
          className="responsive-image "
          style={{ width: 450 }}
        />

        <div className="w-100 text-start px-3">
          <h1 className="text-center">{targetResource.name}</h1>
          <p className="me-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
      <Link to="/">
        <button type="button" className="btn btn-primary w-80 p-2 ms-5 my-5">
          Go back!
        </button>
      </Link>
    </div>
  );
};

export default DetailPage;

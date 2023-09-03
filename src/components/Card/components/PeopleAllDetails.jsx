import React from "react";

const PeopleAllDetails = ({
  gender,
  birth_year,
  eye_color,
  hair_color,
  skin_color,
  mass,
  height,
}) => {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Gender</th>
            <th scope="col">Birth Year</th>
            <th scope="col">Eye Color</th>
            <th scope="col">Hair Color</th>
            <th scope="col">Skin Color</th>
            <th scope="col">Mass</th>
            <th scope="col">Height</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">{gender}</th>
            <td>{birth_year}</td>
            <td>{eye_color}</td>
            <td>{hair_color}</td>
            <td>{skin_color}</td>
            <td>{mass}</td>
            <td>{height}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default PeopleAllDetails;

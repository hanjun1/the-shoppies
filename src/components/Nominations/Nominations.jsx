import React from "react";
import "./Nominations.css";

function Nominations(props) {
  return (
    <div className="Nominations">
      <h1>Nominations</h1>
      <div className="nomination-container">
        {props.nominated.map((movie) => (
          <li>
            {movie.Title} ({movie.Year})
          </li>
        ))}
      </div>
    </div>
  );
}

export default Nominations;

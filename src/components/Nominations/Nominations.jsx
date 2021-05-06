import React from "react";
import "./Nominations.css";

function Nominations(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    props.setNominated(
      props.nominated.filter((movie) => movie.imdbID !== e.target.movie.value)
    );
  };

  return (
    <div className="Nominations">
      <h1>Nominations</h1>
      <div className="nomination-container">
        <ul>
          {props.nominated.map((movie) => (
            <li>
              <form onSubmit={handleSubmit}>
                <input type="hidden" value={movie.imdbID} name="movie" />
                {movie.Title} ({movie.Year})<button>Remove</button>
              </form>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Nominations;

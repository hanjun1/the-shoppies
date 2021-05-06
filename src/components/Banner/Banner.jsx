import React from "react";
import "./Banner.css";

function Banner(props) {
  return (
    <div className="Banner">
      <p>
        You have reached your limit of 5 nominations! Remove nominations to
        nominate other movies!
      </p>
    </div>
  );
}

export default Banner;

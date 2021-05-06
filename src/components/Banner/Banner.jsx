import React from "react";
import "./Banner.css";

function Banner(props) {
  return (
    <div className="Banner">
      {props.nominated.length >= 5 && (
        <p>
          You have reached your limit of {props.nominated.length} nominations!
          Remove nominations to nominate other movies!
        </p>
      )}
    </div>
  );
}

export default Banner;

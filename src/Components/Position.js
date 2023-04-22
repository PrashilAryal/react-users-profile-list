import React from "react";
import "../Assets/css/Position.css";

function Position({ designation }) {
  return (
    <div className="position__container">
      <h1 className="position__container__designation">
        {designation ? designation : "Null"}
      </h1>
    </div>
  );
}

export default Position;

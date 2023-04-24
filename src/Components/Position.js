import React from "react";
import "../Assets/css/Position.css";

function Position({ designation }) {
  return (
    <td className="user-position">
      <div className="position__container">
        <h1 className="position__container__designation">
          {designation ? designation : "Null"}
        </h1>
      </div>
    </td>
  );
}

export default Position;

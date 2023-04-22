import React from "react";
import "../Assets/css/Username.css";

function Name({ full_name }) {
  return (
    <div className="username">
      <div className="username__first-letter">
        <p>{full_name?.slice(0, 1) || null}</p>
      </div>
      <div className="username__full-name">
        <p>{full_name ? full_name : "N/A"}</p>
      </div>
    </div>
  );
}

export default Name;

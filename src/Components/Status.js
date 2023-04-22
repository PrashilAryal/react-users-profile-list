import React from "react";
import "../Assets/css/Status.css";

function Status({ status }) {
  return (
    <div className="status">
      <p className={status ? status : "unknown__status"}>{status}</p>
    </div>
  );
}
export default Status;

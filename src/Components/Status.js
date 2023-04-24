import React from "react";
import "../Assets/css/Status.css";

function Status({ status }) {
  return (
    <td>
      <div className="status">
        <button className={status ? status : "unknown__status"}>
          {status}
        </button>
      </div>
    </td>
  );
}
export default Status;

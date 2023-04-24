import React from "react";
import "../Assets/css/Action.css";

function Action({ action }) {
  const actionClass = action;
  let actionData;
  if (action === "invited") {
    actionData = "Remove";
  } else if (action === "not_invited") {
    actionData = "Invite";
  } else {
    actionData = "Unknown";
  }
  return (
    <td>
      <button
        disabled={action ? false : true}
        onClick={() => {}}
        className={
          actionClass ? `${actionClass} button` : "unknown__action button"
        }
      >
        {actionData}
      </button>
    </td>
  );
}
export default Action;

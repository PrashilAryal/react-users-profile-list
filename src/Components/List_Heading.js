import React from "react";
import "../Assets/css/List_Heading.css";

function List_Heading() {
  return (
    <div className="list__heading">
      <p className="name">Name</p>
      <p className="position">Position</p>
      <p className="status">Status</p>
      <p className="progress">Progress</p>
      <p className="action">Action</p>
    </div>
  );
}

export default List_Heading;

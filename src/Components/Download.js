import React from "react";
import "../Assets/css/Download.css";

function Download({ download_total, download_complete, download_size }) {
  let downloadPercentage = (x, y) => {
    return (x * 100) / y;
  };
  let value = downloadPercentage(
    parseFloat(download_complete),
    parseFloat(download_total)
  );
  return (
    <div className="download__status">
      <div className="download__status__progress">
        <div
          className="progress__value"
          style={{ width: value ? value + "%" : "0%" }}
        ></div>
      </div>
      <p className="download__data">
        {download_complete ? download_complete : 0}{" "}
        {download_size ? download_size : "Size"} of{" "}
        {download_total ? download_total : 0}{" "}
        {download_size ? download_size : "Size"}
      </p>
    </div>
  );
}

export default Download;

import React from "react";
import "../../styles/components/overlay/overlay.css";
import SpinnerLoader from "./SpinnerLoader";

function overlay() {
  return (
    <div className="overlay">
      <div className="spinner-wrapper">
        <SpinnerLoader />
      </div>
    </div>
  );
}

export default overlay;

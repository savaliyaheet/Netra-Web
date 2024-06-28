import React from "react";

function SecondaryButton({ type, children, overRideClass }) {
  return (
    <>
      <button
        type={type}
        className={`btn btn-secondary w-100 mb-3 ${overRideClass}`}
      >
        {children}
      </button>
    </>
  );
}

export default SecondaryButton;

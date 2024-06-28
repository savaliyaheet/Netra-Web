import React from "react";
import { Link } from "react-router-dom";

function Error404() {
  return (
    <div>
      <h1>Error 404.</h1>
      <Link to="/">Return to Home</Link>
    </div>
  );
}

export default Error404;

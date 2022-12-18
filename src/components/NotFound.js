import React from "react";

const NotFound = ({ needFullHeight }) => {
  return (
    <section className={`not-found wrapper ${needFullHeight && "min-h-100vh"}`}>
      <h2 className="section-title">not found</h2>
    </section>
  );
};

export default NotFound;

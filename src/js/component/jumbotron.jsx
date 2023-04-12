import React from "react";

const Jumbotron = () => {
  return (
    <div className="px-5 pt-4">
      <div
        className="jumbotron px-3 rounded"
        style={{ backgroundColor: "#dee2e6" }}
      >
        <div className="p-4">
        <h1 className="display-1">A Warm Welcome!</h1>
        <p className="lead">
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <hr className="my-4" />
        <p>
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>
        <p className="lead">
          <a className="btn btn-primary btn-lg" href="#" role="button">
            Learn more
          </a>
        </p>
      </div>
    </div>
    </div>
  );
};

export default Jumbotron;

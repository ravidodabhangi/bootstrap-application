import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "../css/style.css";
import { Link } from "react-router-dom";
const Service = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Futurework
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About us
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/service"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/service">
                      Action
                    </Link>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/gallery">
                  Gallery
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container my-5">
        <div className="text-center my-4">
          <p className="display-5 text-capitalize">Services</p>
          <hr className="w-25 text-secondary mx-auto" />
        </div>
        <div className="row row-cols-lg-2 row-cols-md-2 my-3">
          <div className="col-11 col-lg-6 col-md-6 mx-auto">
            <div className="card mb-3" style={{ maxWidth: "600px" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src="https://cdn.pixabay.com/photo/2018/01/12/14/24/night-3078326__340.jpg"
                    className="img-fluid rounded-start w-100 h-100"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p className="card-text">
                      <small className="text-muted">
                        Last updated 3 mins ago
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-11 col-lg-6 col-md-6 mx-auto">
            <div className="card mb-3" style={{ maxWidth: "600px" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src="https://cdn.pixabay.com/photo/2018/01/12/14/24/night-3078326__340.jpg"
                    className="img-fluid rounded-start w-100 h-100"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p className="card-text">
                      <small className="text-muted">
                        Last updated 3 mins ago
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-11 col-lg-6 col-md-6 mx-auto">
            <div className="card mb-3" style={{ maxWidth: "600px" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src="https://cdn.pixabay.com/photo/2018/01/12/14/24/night-3078326__340.jpg"
                    className="img-fluid rounded-start w-100 h-100"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p className="card-text">
                      <small className="text-muted">
                        Last updated 3 mins ago
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-11 col-lg-6 col-md-6 mx-auto">
            <div className="card mb-3" style={{ maxWidth: "600px" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src="https://cdn.pixabay.com/photo/2018/01/12/14/24/night-3078326__340.jpg"
                    className="img-fluid rounded-start w-100 h-100"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p className="card-text">
                      <small className="text-muted">
                        Last updated 3 mins ago
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container text-center my-4">
          <button className="btn btn-outline-success">Check More</button>
        </div>
      </div>
    </div>
  );
};

export default Service;

import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "../css/style.css";
import { Link } from "react-router-dom";
const About = () => {
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
      <header>
        <div className="container my-3">
          <div className="text-center my-4">
            <p className="display-5 text-capitalize">About</p>
            <hr className="w-25 text-secondary mx-auto" />
          </div>
          <div className="row">
            <div className="col-11 col-md-6 col-lg-6 mx-auto">
              <img
                className="img-fluid aboutImage rounded-1"
                src="https://cdn.pixabay.com/photo/2017/09/11/14/11/fisherman-2739115__340.jpg"
                alt=""
              />
            </div>
            <div className="col-11 col-md-6 col-lg-6 mx-auto">
              <div className="d-flex justify-content-center align-items-start flex-column">
                <p className="display-6 mt-3 mt-md-0 ">My Journey</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Exercitationem a, recusandae explicabo perferendis consequatur
                  molestias quasi sapiente iure accusantium sequi nihil? Vel
                  itaque, beatae mollitia eveniet ex nemo deserunt libero?Lorem
                  ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
                <button
                  className="btn btn-outline-success"
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                  title="About us"
                >
                  Check More
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default About;

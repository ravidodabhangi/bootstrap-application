import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";
import "../css/style.css";
const Gallery = () => {
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
      <div className="container my-3">
        <div className="text-center my-4">
          <p className="display-5 text-capitalize">Gallery</p>
          <hr className="w-25 text-secondary mx-auto" />
        </div>
        <div className="row my-4 gy-0 gx-3">
          <div className="col-11 col-lg-4 col-md-4 mx-auto">
            <figure>
              <img
                className="img-fluid"
                src="https://cdn.pixabay.com/photo/2014/11/21/03/24/mountains-540115__340.jpg"
                alt=""
              />
            </figure>
          </div>
          <div className="col-11 col-lg-4 col-md-4 mx-auto">
            <figure>
              <img
                className="img-fluid"
                src="https://cdn.pixabay.com/photo/2014/11/21/03/24/mountains-540115__340.jpg"
                alt=""
              />
            </figure>
          </div>
          <div className="col-11 col-lg-4 col-md-4 mx-auto">
            <figure>
              <img
                className="img-fluid"
                src="https://cdn.pixabay.com/photo/2014/11/21/03/24/mountains-540115__340.jpg"
                alt=""
              />
            </figure>
          </div>
          <div className="col-11 col-lg-4 col-md-4 mx-auto">
            <figure>
              <img
                className="img-fluid"
                src="https://cdn.pixabay.com/photo/2014/11/21/03/24/mountains-540115__340.jpg"
                alt=""
              />
            </figure>
          </div>
          <div className="col-11 col-lg-4 col-md-4 mx-auto">
            <figure>
              <img
                className="img-fluid"
                src="https://cdn.pixabay.com/photo/2014/11/21/03/24/mountains-540115__340.jpg"
                alt=""
              />
            </figure>
          </div>
          <div className="col-11 col-lg-4 col-md-4 mx-auto">
            <figure>
              <img
                className="img-fluid"
                src="https://cdn.pixabay.com/photo/2014/11/21/03/24/mountains-540115__340.jpg"
                alt=""
              />
            </figure>
          </div>
          <div className="col-11 col-lg-4 col-md-4 mx-auto">
            <figure>
              <img
                className="img-fluid"
                src="https://cdn.pixabay.com/photo/2014/11/21/03/24/mountains-540115__340.jpg"
                alt=""
              />
            </figure>
          </div>
          <div className="col-11 col-lg-4 col-md-4 mx-auto">
            <figure>
              <img
                className="img-fluid"
                src="https://cdn.pixabay.com/photo/2014/11/21/03/24/mountains-540115__340.jpg"
                alt=""
              />
            </figure>
          </div>
          <div className="col-11 col-lg-4 col-md-4 mx-auto">
            <figure>
              <img
                className="img-fluid"
                src="https://cdn.pixabay.com/photo/2014/11/21/03/24/mountains-540115__340.jpg"
                alt=""
              />
            </figure>
          </div>
        </div>
      </div>
      <div className="container bg-light py-5">
        <div className="row">
          <div className="col-12">
            <div className="d-flex justify-content-center align-items-center flex-column">
              <h3 className="text-capitalize">Check out my videos</h3>
              <p className="my-4 text-center">
                He Who is Not Courageous Enough to Take Risks Will Accomplish
                Nothing in Life
              </p>
              <button
                className="btn btn-outline-secondary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-send-check-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 1.59 2.498C8 14 8 13 8 12.5a4.5 4.5 0 0 1 5.026-4.47L15.964.686Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
                    <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-1.993-1.679a.5.5 0 0 0-.686.172l-1.17 1.95-.547-.547a.5.5 0 0 0-.708.708l.774.773a.75.75 0 0 0 1.174-.144l1.335-2.226a.5.5 0 0 0-.172-.686Z" />
                  </svg>
                </span>
                &nbsp; check more
              </button>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-fullscreen-sm-down">
            <div className="modal-content">
              <div className="modal-header">
                <h5
                  className="modal-title text-capitalize text-success"
                  id="exampleModalLabel"
                >
                  Welcome to Futurework community
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                Archaeological studies of social communities use the term
                "community" in two ways, paralleling usage in other areas. The
                first is an informal definition of community as a place where
                people used to live. In this sense it is synonymous with the
                concept of an ancient settlement - whether a hamlet, village,
                town, or city. The second meaning resembles the usage of the
                term in other social sciences: a community is a group of people
                living near one another who interact socially. Social
                interaction on a small scale can be difficult to identify with
                archaeological data. Most reconstructions of social communities
                by archaeologists rely on the principle that social interaction
                in the past was conditioned by physical distance. Therefore, a
                small village settlement likely constituted a social community
                and spatial subdivisions of cities and other large settlements
                may have formed communities. Archaeologists typically use
                similarities in material culture—from house types to styles of
                pottery—to reconstruct communities in the past. This
                classification method relies on the assumption that people or
                households will share more similarities in the types and styles
                of their material goods with other members of a social community
                than they will with outsiders. The process of learning to adopt
                the behavior patterns of the community is called socialization.
                The most fertile time of socialization is usually the early
                stages of life, during which individuals develop the skills and
                knowledge and learn the roles necessary to function within their
                culture and social environment.[13] For some psychologists,
                especially those in the psychodynamic tradition, the most
                important period of socialization is between the ages of one and
                ten. But socialization also includes adults moving into a
                significantly different environment where they must learn a new
                set of behaviors.[14]
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  view more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

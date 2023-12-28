import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

export function Navbar(props){
  return (
    <>
      <nav className="navbar">
        <div
          className={`container-fluid  text-${props.Style} bg-${props.mode} h-14 relative bottom-2`}
        >
          <div className="flex items-center">
            <Link  to="/" className={`navbar-brand mr-14  text-${props.Style}`}>
              {props.title}
            </Link>
            <ul className="flex">
              <Link to="/">
                <li className="mr-10">Home</li>
              </Link>
              <Link to="/About">
              <li className="mr-10">About</li>
              </Link>
            </ul>
          </div>
          <form className="d-flex" role="search">
            <div className="form-check form-switch flex justify-center mt-2 mr-5">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.togglemode}
              />
              <label
                className="form-check-label ml-3"
                htmlFor="flexSwitchCheckDefault"
              >
                Enable {props.Style} mode
              </label>
            </div>
          </form>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  title: propTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "My Website Title",
};

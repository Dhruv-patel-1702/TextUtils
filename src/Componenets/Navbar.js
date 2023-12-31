import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

export function Navbar(props){
  return (
    <>
      <nav className="navbar">
        <div
          className={`md:container-fluid  text-${props.Style} bg-${props.mode} h-14 relative bottom-2 w-full `}
        >
          <div className="md:flex items-center mt-2 xl:text-lg sm:flex text-sm ">
            <Link
              to="/"
              className={`navbar-brand mr-14 mx-10 text-${props.Style} sm:mx-5 md:mx-10`}
            >
              {props.title}
            </Link>
            <ul className="md:flex xl:flex sm:flex items-center">
              <Link to="/">
                <li className="mx-3">Home</li>
              </Link>
              <Link to="/About">
                <li className="mx-3">About</li>
              </Link>
            </ul>
          </div>
          <form role="search">
            <div className="md:flex float-right form-check form-switch sm:mx-6 relative bottom-6 flex items-center xl:bottom-8">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.togglemode}
              />
              <label
                className="form-check-label ml-2 lg:text-base sm:text-sm xl:text-lg "
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

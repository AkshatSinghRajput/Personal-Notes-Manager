import propTypes from "prop-types";
import { Link } from "react-router-dom";
function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <h1 className="navbar-brand">{props.name}</h1>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to ="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to = "/about">
              About
            </Link>
          </li>
        </ul>
      </div>
      <div
        className={`form-check form-switch text-${
          props.mode === "dark" ? "light" : "dark"
        }`}
      >
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          onClick={props.toggleHandler}
        />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
          Enable {props.mode} Mode
        </label>
      </div>
    </nav>
  );
}
Navbar.propTypes = {
  name: propTypes.string,
  title: propTypes.string,
};
Navbar.defaultProps = {
  name: "Akshat",
  title: "Hello",
};
export default Navbar;

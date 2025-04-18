import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Bandhu</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
          aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/found">Report Found</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/missing">Register Missing</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/volunteer">Volunteer</Link>
            </li>
          </ul>
          <div>
            <Link className="btn btn-primary" to="/login">Login</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

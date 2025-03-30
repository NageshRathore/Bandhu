import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-light text-center py-4">
      <div className="container">
        {/* Middle Text */}
        <p className="mb-3">Connecting People, Providing Help</p>

        {/* Navigation Links */}
        <ul className="list-inline mb-3">
          <li className="list-inline-item mx-2">
            <Link className="text-light footer-link" to="/">Home</Link>
          </li>
          <li className="list-inline-item mx-2">
            <Link className="text-light footer-link" to="/about">About</Link>
          </li>
          <li className="list-inline-item mx-2">
            <Link className="text-light footer-link" to="/faqs">FAQs</Link>
          </li>
          <li className="list-inline-item mx-2">
            <Link className="text-light footer-link" to="/volunteer">Volunteer</Link>
          </li>
          <li className="list-inline-item mx-2">
            <Link className="text-light footer-link" to="/missing-found">Missing & Found</Link>
          </li>
        </ul>

        {/* Social Media Links */}
        <ul className="list-inline">
          <li className="list-inline-item mx-2">
            <a className="text-light footer-link" href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
          </li>
          <li className="list-inline-item mx-2">
            <a className="text-light footer-link" href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li className="list-inline-item mx-2">
            <a className="text-light footer-link" href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li className="list-inline-item mx-2">
            <a className="text-light footer-link" href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

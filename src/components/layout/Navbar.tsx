import React from "react";
import { Link } from "react-router-dom";

interface IProps {
  icon?: string;
  title?: string;
}

const Navbar: React.FC<IProps> = ({ icon, title }) => (
  <nav className="navbar bg-primary">
    <Link to="/">
      <h1>
        <i className={icon} />
        {title}
      </h1>
    </Link>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  </nav>
);

Navbar.defaultProps = {
  title: "Github Finder",
  icon: "fab fa-github"
};

export default Navbar;

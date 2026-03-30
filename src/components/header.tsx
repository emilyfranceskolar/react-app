import { Link, NavLink } from "react-router";
import "./header.css";

export default function Header() {
  return (
    <>
      <header>
        <div className="brand-container">
          <Link to="/" className="brand">
            Emily K
          </Link>
        </div>
        <nav>
          <NavLink to="/about" className="link">
            About Me
          </NavLink>
          <NavLink to="/work" className="link">
            My Work
          </NavLink>
          <NavLink to="/contact" className="link">
            Contact
          </NavLink>
        </nav>
      </header>
    </>
  );
}

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo"></Link>
      <a href="#projetos" className="nav-link"></a>
    </nav>
  );
}

export default Navbar;

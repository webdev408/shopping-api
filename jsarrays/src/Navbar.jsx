import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md bg-success navbar-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" href="#">
          Navbar
        </Link>

        <div className="navbar-nav">
          <NavLink className="nav-link " aria-current="page" to="/">
            Home
          </NavLink>
          <NavLink className="nav-link" to="/store">
            MyStore
          </NavLink>
          <NavLink className="nav-link" to="/cart">
            Cart
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;

import { Link } from "react-router-dom";

const Header = () => {

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to={"/"}>
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to={"/detail"}>
                Detail Page
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to={"/category"}>
                Category Page
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to={"/demo-custom-hook"}>
                Demo Custom Hook
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header
import { Link, useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleScrollOrRoute = (id) => {
    if (location.pathname === "/") {
      const section = document.getElementById(id);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) section.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
    // Close the navbar after click
    const navbarCollapse = document.getElementById("navbarNav");
    if (navbarCollapse) {
      navbarCollapse.classList.remove("show");
    }
  };

  const closeMenu = () => {
    const navbarCollapse = document.getElementById("navbarNav");
    if (navbarCollapse) {
      navbarCollapse.classList.remove("show");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" to="/" onClick={closeMenu}>
          OAS
        </Link>

        {/* Hamburger toggle button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible menu */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={closeMenu}>Home</Link>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollOrRoute("about");
                }}
              >
                About
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                href="#team"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollOrRoute("team");
                }}
              >
                Team
              </a>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/services" onClick={closeMenu}>
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/jobs" onClick={closeMenu}>
                Job Highlights
              </Link>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                href="#footer"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollOrRoute("footer");
                }}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

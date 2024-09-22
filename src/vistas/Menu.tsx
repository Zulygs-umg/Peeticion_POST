import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../public/IMG/Umg.png";

function Menu() {
  const location = useLocation();

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Home
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/BuscarEstudiante">
                  Buscar Estudiante
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/IngresarCurso">
                  Ingresar Curso
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {}
      {location.pathname === "/" && (
        <div className="container text-center my-4">
          <img src={logo} alt="Logo" style={{ width: "500px" }} />
        </div>
      )}
    </>
  );
}

export default Menu;

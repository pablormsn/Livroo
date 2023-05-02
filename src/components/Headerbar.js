import "../assets/Headerbar.css";
import logo from "../assets/Livroo.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";

export default function Headerbar() {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  let mensaje = "";

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleClick = () => {
    if (message != null) mensaje = message;
    navigate("/busqueda", {
      state: mensaje,
      replace: true,
    });
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      if (message != null) mensaje = message;
      navigate("/busqueda", {
        state: mensaje,
        replace: true,
      });
    }
  };

  return (
    <header className="p-3 border-bottom">
      <div className="container-fluid">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <Link to="/home" className="navbar-brand">
            <img src={logo} aria-label="Inicio" width={64} height={32} />
          </Link>
          <div className="nav col-12 col-lg-auto me-lg-auto mb-2 mb-md-0" />
          <div className="d-flex align-items-lg-center justify-content-center">
            <form
              className="col col-lg-auto mb-3 mb-lg-0 me-lg-1"
              role="search"
            >
              <div className="input-group">
                <input
                  id="myInput"
                  type="search"
                  className="form-control"
                  placeholder="Buscar..."
                  aria-label="Barra de búsqueda"
                  onChange={handleChange}
                  onKeyDown={handleKeyDown}
                  value={message}
                  title="Buscar"
                />{" "}
                <button
                  className="btn btn-outline-success"
                  type="submit"
                  onClick={handleClick}
                >
                  <span className="d-flex align-items-center justify-content-center">
                    <Icon.Search />
                  </span>
                </button>
              </div>
            </form>
            <div className="dropdown" style={{ marginLeft: 6 }}>
              <Link
                to="#"
                className="d-block link-dark text-decoration-none"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <Icon.PersonCircle size={38} />
              </Link>
              <ul className="dropdown-menu text-small">
                <li>
                  <Link to="/profile" className="dropdown-item">
                    Perfil
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link to="/" className="dropdown-item">
                    Cerrar sesión
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

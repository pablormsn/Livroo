import { Link } from "react-router-dom";
import "../assets/Headerbar.css";
import logo from "../assets/Livroo.png";
import user from "../assets/user.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import lupa from "../assets/search.png";

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
            <img src={logo} alt="Livroo" width={64} height={32} />
          </Link>
          <div className="nav col-12 col-lg-auto me-lg-auto mb-2 mb-md-0" />
          <form
            className="col col-lg-auto mb-3 mb-lg-0 me-lg-1"
            style={{ marginRight: 10 }}
            role="search"
          >
            <input
              id="myInput"
              type="search"
              className="form-control"
              placeholder="Buscar..."
              aria-label="Buscar"
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              value={message}
            />
          </form>
          <div style={{ marginLeft: 6, marginRight: 6 }}>
            <Link
              to=""
              className="d-block link-dark text-decoration-none me-lg-2"
              onClick={handleClick}
            >
              <img src={lupa} alt="lupa" width={16} height={16} />
            </Link>
          </div>
          <div className="dropdown text-end">
            <Link
              to="#"
              className="d-block link-dark text-decoration-none"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src={user}
                alt="User"
                className="rounded-circle"
                width={32}
                height={32}
              />
            </Link>
            <ul className="dropdown-menu text-small">
              <li>
                <Link className="dropdown-item" to="/profile">
                  Perfil
                </Link>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <Link className="dropdown-item" to="/">
                  Cerrar sesión
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

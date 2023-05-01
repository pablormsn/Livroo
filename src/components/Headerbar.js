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
          <a href="home" className="navbar-brand">
            <img src={logo} alt="Livroo" width={64} height={32} />
          </a>
          <div className="nav col-12 col-lg-auto me-lg-auto mb-2 mb-md-0" />
          <form className="col col-lg-auto mb-3 mb-lg-0 me-lg-1" role="search">
            <div className="input-group">
              <input
                id="myInput"
                type="search"
                className="form-control"
                placeholder="Buscar..."
                aria-label="Buscar"
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
                <img src={lupa} alt="lupa" width={16} height={16} />
              </button>
            </div>
          </form>
          <div className="dropdown text-end">
            <a
              href="#"
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
            </a>
            <ul className="dropdown-menu text-small">
              <li>
                <a className="dropdown-item" href="profile">
                  Perfil
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="/Livroo/">
                  Cerrar sesión
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

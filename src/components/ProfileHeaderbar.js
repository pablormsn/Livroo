import { Link } from "react-router-dom";
import "../assets/Headerbar.css";
import logo from "../assets/Livroo.png";
import user from "../assets/user.png";

export default function ProfileHeaderbar() {
  return (
    <header className="p-3 border-bottom">
      <div className="container-fluid">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <Link to="/home" className="navbar-brand">
            <img src={logo} alt="Livroo" width={64} height={32} />
          </Link>
          <div className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0" />
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

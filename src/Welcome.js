import { Link } from "react-router-dom";
import logo from "./assets/Livroo.png";
import "./assets/Welcome.css";
import Footer from "./components/Footer";

function Welcome() {
  return (
    <div className="welcome-body" style={{ height: "100vh" }}>
      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <header className="mb-5">
          <div>
            <Link to="/">
              <img
                src={logo}
                alt="Logo not found"
                width={100}
                height={48}
                aria-current="page"
              />
            </Link>
            <nav className="nav nav-masthead justify-content-center float-md-end">
              <Link to="/signin" className="nav-link fw-bold py-1 px-0">
                Iniciar sesión
              </Link>
            </nav>
          </div>
        </header>
        <main className="px-3 mt-5 text-center mb-auto">
          <h1 className="cover-text">Le damos la bienvenida</h1>
          <p className="lead cover-text">
            Livroo es una plataforma de lectura en línea, donde podrá disfrutar
            de una amplia variedad de libros en cualquier momento y lugar.
          </p>
          <p className="lead">
            <Link
              to="/signup"
              className="btn btn-lg btn-secondary fw-bold border-white bg-white"
            >
              Registrarse
            </Link>
          </p>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default Welcome;

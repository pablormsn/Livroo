import logo from "./assets/Livroo.png";
import "./assets/App.css";
import Footer from "./components/Footer";
import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "Livroo - Inicio";
  }, []);

  return (
    <div className="app-body" style={{ height: "100vh" }}>
      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <header className="mb-5">
          <div>
            <a href="/">
              <img
                src={logo}
                alt="Logo no encontrado"
                longdesc="Logo de Livroo no encontrado"
                width={100}
                height={48}
                aria-current="page"
              />
            </a>
            <nav className="nav nav-masthead justify-content-center float-md-end">
              <a className="nav-link fw-bold py-1 px-0" href="signin">
                Iniciar sesión
              </a>
            </nav>
          </div>
        </header>
        <main className="px-3 mt-5 text-center mb-auto">
          <h1 className="cover-text">
            <span aria-hidden="true">Le damos la bienvenida a Livroo</span>
            <span className="sr-only">Plataforma de lectura en línea</span>
          </h1>
          <p className="lead cover-text">
            Livroo es una plataforma de lectura en línea, donde podrá disfrutar
            de una amplia variedad de libros en cualquier momento y lugar.
          </p>
          <p className="lead">
            <a
              href="signup"
              className="btn btn-lg btn-secondary fw-bold border-white bg-white"
            >
              Registrarse
            </a>
          </p>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;

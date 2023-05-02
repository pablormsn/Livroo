import React from "react";
import "./assets/Signin.css";
import logo from "./assets/Livroo.png";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";

export const Signin = () => {
  function log() {
    let b = document.getElementById("floatingRPassword").value;
    let c = document.getElementById("floatingEmail").value;
    if (b === null || b === "" || c === null || c === "") {
      document.getElementById("boton").disabled = true;
    } else {
      document.getElementById("boton").disabled = false;
    }
  }
  return (
    <div className="signin-body text-center" style={{ height: "100vh" }}>
      <main className="form-signin w-100 m-auto">
        <form
          action="home"
          method="get"
          className="container bg-dark p-3 rounded-5 bg-opacity-75"
        >
          <Link to="/">
            <img
              className="mb-4"
              src={logo}
              aria-label="Inicio"
              width={200}
              height={100}
            />
          </Link>
          <h1 className="h3 mb-3 fw-normal text-white">Complete los campos</h1>
          <div className="form-floating">
            <input
              id="floatingEmail"
              type="email"
              className="form-control bg-dark text-white"
              title="Correo electrónico"
              onKeyDown={() => {
                log();
              }}
            />
            <label htmlFor="floatingInput" className="text-white">
              Correo electrónico
            </label>
          </div>
          <div className="form-floating">
            <input
              id="floatingRPassword"
              type="password"
              className="form-control bg-dark text-white"
              title="Contraseña"
              onKeyDown={() => {
                log();
              }}
            />
            <label htmlFor="floatingPassword" className="text-white">
              Contraseña
            </label>
          </div>
          <Link to="/signup" className="text-success">
            ¿Aún no tienes cuenta? Regístrate
          </Link>
          <Link to="/home">
            <button
              id="boton"
              type="submit"
              className="w-100 btn btn-lg btn-primary bg-success border-success mt-2"
              disabled
            >
              Iniciar sesión
            </button>
          </Link>
        </form>
        <Footer />
      </main>
    </div>
  );
};

export default Signin;

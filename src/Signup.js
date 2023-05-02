import React from "react";
import "./assets/Signup.css";
import logo from "./assets/Livroo.png";
import Footer from "./components/Footer";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const Signup = () => {
  const navigate = useNavigate();
  function log() {
    let a = document.getElementById("floatingPassword").value;
    let b = document.getElementById("floatingRPassword").value;
    let c = document.getElementById("floatingEmail").value;
    if (
      a === null ||
      a === "" ||
      b === null ||
      b === "" ||
      c === null ||
      c === ""
    ) {
      document.getElementById("boton").disabled = true;
    } else {
      document.getElementById("boton").disabled = false;
    }
  }
  function onSubmit(event) {
    event.preventDefault();
    let a = document.getElementById("floatingPassword").value;
    let b = document.getElementById("floatingRPassword").value;
    if (a !== b) {
      alert("Las contraseñas tienen que coincidir");
    } else {
      navigate("/home");
    }
  }

  return (
    <div className="signin-body text-center" style={{ height: "100vh" }}>
      <main className="form-signin w-100 m-auto">
        <form
          className="container bg-dark p-3 rounded-5 bg-opacity-75"
          onSubmit={(e) => {
            onSubmit(e);
          }}
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
              type="email"
              className="form-control bg-dark text-white"
              id="floatingEmail"
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
              id="floatingPassword"
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
          <div className="form-floating">
            <input
              id="floatingRPassword"
              type="password"
              className="form-control bg-dark text-white"
              title="Repita la contraseña"
              onKeyDown={() => {
                log();
              }}
            />
            <label htmlFor="floatingPassword" className="text-white">
              Repite la contraseña
            </label>
          </div>
          <Link to="/signin" className="text-success">
            ¿Ya tienes una cuenta? Inicia sesión
          </Link>
          <Link to="/home">
            <button
              id="boton"
              className="w-100 btn btn-lg btn-primary bg-success border-success mt-2"
              type="submit"
              disabled
            >
              Registrarse
            </button>
          </Link>
        </form>
        <Footer />
      </main>
    </div>
  );
};

export default Signup;

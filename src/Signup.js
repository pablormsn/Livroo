import React from "react";
import "./assets/Signup.css";
import logo from "./assets/Livroo.png";
import Footer from "./components/Footer";
import { useNavigate } from "react-router-dom";

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
          <a href="/Livroo/">
            <img
              className="mb-4"
              src={logo}
              alt="logo"
              width={200}
              height={100}
            />
          </a>
          <h1 className="h3 mb-3 fw-normal text-white">Complete los campos</h1>
          <div className="form-floating">
            <input
              title="Correo electrónico"
              type="email"
              className="form-control bg-dark text-white"
              id="floatingEmail"
              placeholder="name@example.com"
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
              title="Contraseña"
              type="password"
              className="form-control bg-dark text-white"
              id="floatingPassword"
              placeholder="Password"
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
              title="Repite la contraseña"
              type="password"
              className="form-control bg-dark text-white"
              id="floatingRPassword"
              placeholder="Repeat password"
              onKeyDown={() => {
                log();
              }}
            />
            <label htmlFor="floatingPassword" className="text-white">
              Repite la contraseña
            </label>
          </div>
          <a href="signin" className="text-success">
            ¿Ya tienes una cuenta? Inicia sesión
          </a>
          <button
            id="boton"
            className="w-100 btn btn-lg btn-primary bg-success border-success mt-2"
            type="submit"
            disabled
          >
            Registrarse
          </button>
        </form>
        <Footer />
      </main>
    </div>
  );
};

export default Signup;

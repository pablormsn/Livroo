import React from "react";
import "./assets/Signup.css";
import logo from "./assets/Livroo.png";

export const Signup = () => {
  return (
    <div className="signin-body" style={{ height: "100vh" }}>
      <main className="form-signin w-100 m-auto">
        <form
          action="welcome.html"
          method="get"
          className="container bg-dark p-3 rounded-5 bg-opacity-75"
        >
          <a href="index.html">
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
              type="email"
              className="form-control bg-dark text-white"
              id="floatingEmail"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput" className="text-white">
              Correo electrónico
            </label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control bg-dark text-white"
              id="floatingPassword"
              placeholder="Password"
            />
            <label htmlFor="floatingPassword" className="text-white">
              Contraseña
            </label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control bg-dark text-white"
              id="floatingRPassword"
              placeholder="Repeat password"
            />
            <label htmlFor="floatingPassword" className="text-white">
              Repite la contraseña
            </label>
          </div>
          <a href="signin.html" className="text-success">
            ¿Ya tienes una cuenta? Inicia sesión
          </a>
          <button
            className="w-100 btn btn-lg btn-primary bg-success border-success mt-2"
            type="submit"
          >
            Registrarse
          </button>
          <p className="text-white">
            © 2023 Livroo ·
            <a className="text-success" href="#">
              Privacidad
            </a>{" "}
            ·
            <a className="text-success" href="#">
              Condiciones
            </a>
          </p>
        </form>
      </main>
    </div>
  );
};

export default Signup;

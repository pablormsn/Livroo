import React from "react";
import "./assets/Signin.css";
import logo from "./assets/Livroo.png";
import Footer from "./components/Footer";

export const Signin = () => {
  return (
    <div className="signin-body" style={{ height: "100vh" }}>
      <main className="form-signin w-100 m-auto">
        <form
          action="home"
          method="get"
          className="container bg-dark p-3 rounded-5 bg-opacity-75"
        >
          <a href="/">
            <img
              className="mb-4"
              src={logo}
              alt="logo"
              width={200}
              height={100}
            />
          </a>
          <h1 className="h3 mb-3 fw-normal text-white">Iniciar sesión</h1>
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
          <div className="checkbox text-white">
            <label>
              <input type="checkbox" defaultValue="remember-me" /> Recordarme
            </label>
          </div>
          <a href="signup.html" className="text-success">
            ¿No tienes cuenta? ¡Regístrate!
          </a>
          <button
            className="w-100 btn btn-lg btn-primary bg-success border-success p-2 mt-2"
            type="submit"
          >
            Iniciar sesión
          </button>
        </form>
        <Footer />
      </main>
    </div>
  );
};

export default Signin;

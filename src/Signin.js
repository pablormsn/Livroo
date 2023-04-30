import React from "react";
import "./assets/Signin.css";
import logo from "./assets/Livroo.png";
import Footer from "./components/Footer";

export const Signin = () => {
  function log(){
    let b = document.getElementById("floatingRPassword").value;
    let c = document.getElementById("floatingEmail").value;
    if(b===null || b==="" || c===null || c===""){
      document.getElementById("boton").disabled=true;
    }
    else{
      document.getElementById("boton").disabled=false;
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
          <a href="/">
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
              onKeyDown={() => {log()}}
            />
            <label htmlFor="floatingInput" className="text-white">
              Correo electrónico
            </label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control bg-dark text-white"
              id="floatingRPassword"
              placeholder="Password"
              onKeyDown={() => {log()}}
            />
            <label htmlFor="floatingPassword" className="text-white">
              Contraseña
            </label>
          </div>
          <a href="signup" className="text-success">
            ¿Aún no tienes cuenta? Regístrate
          </a>
          <button
          id="boton"
            className="w-100 btn btn-lg btn-primary bg-success border-success mt-2"
            type="submit"
            disabled
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

import React from "react";
import "./assets/Profile.css";
import Headerbar from "./components/ProfileHeaderbar";
import Footer from "./components/Footer";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { useRef, useState } from "react";
import { useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
import * as Icon from "react-bootstrap-icons";

export const Profile = () => {
  function texto() {
    let a = document.getElementById("contra").value;
    let b = document.getElementById("contraR").value;
    if (a !== b) {
      document.getElementById("texto").innerHTML =
        "Las contraseñas tienen que ser iguales";
    }
    if (a === null || a === "" || b === null || b === "") {
      document.getElementById("texto").innerHTML =
        "Los campos no pueden estar vacíos";
    }
  }

  const [setDate] = useState("");
  const dateInputRef = useRef(null);

  const handleChange = (e) => {
    setDate(e.target.value);
  };

  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (value) => {
    setValue(value);
  };
  return (
    <>
      <Headerbar />
      <div className="d-flex h-100 p-3 mx-auto flex-column justify-content-center">
        <main>
          <div className="d-flex container h-100">
            <div className="d-flex container w-100 h-100 p-3 mx-auto flex-column">
              <h1>Tu perfil</h1>
              <div className="row">
                <div className="col-lg-4">
                  <div className="card mb-4">
                    <div className="card-body text-center">
                      <Icon.PersonCircle size={150} />
                      <h5 className="my-3">Nombre</h5>
                    </div>
                    <div className="d-flex justify-content-center mb-2">
                      <button
                        type="button"
                        className="btn btn-primary bg-success border-success"
                        aria-label="Cambiar imagen de perfil"
                      >
                        Cambiar imagen
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8 text-center">
                  <div className="card mb-4">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Nombre</p>
                        </div>
                        <div className="col-sm-9">
                          <input
                            className="form-control me-2"
                            type="text"
                            aria-label="Nombre"
                            title="Nombre"
                          />
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Apellidos</p>
                        </div>
                        <div className="col-sm-9">
                          <input
                            className="form-control me-2"
                            type="text"
                            aria-label="Apellidos"
                            title="Apellidos"
                          />
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Fecha de nacimiento</p>
                        </div>
                        <div className="col-sm-9">
                          <input
                            type="date"
                            onChange={handleChange}
                            ref={dateInputRef}
                            className="form-control me-2"
                            aria-label="Fecha de nacimiento"
                            title="Fecha de nacimiento"
                          />
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">País</p>
                        </div>
                        <div className="col-sm-9">
                          <Select
                            options={options}
                            value={value}
                            onChange={changeHandler}
                            className="me-2"
                            placeholder="Seleccionar..."
                            aria-label="País"
                            title="País"
                          />
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Correo electrónico</p>
                        </div>
                        <div className="col-sm-9">
                          <input
                            className="form-control me-2"
                            type="email"
                            aria-label="Correo electrónico"
                            title="Correo electrónico"
                          />
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Usuario</p>
                        </div>
                        <div className="col-sm-9">
                          <input
                            className="form-control me-2"
                            type="text"
                            aria-label="Usuario"
                            title="Usuario"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center mb-2">
                    <div>
                      <Popup
                        trigger={
                          <button
                            type="button"
                            className="btn btn-primary bg-success border-success"
                            aria-label="Guardar cambios realizados"
                          >
                            {" "}
                            Guardar{" "}
                          </button>
                        }
                        position="top center"
                      >
                        <div
                          className="text-center"
                          aria-label="Guardado con éxito"
                        >
                          ¡Guardado!
                        </div>
                      </Popup>
                    </div>
                  </div>
                  <div className="card mb-4" style={{ marginTop: "3rem" }}>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Contraseña</p>
                        </div>
                        <div className="col-sm-9">
                          <input
                            id="contra"
                            className="form-control me-2"
                            type="password"
                            aria-label="Contraseña"
                            title="Contraseña"
                          />
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Repetir contaseña</p>
                        </div>
                        <div className="col-sm-9">
                          <input
                            id="contraR"
                            className="form-control me-2"
                            type="password"
                            aria-label="Repetir contraseña"
                            title="Repetir contraseña"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center mb-2">
                    <Popup
                      onOpen={() => texto()}
                      trigger={
                        <button
                          type="button"
                          className="btn btn-primary bg-success border-success"
                          aria-label="Cambiar contraseña"
                        >
                          {" "}
                          Cambiar contraseña{" "}
                        </button>
                      }
                      position="top center"
                    >
                      <div id="texto" className="text-center">
                        ¡Contraseña cambiada con éxito!
                      </div>
                    </Popup>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Profile;

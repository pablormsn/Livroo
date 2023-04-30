import React from "react";
import "./assets/Profile.css";
import Headerbar from "./components/ProfileHeaderbar";
import Footer from "./components/Footer";
import user from "./assets/user.png";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { useRef, useState } from 'react';
import { useMemo } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'

export const Profile = () => {
  
  function texto(){
    let a = document.getElementById("contra").value;
    let b = document.getElementById("contraR").value;
    if(a!==b){
      document.getElementById("texto").innerHTML="Las contraseñas tienen que ser iguales";
    }
    if(a === null || a === "" || b === null || b === ""){
      document.getElementById("texto").innerHTML="Los campos no pueden estar vacíos";
    }
  }



  const [date, setDate] = useState('');
  const dateInputRef = useRef(null);
  
  const handleChange = (e) => {
  setDate(e.target.value);
  };

  const [value, setValue] = useState('')
  const options = useMemo(() => countryList().getData(), [])

  const changeHandler = value => {
    setValue(value)
  }
  return (
    <>
      <Headerbar />
      <div className="d-flex h-100 p-3 mx-auto flex-column justify-content-center">
        <main>
          <div className="d-flex container h-100 text-center">
            <div className="d-flex container w-100 h-100 p-3 mx-auto flex-column">
              <div className="row">
                <div className="col-lg-4">
                  <div className="card mb-4">
                    <div className="card-body text-center">
                      <img
                        src={user}
                        alt="avatar"
                        className="rounded-circle img-fluid"
                        style={{ width: 150 }}
                      />
                      <h5 className="my-3">Nombre</h5>
                    </div>
                    <div className="d-flex justify-content-center mb-2">
                      <button
                        type="button"
                        className="btn btn-primary bg-success border-success"
                      >
                        Cambiar imagen
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="card mb-4">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Nombre</p>
                        </div>
                        <div className="col-sm-9">
                          <form className="d-flex" role="nombre">
                            <input
                              className="form-control me-2"
                              type="nombre"
                              aria-label="nombre"
                            />
                          </form>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Apellidos</p>
                        </div>
                        <div className="col-sm-9">
                          <form className="d-flex" role="apellidos">
                            <input
                              className="form-control me-2"
                              type="apellidos"
                              aria-label="apellidos"
                            />
                          </form>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Fecha de nacimiento</p>
                        </div>
                        <div className="col-sm-9">
                          <div className="d-flex">
                            <input
                              type="date"
                              onChange={handleChange}
                              ref={dateInputRef}
                              className="form-control me-2"
                            />
                          </div>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">País</p>
                        </div>
                        <div className="col-sm-9">
                          <Select options={options} value={value} onChange={changeHandler} className="me-2"/>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Correo electrónico</p>
                        </div>
                        <div className="col-sm-9">
                          <form className="d-flex" role="email">
                            <input
                              className="form-control me-2"
                              type="email"
                              aria-label="email"
                            />
                          </form>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Usuario</p>
                        </div>
                        <div className="col-sm-9">
                          <form className="d-flex" role="usuario">
                            <input
                              className="form-control me-2"
                              type="usuario"
                              aria-label="usuario"
                            />
                          </form>
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
                          >
                            {" "}
                            Guardar{" "}
                          </button>
                        }
                        position="top center"
                      >
                        <div className="text-center">¡Guardado!</div>
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
                          <form className="d-flex" role="contrasena">
                            <input
                            id="contra"
                              className="form-control me-2"
                              type="password"
                              aria-label="contrasena"
                            />
                          </form>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Repetir contaseña</p>
                        </div>
                        <div className="col-sm-9">
                          <form className="d-flex" role="ccontrasena">
                            <input
                            id="contraR"
                              className="form-control me-2"
                              type="password"
                              aria-label="ccontrasena"
                            />
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center mb-2">
                  <Popup onOpen={()=>texto()}
                        trigger={
                          <button
                            type="button"
                            className="btn btn-primary bg-success border-success"
                          >
                            {" "}
                            Cambiar contraseña{" "}
                          </button>
                        }
                        position="top center"
                      >
                        <div id="texto" className="text-center">¡Contraseña cambiada con éxito!</div>
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

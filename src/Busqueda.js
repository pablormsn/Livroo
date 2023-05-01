import "./assets/Busqueda.css";
import ProfileHeaderbar from "./components/ProfileHeaderbar";
import Footer from "./components/Footer.js";
import "./assets/infoLibro.css";
import imagen1 from "./assets/libro1.jpg";
import imagen2 from "./assets/libro2.jpg";
import imagen3 from "./assets/libro3.jpg";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import * as Icon from "react-bootstrap-icons";

export const Busqueda = () => {
  const { state } = useLocation();
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleClick = () => {
    search_book(message);
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      search_book(message);
    }
  };

  useEffect(() => {
    let ignore = false;

    if (!ignore) search_book(state);
    setMessage(state);
    return () => {
      ignore = true;
    };
  }, []);

  function search_book(hola) {
    let input = hola;
    if (input === null) input = "";
    input = input.toLowerCase();
    let x = document.getElementsByClassName("card-img");
    let b = false;

    for (let i = 0; i < x.length; i++) {
      if (x[i].id.toLowerCase().includes(input)) {
        x[i].parentElement.parentElement.style.height = "294.78px";
        x[i].parentElement.parentElement.style.width = "210.66px";
        x[i].parentElement.style.display = "flex";
        b = true;
      } else {
        x[i].parentElement.style.display = "none";
        x[i].parentElement.parentElement.style.height = "0px";
        x[i].parentElement.parentElement.style.width = "0px";
      }
    }

    let barra = document.getElementById("not-found");

    if (b === false) {
      const elem = document.getElementById("elemento");
      if (elem === null) {
        const element = document.createElement("h3");
        element.id = "elemento";
        element.innerText = "No se han encontrado resultados";
        element.classList = "text-white";
        barra.appendChild(element);
      }
    } else {
      const borrar = document.getElementById("elemento");
      if (borrar != null) {
        borrar.remove();
      }
    }
  }

  return (
    <div className="busqueda-body">
      <ProfileHeaderbar />
      <div
        className="d-flex h-100 p-3 mx-auto flex-column justify-content-center"
        style={{ marginTop: 20 }}
      >
        <main className="px-3 cover-container">
          <div>
            <h1 className="text-white">Escribe el libro que estés buscando:</h1>
          </div>
          <div id="barra-busqueda" className="container p-3">
            <div className="barra card">
              <div className="card-body d-flex justify-content-between align-items-center border-success">
                <input
                  id="message"
                  className="form-control"
                  type="search"
                  placeholder="Buscar"
                  onChange={handleChange}
                  onKeyDown={handleKeyDown}
                  value={message}
                  aria-label="Buscar"
                  title="Buscar"
                />
                <div className="card-body d-flex justify-content-between align-items-center">
                  <a
                    onClick={handleClick}
                    className="btn btn-outline-success"
                    type="submit"
                  >
                    Buscar
                  </a>
                  <nav
                    id="imgperfil"
                    className="nav justify-content-center float-md-end"
                  >
                    <a
                      href="/busqueda"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <button
                        className="btn me-2 dropdown-toggle"
                        type="button"
                        id="button-addon1"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <Icon.Filter size={24} className="text-success" />
                      </button>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li>
                        <a className="dropdown-item" href="/busqueda">
                          {" "}
                          menos &lt; más (páginas){" "}
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="/busqueda">
                          {" "}
                          más &gt; menos (páginas)
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center" id="not-found"></div>
          <div className="container busqueda-album ">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 d-flex justify-content-center">
              <div className="col">
                <div className="card border-0 text-white">
                  <div className="card-img-overlay">
                    <a href="infoJuegos" className="stretched-link">
                      <img
                        id="Los Juegos Del Hambre"
                        className="card-img"
                        src={imagen1}
                        alt="Card"
                      />
                      <p className="titulos invisible">Juegos 1</p>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card border-0 text-white">
                  <div className="card-img-overlay">
                    <a href="infoLlamas" className="stretched-link">
                      <img
                        id="Los Juegos Del Hambre En Llamas"
                        className="card-img"
                        src={imagen2}
                        alt="Card"
                      />
                      <p className="titulos invisible">Juegos 2</p>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card border-0 text-white">
                  <div className="card-img-overlay">
                    <a href="infoSinsajo" className="stretched-link">
                      <img
                        id="Los Juegos Del Hambre Sinsajo"
                        className="card-img"
                        src={imagen3}
                        alt="Card"
                      />
                      <p className="titulos invisible">Juegos 3</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Busqueda;

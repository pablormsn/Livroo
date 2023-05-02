import "./assets/Busqueda.css";
import Headerbar from "./components/SearchHeaderbar";
import Footer from "./components/Footer.js";
import imagen1 from "./assets/libro1.jpg";
import imagen2 from "./assets/libro2.jpg";
import imagen3 from "./assets/libro3.jpg";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import * as Icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";

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
  }, [state]);

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
      <Headerbar />
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
              <div className="d-flex align-items-lg-center justify-content-center">
                <div className="input-group">
                  <input
                    id="message"
                    type="search"
                    className="form-control"
                    placeholder="Buscar..."
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    value={message}
                    title="Buscar"
                  />
                  <button
                    onClick={handleClick}
                    className="btn btn-success"
                    type="submit"
                    aria-label="Buscar"
                  >
                    <span className="d-flex align-items-center justify-content-center">
                      <Icon.Search />
                    </span>
                  </button>
                </div>
                <div className="card-body d-flex justify-content-between align-items-center">
                  <nav
                    id="imgperfil"
                    className="nav justify-content-center float-md-end"
                  >
                    <Link
                      to="/busqueda"
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
                        aria-label="Filtrar"
                      >
                        <Icon.Filter size={24} className="text-success" />
                      </button>
                    </Link>
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li>
                        <Link className="dropdown-item" to="/busqueda">
                          {" "}
                          menos &lt; más (páginas){" "}
                        </Link>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/busqueda">
                          {" "}
                          más &gt; menos (páginas)
                        </Link>
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
                    <Link to="/infoJuegos" className="stretched-link">
                      <img
                        id="Los Juegos del Hambre"
                        className="card-img"
                        src={imagen1}
                        aria-label="Los Juegos del Hambre"
                      />
                      <p className="titulos invisible">Juegos 1</p>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card border-0 text-white">
                  <div className="card-img-overlay">
                    <Link to="/infoLlamas" className="stretched-link">
                      <img
                        id="Los Juegos del Hambre En Llamas"
                        className="card-img"
                        src={imagen2}
                        aria-label="Los Juegos del Hambre: En Llamas"
                      />
                      <p className="titulos invisible">Juegos 2</p>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card border-0 text-white">
                  <div className="card-img-overlay">
                    <Link to="/infoSinsajo" className="stretched-link">
                      <img
                        id="Los Juegos del Hambre Sinsajo"
                        className="card-img"
                        src={imagen3}
                        aria-label="Los Juegos del Hambre: Sinsajo"
                      />
                      <p className="titulos invisible">Juegos 3</p>
                    </Link>
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

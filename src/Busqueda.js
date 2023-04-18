import logo from './logo.svg';
import './assets/App.css';
import Footer from "./components/Footer.js";
import "./assets/infoLibro.css";
import Headerbar from "./components/Headerbar.js";
import port from "./assets/portada.jpg";
import libro from "./assets/juegos1.pdf";
import imagen1 from "./assets/libro1.jpg";
import imagen2 from "./assets/libro2.jpg";
import imagen3 from "./assets/libro3.jpg";
import { ChangeEvent, useState } from "react";
import ProfileHeaderbar from "./components/ProfileHeaderbar"
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export const Busqueda = () => {
  const { state } = useLocation();
  const [message, setMessage] = useState('');

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleClick = () => {
    search_book(message);
  };
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      search_book(message);
    }
  };


  useEffect(() => {
    let ignore = false;
    
    if (!ignore)  search_book(state);setMessage(state)
    return () => { ignore = true; }
    },[]);


  function search_book(hola) {
    let input = hola;
    if(input===null)input="";
    input = input.toLowerCase();
    let x = document.getElementsByClassName('card-img');

    for (let i = 0; i < x.length; i++) {
        if (x[i].id.toLowerCase().includes(input)) {
          x[i].parentElement.parentElement.style.height = "294.78px";
          x[i].parentElement.parentElement.style.width = "210.66px";
          x[i].parentElement.style.display="flex";
        }
        else {
          x[i].parentElement.style.display = "none";
          x[i].parentElement.parentElement.style.height = "0px";
          x[i].parentElement.parentElement.style.width = "0px";
        }
    }
    
  }







  return (
    <>
  <ProfileHeaderbar />
  <div className="d-flex h-100 p-3 mx-auto flex-column justify-content-center">
    <main className="px-3 cover-container">
      <div className="">
        <h1>Escribe el libro que estés buscando:</h1>
      </div>
      <div id="barra-busqueda" className="container p-3">
        <div className="barra card">
          <div className="card-body d-flex justify-content-between align-items-center border-success">
            <input
              id="message"
              className="form-control"
              type="search"
              placeholder="Buscar"
              aria-label="Search"
              style={{ width: 500 }}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              value={message}
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
                  className="dropdown-toggle"
                  href="#"
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
                    <i className="bi bi-filter text-success" />
                  </button>
                </a>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <a className="dropdown-item" href="#">
                      {" "}
                      menos &lt; más (páginas){" "}
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
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
      <div className="album">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div className="col">
              <div className="card bg-dark text-white">
                <img
                  id="Los Juegos Del Hambre"
                  className="card-img"
                  src={imagen1}
                  alt="Card image"
                />
                <div className="card-img-overlay">
                  <a
                    href="infoLibro"
                    className="stretched-link"
                  />
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card bg-dark text-white">
                <img
                  id="Los Juegos Del Hambre En Llamas"
                  className="card-img"
                  src={imagen2}
                  alt="Card image"
                />
                <div className="card-img-overlay">
                  <a
                    href="infoLibro"
                    className="stretched-link"
                  />
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card bg-dark text-white">
                <img
                  id="Los Juegos Del Hambre Sinsajo"
                  className="card-img"
                  src={imagen3}
                  alt="Card image"
                />
                <div className="card-img-overlay">
                  <a
                    href="infoLibro"
                    className="stretched-link"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
  <Footer />
</>

      
  );
};

export default Busqueda;
import React from "react";
import Headerbar from "./components/Headerbar.js";
import Footer from "./components/Footer.js";
import libro1 from "./assets/libro1.jpg";
import libro2 from "./assets/libro2.jpg";
import libro3 from "./assets/libro3.jpg";

function Library() {
  return (
    <>
      <Headerbar />
      <div className="container">
        <h1>Mi biblioteca</h1>
        <div className="container" style={{ marginTop: 60 }}>
          <h3>Leyendo</h3>
          <div className="row row-cols-2 row-cols-sm-3 row-cols-md-6 g-3">
            <div className="col">
              <div className="card">
                <a href="infoJuegos">
                  <img
                    src={libro1}
                    className="d-block w-100 card-img-top zoom"
                    alt="Not found"
                  />
                </a>
                <span className="visually-hidden">Los Juegos del Hambre</span>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <a href="infoSinsajo">
                  <img
                    src={libro3}
                    className="d-block w-100 card-img-top zoom"
                    alt="Not found"
                  />
                </a>
                <span className="visually-hidden">
                  Los Juegos del Hambre: Sinsajo
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="container" style={{ marginTop: 60 }}>
          <h3>Leídos</h3>
          <div className="row row-cols-2 row-cols-sm-3 row-cols-md-6 g-3">
            <div className="col">
              <div className="card">
                <a href="infoLlamas">
                  <img
                    src={libro2}
                    className="d-block w-100 card-img-top zoom"
                    alt="Not found"
                  />
                </a>
                <span className="visually-hidden">
                  Los juegos del hambre: En Llamas
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Library;

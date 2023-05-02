import "./assets/infoLibro.css";
import Footer from "./components/Footer.js";
import Headerbar from "./components/Headerbar.js";
import port from "./assets/libro2.jpg";
import libro from "./assets/juegos2.pdf";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Link } from "react-router-dom";

export const InfoLlamas = () => {
  return (
    <>
      <Headerbar />
      <div className="infoLibro-body">
        <div className="container">
          <p style={{ fontSize: "large" }}>
            <Link to="/home" className="link">
              Libros
            </Link>{" "}
            &gt; Los Juegos Del Hambre: En Llamas
          </p>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="card align-items-center" style={{ border: 0 }}>
                <img
                  id="portada"
                  src={port}
                  aria-label="Portada del libro Los Juegos del Hambre: En Llamas"
                />
                <div style={{ marginTop: 20, marginBottom: 50 }}>
                  <button
                    className="btn btn-primary bg-success border-success"
                    style={{
                      width: 353,
                      height: 70,
                      fontSize: 30,
                      fontWeight: "bold",
                    }}
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    LEER DE NUEVO
                  </button>
                  {/* Modal */}
                  <div
                    className="modal fade"
                    id="exampleModal"
                    tabIndex={-1}
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-xl">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h1
                            className="modal-title fs-5"
                            id="exampleModalLabel"
                          >
                            ¡Disfrute de su lectura!
                          </h1>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          />
                        </div>
                        <div className="modal-body">
                          <embed
                            src={libro}
                            width="100%"
                            height={800}
                            type="application/pdf"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card" style={{ border: 0 }}>
                <h2 className="fw-normal lh-1">
                  Los Juegos del Hambre: En Llamas{" "}
                </h2>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <h3 style={{ marginRight: 10 }}>Suzanne Collins</h3>
                  <Link to="/biography" className="link">
                    <i>
                      <span className="fs-6" aria-label="Saber más del autor">
                        (Saber más)
                      </span>
                    </i>
                  </Link>
                </div>
                <h5>Sinopsis:</h5>
                <p>
                  "Los Juegos del Hambre: En Llamas" es la segunda entrega de la
                  trilogía de Suzanne Collins, que continúa la historia de
                  Katniss Everdeen después de su victoria en los Juegos del
                  Hambre. Ahora, Katniss y Peeta Mellark deben embarcarse en una
                  gira de la victoria por los distritos, pero se enfrentan a la
                  creciente ira de la gente hacia el Capitolio y a la amenaza de
                  una posible rebelión. Mientras tanto, el presidente Snow está
                  decidido a acabar con cualquier forma de rebelión y, para
                  ello, organiza la edición número 75 de los Juegos del Hambre,
                  conocidos como los "Juegos del Hambre de los Vasallajes". En
                  este juego, los ganadores de los juegos anteriores son
                  enviados de vuelta a la arena para luchar hasta la muerte en
                  un nuevo desafío. Katniss se da cuenta de que su victoria en
                  los juegos anteriores la ha convertido en un símbolo de
                  esperanza para los rebeldes, pero también la ha convertido en
                  un objetivo para el Capitolio. Para sobrevivir a los juegos y
                  ayudar a la rebelión, Katniss debe aprender a confiar en sus
                  instintos y en sus aliados, incluyendo a Peeta y a su amigo de
                  la infancia, Gale. Con giros emocionantes, suspenso y acción,
                  "Los Juegos del Hambre: En Llamas" es una continuación
                  emocionante e intensa de la historia de Katniss y su lucha por
                  la supervivencia y la libertad.
                </p>
              </div>
              <div>
                <h4>Progreso de lectura:</h4>
                <ProgressBar variant="success" now={100} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default InfoLlamas;

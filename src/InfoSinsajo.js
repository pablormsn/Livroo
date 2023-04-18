import "./assets/infoLibro.css";
import Footer from "./components/Footer.js";
import Headerbar from "./components/Headerbar.js";
import port from "./assets/libro3.jpg";
import libro from "./assets/juegos3.pdf";

export const InfoSinsajo = () => {
  return (
    <>
      <Headerbar />
      <div className="infoLibro-body">
        <div className="container" style={{ marginLeft: 80, marginRight: 80 }}>
          <p style={{ fontSize: "large" }}>
            <a className="link" href="home">
              Libros
            </a>{" "}
            &gt; Los Juegos del Hambre: Sinsajo
          </p>
        </div>
        <div className="row">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading fw-normal lh-1">
              Los Juegos del Hambre: Sinsajo{" "}
            </h2>
            <h4>
              <a className="link" href="biography">
                Suzanne Collins
              </a>
            </h4>
            <h5>Sinopsis:</h5>
            <p className="lead">
              "Los Juegos del Hambre: Sinsajo" es la tercera y última entrega de
              la trilogía de Suzanne Collins, que sigue a Katniss Everdeen en su
              lucha final contra el Capitolio. Después de los eventos de los
              "Juegos del Hambre de los Vasallajes", Katniss se encuentra en el
              Distrito 13, un lugar que se creía destruido por el Capitolio,
              pero que en realidad se había mantenido oculto y preparando una
              rebelión contra el régimen opresivo. A medida que la guerra se
              intensifica, Katniss se convierte en el símbolo de la rebelión, la
              "Sinsajo", y su imagen se convierte en un llamado a la lucha
              contra el Capitolio. A medida que la rebelión se propaga por los
              distritos, Katniss se da cuenta de que su papel es más importante
              de lo que pensaba. Ella debe decidir si está dispuesta a
              sacrificar todo, incluso su propia vida, para lograr la victoria
              sobre el Capitolio y el Presidente Snow. Con la ayuda de sus
              amigos y aliados, incluyendo a Peeta, Gale y su equipo de
              filmación, Katniss lidera la lucha contra el Capitolio en una
              batalla final que decidirá el destino de Panem y su gente. Pero,
              ¿será Katniss capaz de tomar las decisiones correctas y mantenerse
              fiel a sus propios ideales en medio de la violencia y la
              desesperación? Con una narración intensa y emocionante, "Los
              Juegos del Hambre: Sinsajo" es una conclusión emocionante y
              satisfactoria para la trilogía de Collins, que explora temas
              importantes como la opresión, la libertad y la lucha por la
              justicia en un mundo donde los fuertes aplastan a los débiles.
            </p>
          </div>
          <div className="col-md-5 order-md-1">
            <img id="portada" src={port} alt="Not found" />
            <div style={{ marginTop: 20 }}>
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
                LEER ESTE LIBRO
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
                      <h1 className="modal-title fs-5" id="exampleModalLabel">
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
                        width={1100}
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
      </div>
      <Footer />
    </>
  );
};

export default InfoSinsajo;

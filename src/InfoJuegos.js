import "./assets/infoLibro.css";
import Footer from "./components/Footer.js";
import Headerbar from "./components/Headerbar.js";
import port from "./assets/libro1.jpg";
import libro from "./assets/juegos1.pdf";

export const InfoJuegos = () => {
  return (
    <>
      <Headerbar />
      <div className="infoLibro-body">
        <div className="container" style={{ marginLeft: 80, marginRight: 80 }}>
          <p style={{ fontSize: "large" }}>
            <a className="link" href="home">
              Libros
            </a>{" "}
            &gt; Los Juegos Del Hambre
          </p>
        </div>
        <div className="row">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading fw-normal lh-1">
              Los Juegos del Hambre{" "}
            </h2>
            <h4>
              <a className="link" href="biography">
                Suzanne Collins
              </a>
            </h4>
            <h5>Sinopsis:</h5>
            <p className="lead">
              "En una oscura versión del futuro próximo, doce chicos y doce
              chicas se ven obligados a participar en un reality show llamado
              Los Juegos del Hambre. Sólo hay una regla: matar o morir" "Cuando
              Katniss Everdeen, una joven de dieciséis años, se presenta
              voluntaria para ocupa el lugar de su hermana en los juegos, lo
              entiende como una condena a muerte. Sin embargo Katniss ya ha
              visto la muerte de cerca; y la supervivencia forma parte de su
              naturaleza."
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

export default InfoJuegos;

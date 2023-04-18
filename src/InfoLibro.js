import logo from "./logo.svg";
import Footer from "./components/Footer.js";
import "./assets/infoLibro.css";
import Headerbar from "./components/Headerbar.js";
import port from "./assets/portada.jpg";
import libro from "./assets/juegos1.pdf";

export const InfoLibro = () => {
  return (
    <>
    <Headerbar />
    <div className="infoLibro-body">
        <div className="container" style={{ marginLeft: 80, marginRight: 80 }}>
          <p style={{ fontSize: "large", color: "black" }}>
            <a className="link" href="home">
              Libros
            </a>{" "}
            &gt; Los Juegos Del Hambre
          </p>
        </div>
        <div style={{ height: 500, marginLeft: 80, marginRight: 80 }}>
          <img
            className="me-3"
            id="portada"
            src={port}
            style={{ float: "left" }}
          />
          <h1 style={{ color: "black" }}>Los Juegos del Hambre</h1>
          <h2>
            <a className="link" href="biography">
              Suzanne Collins
            </a>
          </h2>
          <h3 style={{ color: "black" }}>Sinopsis:</h3>
          <p style={{ color: "black" }}>
            "En una oscura versión del futuro próximo, doce chicos y doce chicas
            se ven obligados a participar en un reality show llamado Los Juegos
            del Hambre. Sólo hay una regla: matar o morir" "Cuando Katniss
            Everdeen, una joven de dieciséis años, se presenta voluntaria para
            ocupa el lugar de su hermana en los juegos, lo entiende como una
            condena a muerte. Sin embargo Katniss ya ha visto la muerte de cerca;
            y la supervivencia forma parte de su naturaleza."
          </p>
        </div>
        <div style={{ marginLeft: 80, marginRight: 80, marginTop: 20 }}>
          <button
            className="btn btn-primary bg-success border-success"
            style={{ width: 353, height: 70, fontSize: 30, fontWeight: "bold" }}
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
    <Footer />
    </>
      
  );
};

export default InfoLibro;

import Footer from "./components/Footer.js";
import Headerbar from "./components/Headerbar.js";
import libro1 from "./assets/libro1.jpg";
import libro2 from "./assets/libro2.jpg";
import libro3 from "./assets/libro3.jpg";
import suz from "./assets/suzanne.png";

export const Biography = () => {
  return (
    <>
      <Headerbar />
      <main>
        <div className="container">
          <div className="card" style={{ border: 0, marginTop: 20 }}>
            <div className="row">
              <div className="col-md-4">
                <img
                  src={suz}
                  className="img-fluid rounded mx-auto d-block w-75"
                  alt="..."
                  style={{ marginBottom: 50 }}
                />
              </div>
              <div className="col-md-8">
                <div>
                  <h4 className="card-text text-start font-weight-bold">
                    Suzanne Collins
                  </h4>
                  <p className="card-text text-start">
                    Suzanne Collins (1962-) es una escritora y guionista
                    estadounidense conocida por ser la autora de la popular
                    trilogía de libros "Los juegos del hambre" ("The Hunger
                    Games"). Nació en Hartford, Connecticut, pero creció en
                    varios lugares de Estados Unidos debido a que su padre era
                    oficial del ejército. Antes de dedicarse a la escritura,
                    Collins trabajó como guionista de televisión para varios
                    programas infantiles y como escritora de libros para niños.
                    También escribió una serie de novelas para adolescentes
                    llamada "Underland Chronicles". Sin embargo, fue con "Los
                    juegos del hambre" que Collins alcanzó un gran éxito
                    mundial, convirtiéndose en una de las sagas más vendidas de
                    los últimos tiempos. La historia de Katniss Everdeen y su
                    lucha contra el gobierno opresor del Capitolio ha sido
                    adaptada al cine en cuatro películas, convirtiéndose en un
                    fenómeno cultural en todo el mundo. Collins ha recibido
                    numerosos premios y reconocimientos por su trabajo,
                    incluyendo el Premio de Oro de California, el Premio Andre
                    Norton y el Goodreads Choice Award. Actualmente vive en
                    Connecticut con su familia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <h2 className="mb-3 text-center">Libros de Suzanne Collins</h2>
          <div className="row row-cols-2 row-cols-sm-3 row-cols-md-6 g-3 d-flex justify-content-center">
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
        <Footer />
      </main>
    </>
  );
};

export default Biography;

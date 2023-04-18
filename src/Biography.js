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
        <div className="card bg-transparent">
          <div className="row g-1">
            <div className="col-md-4 suzane">
              <img
                src={suz}
                className="img-fluid rounded w-50"
                align="right"
                alt="..."
              />
            </div>
            <div className="col-md-8 cubo">
              <div className="card-body">
                <h5 className="card-text text-start font-weight-bold">
                  Suzanne Collins
                </h5>
                <p className="card-text text-start">
                  Suzanne Collins (1962-) es una escritora y guionista estadounidense
                  conocida por ser la autora de la popular trilogía de libros "Los
                  juegos del hambre" ("The Hunger Games"). Nació en Hartford,
                  Connecticut, pero creció en varios lugares de Estados Unidos debido
                  a que su padre era oficial del ejército. Antes de dedicarse a la
                  escritura, Collins trabajó como guionista de televisión para varios
                  programas infantiles y como escritora de libros para niños. También
                  escribió una serie de novelas para adolescentes llamada "Underland
                  Chronicles". Sin embargo, fue con "Los juegos del hambre" que
                  Collins alcanzó un gran éxito mundial, convirtiéndose en una de las
                  sagas más vendidas de los últimos tiempos. La historia de Katniss
                  Everdeen y su lucha contra el gobierno opresor del Capitolio ha sido
                  adaptada al cine en cuatro películas, convirtiéndose en un fenómeno
                  cultural en todo el mundo. Collins ha recibido numerosos premios y
                  reconocimientos por su trabajo, incluyendo el Premio de Oro de
                  California, el Premio Andre Norton y el Goodreads Choice Award.
                  Actualmente vive en Connecticut con su familia.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container w-50 pt-3">
          <h2 className="text-start mb-3">Libros de Suzanne Collins</h2>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div className="col px-2 w-25">
              <div className="card bg-dark text-white">
                <img className="card-img" src={libro1} alt="Card image" />
                <div className="card-img-overlay">
                  <a href="infoLibros/infoJuegos.html" className="stretched-link" />
                </div>
              </div>
            </div>
            <div className="col px-2 w-25">
              <div className="card bg-dark text-white">
                <img className="card-img" src={libro2} alt="Card image" />
                <div className="card-img-overlay">
                  <a href="infoLibros/infoLlamas.html" className="stretched-link" />
                </div>
              </div>
            </div>
            <div className="col px-2 w-25">
              <div className="card bg-dark text-white">
                <img className="card-img" src={libro3} alt="Card image" />
                <div className="card-img-overlay">
                  <a href="infoLibros/infoSinsajo.html" className="stretched-link" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>      
    );
  };
  
  export default Biography;
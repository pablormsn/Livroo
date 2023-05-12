import React from "react";
import { Link } from "react-router-dom";
import Headerbar from "./components/Headerbar";
import Footer from "./components/Footer";
import "./assets/Home.css";
import carousel1 from "./assets/carousel1.png";
import carousel2 from "./assets/carousel2.png";
import carousel3 from "./assets/carousel3.png";
import libro1 from "./assets/libro1.jpg";
import libro2 from "./assets/libro2.jpg";
import libro3 from "./assets/libro3.jpg";

export const Home = () => {
  return (
    <>
      <Headerbar />
      <main>
        <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to={0}
              className="active"
              aria-current="true"
              aria-label="Cambiar al primer libro"
            />
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to={1}
              aria-label="Cambiar al segundo libro"
            />
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to={2}
              aria-label="Cambiar al tercer libro"
            />
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <Link to="/infoJuegos">
                <img
                  src={carousel1}
                  aria-label="Portada del libro Los Juegos del Hambre"
                  className="center-fit"
                />
                <div className="container">
                  <div
                    class="carousel-caption text-center text-dark bg-light p-2 rounded-3 bg-opacity-75"
                    id="letrero"
                  >
                    <h1>Los Juegos del Hambre</h1>
                  </div>
                </div>
              </Link>
            </div>
            <div className="carousel-item">
              <Link to="/infoLlamas">
                <img
                  src={carousel2}
                  aria-label="Portada del libro Los Juegos del Hambre: En Llamas"
                  className="center-fit"
                />
                <div className="container">
                  <div
                    class="carousel-caption text-center text-dark bg-light p-2 rounded-3 bg-opacity-75"
                    id="letrero"
                  >
                    <h1>Los Juegos del Hambre: En Llamas</h1>
                  </div>
                </div>
              </Link>
            </div>
            <div className="carousel-item">
              <Link to="/infoSinsajo">
                <img
                  src={carousel3}
                  aria-label="Portada del libro Los Juegos del Hambre: Sinsajo"
                  className="center-fit"
                />
                <div className="container">
                  <div
                    class="carousel-caption text-center text-dark bg-light p-2 rounded-3 bg-opacity-75"
                    id="letrero"
                  >
                    <h1>Los Juegos del Hambre: Sinsajo</h1>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="container">
          <h2>Novedades</h2>
          <div className="row row-cols-2 row-cols-sm-3 row-cols-md-6 g-3">
            <div className="col">
              <div className="card">
                <Link to="/infoJuegos">
                  <img
                    src={libro1}
                    className="d-block w-100 card-img-top zoom"
                    aria-label="Los juegos del hambre"
                  />
                </Link>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <Link to="/infoLlamas">
                  <img
                    src={libro2}
                    className="d-block w-100 card-img-top zoom"
                    aria-label="Los juegos del hambre: En Llamas"
                  />
                </Link>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <Link to="/infoSinsajo">
                  <img
                    src={libro3}
                    className="d-block w-100 card-img-top zoom"
                    aria-label="Los Juegos del Hambre: Sinsajo"
                  />
                </Link>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <Link to="/infoJuegos">
                  <img
                    src={libro1}
                    className="d-block w-100 card-img-top zoom"
                    aria-label="Los juegos del hambre"
                  />
                </Link>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <Link to="/infoLlamas">
                  <img
                    src={libro2}
                    className="d-block w-100 card-img-top zoom"
                    aria-label="Los juegos del hambre: En Llamas"
                  />
                </Link>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <Link to="/infoSinsajo">
                  <img
                    src={libro3}
                    className="d-block w-100 card-img-top zoom"
                    aria-label="Los Juegos del Hambre: Sinsajo"
                  />
                </Link>
              </div>
            </div>
          </div>
          <h2>Recomendados</h2>
          <div className="row row-cols-2 row-cols-sm-3 row-cols-md-6 g-3">
            <div className="col">
              <div className="card">
                <Link to="/infoJuegos">
                  <img
                    src={libro1}
                    className="d-block w-100 card-img-top zoom"
                    aria-label="Los juegos del hambre"
                  />
                </Link>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <Link to="/infoLlamas">
                  <img
                    src={libro2}
                    className="d-block w-100 card-img-top zoom"
                    aria-label="Los juegos del hambre: En Llamas"
                  />
                </Link>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <Link to="/infoSinsajo">
                  <img
                    src={libro3}
                    className="d-block w-100 card-img-top zoom"
                    aria-label="Los Juegos del Hambre: Sinsajo"
                  />
                </Link>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <Link to="/infoJuegos">
                  <img
                    src={libro1}
                    className="d-block w-100 card-img-top zoom"
                    aria-label="Los juegos del hambre"
                  />
                </Link>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <Link to="/infoLlamas">
                  <img
                    src={libro2}
                    className="d-block w-100 card-img-top zoom"
                    aria-label="Los juegos del hambre: En Llamas"
                  />
                </Link>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <Link to="/infoSinsajo">
                  <img
                    src={libro3}
                    className="d-block w-100 card-img-top zoom"
                    aria-label="Los Juegos del Hambre: Sinsajo"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Home;

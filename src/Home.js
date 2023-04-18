import React from "react";
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
              aria-label="Slide 1"
            />
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to={1}
              aria-label="Slide 2"
            />
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to={2}
              aria-label="Slide 3"
            />
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={carousel1} alt="Libro 1" />
              <div className="container">
                <div className="carousel-caption text-start">
                  <h1>Los Juegos del Hambre</h1>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img src={carousel2} alt="Libro 2" />
              <div className="container">
                <div className="carousel-caption">
                  <h1>Los Juegos del Hambre: En Llamas</h1>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img src={carousel3} alt="Libro 3" />
              <div className="container">
                <div className="carousel-caption text-end">
                  <h1>Los Juegos del Hambre: Sinsajo</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <h2>Novedades</h2>
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
          <h2>Recomendados</h2>
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

export default Home;

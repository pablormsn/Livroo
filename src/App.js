import logo from "./assets/Livroo.png";
import "./assets/App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app-body" style={{ height: "100vh" }}>
      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <header className="mb-5">
          <div>
            <a href="/">
              <img
                src={logo}
                alt="Logo not found"
                width={100}
                height={48}
                aria-current="page"
              />
            </a>
            <nav className="nav nav-masthead justify-content-center float-md-end">
              <a className="nav-link fw-bold py-1 px-0" href="signin">
                Iniciar sesión
              </a>
            </nav>
          </div>
        </header>
        <main className="px-3 mt-5 text-center">
          <h1 className="cover-text">Le damos la bienvenida</h1>
          <p className="lead cover-text">
            Livroo es una plataforma de lectura en línea, donde podrá disfrutar
            de una amplia variedad de libros en cualquier momento y lugar.
          </p>
          <p className="lead">
            <a
              href="signup"
              className="btn btn-lg btn-secondary fw-bold border-white bg-white"
            >
              Registrarse
            </a>
          </p>
        </main>
      </div>
      <div className="container px-4 py-5" id="icon-grid">
        <h2 className="pb-2 border-bottom">Características</h2>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
          <div className="col d-flex align-items-start">
            <svg
              className="bi text-muted flex-shrink-0 me-3"
              width="1.75em"
              height="1.75em"
            >
              <use xlinkHref="#bootstrap" />
            </svg>
            <div>
              <h3 className="fw-bold mb-0 fs-4">Featured title</h3>
              <p>
                Paragraph of text beneath the heading to explain the heading.
              </p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <svg
              className="bi text-muted flex-shrink-0 me-3"
              width="1.75em"
              height="1.75em"
            >
              <use xlinkHref="#cpu-fill" />
            </svg>
            <div>
              <h3 className="fw-bold mb-0 fs-4">Featured title</h3>
              <p>
                Paragraph of text beneath the heading to explain the heading.
              </p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <svg
              className="bi text-muted flex-shrink-0 me-3"
              width="1.75em"
              height="1.75em"
            >
              <use xlinkHref="#calendar3" />
            </svg>
            <div>
              <h3 className="fw-bold mb-0 fs-4">Featured title</h3>
              <p>
                Paragraph of text beneath the heading to explain the heading.
              </p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <svg
              className="bi text-muted flex-shrink-0 me-3"
              width="1.75em"
              height="1.75em"
            >
              <use xlinkHref="#home" />
            </svg>
            <div>
              <h3 className="fw-bold mb-0 fs-4">Featured title</h3>
              <p>
                Paragraph of text beneath the heading to explain the heading.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

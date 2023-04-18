import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./assets/index.css";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import Signin from "./Signin";
import Signup from "./Signup";
import Home from "./Home";
import Busqueda from "./Busqueda";
import Profile from "./Profile";
import InfoLibro from "./InfoLibro";
import Biography from "./Biography";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "signin",
    element: <Signin />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
  {
    path: "home",
    element: <Home />,
  },
  {
    path: "busqueda",
    element: <Busqueda />,
  },
  {
    path: "profile",
    element: <Profile />,
  },
  {
    path: "infoLibro",
    element: <InfoLibro />
  },
  {
    path: "biography",
    element: <Biography />
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

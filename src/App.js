import React from "react";
import { Routes, Route } from "react-router-dom";
import Welcome from "./Welcome";
import Signin from "./Signin";
import Signup from "./Signup";
import Home from "./Home";
import Busqueda from "./Busqueda";
import Profile from "./Profile";
import Library from "./Library";
import InfoJuegos from "./InfoJuegos";
import InfoLlamas from "./InfoLlamas";
import InfoSinsajo from "./InfoSinsajo";
import Biography from "./Biography";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/home" element={<Home />} />
      <Route path="/busqueda" element={<Busqueda />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/library" element={<Library />} />
      <Route path="/infoJuegos" element={<InfoJuegos />} />
      <Route path="/infoLlamas" element={<InfoLlamas />} />
      <Route path="/infoSinsajo" element={<InfoSinsajo />} />
      <Route path="/biography" element={<Biography />} />
    </Routes>
  );
}

export default App;

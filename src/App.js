import { BrowserRouter, Routes, Route } from "react-router-dom";
import Biography from "./Biography";
import Busqueda from "./Busqueda";
import Home from "./Home";
import InfoJuegos from "./InfoJuegos";
import InfoLlamas from "./InfoLlamas";
import InfoSinsajo from "./InfoSinsajo";
import Profile from "./Profile";
import Signin from "./Signin";
import Signup from "./Signup";
import Welcome from "./Welcome";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/busqueda" element={<Busqueda />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/infoJuegos" element={<InfoJuegos />}></Route>
        <Route path="/infoLlamas" element={<InfoLlamas />}></Route>
        <Route path="/infoSinsajo" element={<InfoSinsajo />}></Route>
        <Route path="/biography" element={<Biography />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

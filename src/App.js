import { HashRouter, Routes, Route } from "react-router-dom";
import PokemonInfo from "./components/PokemonInfo";
import Pokemons from "./components/Pokemons";
import Login from "./components/Login";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />

          <Route element={<ProtectedRoutes />}>
            <Route path="/Pokemons" element={<Pokemons />} />
            <Route path="/pokemons/:id" element={<PokemonInfo />} />
          </Route>
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;

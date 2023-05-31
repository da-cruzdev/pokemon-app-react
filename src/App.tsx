import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PokemonList from "./pages/pokemon-list";
import PokemonsDetail from "./pages/pokemon-detail";
import React from "react";
import PageNotFound from "./pages/page-not-found";
import PokemonEdit from "./pages/pokemon-edit";
import PokemonAdd from "./pages/pokemon-add";
import Login from "./pages/login";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <Router>
      <nav>
        <div className="nav-wrapper blue">
          <Link to="/" className="brand-logo center">
            Pokédex
          </Link>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/pokemons">Pokemons</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<PokemonList />} />
          <Route path="/pokemons" element={<PokemonList />} />
          <Route path="/pokemon/add" element={<PokemonAdd />} />
          <Route path="/pokemons/:id" element={<PokemonsDetail />} />
          <Route path="/pokemons/edit/:id" element={<PokemonEdit />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

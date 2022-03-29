import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import PokemonCard from "./PokemonCard";
import { useNavigate } from "react-router-dom";
import "../styles/stylesPokemons.css";

const Pokemons = () => {
  const userName = useSelector((state) => state.userName);
  const navigate = useNavigate ();

  const [pokemons, setPokemons] = useState([]);
  const [types, setTypes] = useState([])
  const [pokemonName, setPokemonName] = useState([]);

  const [page, setPage] = useState(1);
  const itemsNumber = 12;
  const lastIndex = page * itemsNumber;
  const firstIndex = lastIndex-itemsNumber;
  const pokemonPaginated = pokemons?.slice(firstIndex, lastIndex)
  const totalPages = Math.ceil(pokemons?.length/itemsNumber)
  const pagesNumbers = [];

  for (let i = 1; i<=totalPages; i++){
    pagesNumbers.push(i)
  }
  

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1126")
        .then((res) => setPokemons(res.data.results));
    
    axios.get(`https://pokeapi.co/api/v2/type/`)
        .then(res => setTypes(res.data.results));
  }, []);

  const submit = e => {
      e.preventDefault();
      navigate(`/pokemons/${pokemonName}`)
  }

  const handleLocation = (e) => {
    axios.get(e.target.value)
        .then(res => setPokemons(res.data.pokemon))
  }
  console.log(pokemons)

  return (
    <div>
      <h1 className="title">Pokemons</h1>
      <p className="user-name">Welcome {userName}</p>
      <div className="type">
          <select className="type-option" onChange={handleLocation} name="" id="">
              <option>Select Pokemon Type</option>
              {
                  types.map(type =>(
                    <option key={type.url} value={type.url}>
                        {type?.name}
                    </option>
                  ))
              }
          </select>
      </div>
      <form className="input-container" onSubmit={submit}>
          <input
            placeholder='Type a Pokemon Name'
            className="input"
            type="text" 
            id="pokemon-name"
            value={pokemonName}
            onChange={e => setPokemonName(e.target.value)}
          />
          <button className="button-login">Search</button>
      </form>
      <div>
        <div className="test-container">
          {pokemonPaginated.map((pokemon) => (
                <PokemonCard 
                    pokemonUrl={pokemon.url ? pokemon.url : pokemon.pokemon?.url} 
                    key={pokemon.url ? pokemon.url : pokemon.pokemon?.url}
                />))
          }
        </div>
        
        <button
          className="page" 
          onClick={() => setPage(page-1)}
          disabled={page <= 1}
        >
          Previous Page
        </button>
        <span className="numbers"> {page} / {totalPages} </span>
        <button
          className="page" 
          onClick={() => setPage(page+1)}
          disabled={page >= totalPages}
        >
          Next Page
        </button>
        <div className="pages-number">
          {pagesNumbers.map(page => (
            <button className="number-pages" onClick={() => setPage(page)} key={page}>
              {page}
            </button>))}
        </div>
      </div>
    </div>
  );
};

export default Pokemons;
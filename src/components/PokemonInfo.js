import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import logo from '../assets/logo.png';
import '../styles/stylesPokemonInfo.css'

const PokemonInfo = () => {

    const {id} = useParams();
    const [pokemon, setPokemon] = useState([])

    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(res => setPokemon(res.data));
    },[id])


  return (
    <div className="full">
      <div className="pokemon-info"><img src={logo} alt="" /></div>
      <div className="pokemon-card">
        <h1 className='pokemon-name'>{pokemon.name?.toUpperCase()}</h1>
        <img src={pokemon.sprites?.other.dream_world.front_default} alt="" />
        <p className='properties'><b>Height: </b>{pokemon.height} Hectograms</p >
        <p className='properties'><b>Weight: </b>{pokemon.weight} Decimeters</p>
        <p className='properties'><b>Type: </b>{pokemon.types?.[0].type.name}</p>
        <p className='properties'><b>Base Experience: </b>{pokemon.base_experience} Points</p>
      </div>
    </div>
  ); 
};

export default PokemonInfo;

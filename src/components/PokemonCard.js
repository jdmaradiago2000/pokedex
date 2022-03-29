import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/stylesCard.css'

const PokemonCard = ({pokemonUrl}) => {

    const [pokemon, setPokemon] = useState({})

    useEffect(()=>{
        axios.get(pokemonUrl)
            .then(res => setPokemon(res.data));
    }, [pokemonUrl])

    return (
        <div className="pokemon-card">
            <ul className='u-list'>
                <li className='list'>
                    <Link to={`/pokemons/${pokemon.id}`}>
                        <h1 className='pokemon-name'>{pokemon.name?.toUpperCase()}</h1>
                    </Link>
                    <img
                        className='image'
                        src={pokemon.sprites?.other.dream_world.front_default}
                        alt="" 
                    />
                    <p className='properties'><b>Height: </b>{pokemon.height} Hectograms</p>
                    <p className='properties'><b>Weight: </b>{pokemon.weight} Decimeters</p>
                    <p className='properties'><b>Type: </b>{pokemon.types?.[0].type.name}</p>
                </li>
            </ul>
           
        </div>
    );
};

export default PokemonCard;
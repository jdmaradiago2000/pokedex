import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../styles/stylesLogin.css";
import pokedex from '../assets/pokedex.png'
import pie from '../assets/pie.png'


const Login = () => {
  const [userName, setUserName] = useState("");
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    console.log(userName);
    dispatch({
      type: "GET_USERNAME",
      payload: userName
    });
    setUserName("");
    navigate("/pokemons");
  };

  return (
    <div className="login">
      <figure className="pokedex">
        <img src={pokedex} alt="poke" />
      </figure>
      <h1 className="salute">¡Hello Pokemon Trainer!</h1>
      <p className="name">In order to start, give me your name</p>
      <form action="" onSubmit={submit}>
        <input
          className="input"
          placeholder='Type your name'
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button className="button-login">Start</button>
      </form>
      <div className="foot">
        <img src={pie} alt="foot"/>
      </div>
    </div>
  );
};

export default Login;
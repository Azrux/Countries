import { useState, React } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

/*
Debe contener un formulario para registrar una nueva actividad:

  -Nombre
  -Dificultad (1 a 5)
  -Duración
  -Temporada (Estaciones)
  -En qué países se puede desarrollar (Más de una opción)
  -Botón de submit

El form debe estar controlado con JS.
*/

export default function AddActivity() {

  const dispatch = useDispatch();

  const [input, setInput] = useState({
    name: '',
    difficulty: '',
    duration: '',
    season: '',
    country: []
  });

  function handleInputChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(AddActivity(e))
    setInput('')
  }

  return (
    <div>
      <label>Name:</label>
      <input name='name' value={input.name} onChange={handleInputChange}></input>
      <label>Difficulty:</label>
      <input name='difficulty' value={input.difficulty} onChange={handleInputChange}></input>
      <label>Duration:</label>
      <input name='duration' value={input.duration} onChange={handleInputChange}></input>
      <label>Season:</label>
      <input name='season' value={input.season} onChange={handleInputChange}></input>
      <label>Country:</label>
      <input name='country' value={input.country} onChange={handleInputChange}></input>
      <button onClick={(e) => handleSubmit(e)}>Send</button>
    </div>
  )
}
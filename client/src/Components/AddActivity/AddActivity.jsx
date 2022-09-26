import { useState, React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../../Redux/Actions/countryActions";
import { addActivities } from "../../Redux/Actions/activityActions";
import { useHistory } from 'react-router-dom'

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
  const history = useHistory()
  const countries = useSelector(state => state.countries)
  const [input, setInput] = useState({
    name: '',
    difficulty: '',
    duration:0,
    season: 0,
    country:''
  })
  const hours = [];
    for(let i = 1; i <= 24; i++) {
      hours.push(i)
    }

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addActivities(input))
    history.push('/home')
  }

  useEffect(() => {
    dispatch(getCountries())
  }, [dispatch])

  return (
    <form onSubmit={handleSubmit}>

      <p>Add a new activity</p>

      <label>Activity name:</label>
        <input
          type="text" 
          placeholder="Activity name... " 
          name="name"
          onChange={handleChange}
          value={input.name} >
        </input>

      <p>Choose the difficulty from 1 to 5 (Being 1 the easiest and 5 the hardest):</p>
      <select name='difficulty' onChange={handleChange} value={input.difficulty}>
        <option value="-">-</option>
        <option value='1'>1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
  
      <p>Choose the activity duration:</p>
      <select name='duration' onChange={handleChange} value={input.duration}>
        <option value='-'>-</option>
        {
          hours.map(h => {
            return(
              h === 1 ?
              <option value={h} key={h}>{h} hour</option> :
              <option value={h} key={h}>{h} hours</option>
            )
          })
        }
      </select>

      <p>Choose the season:</p>
      <select name='season' onChange={handleChange} value={input.season}>
        <option value="-">-</option>
        <option value="All">All seasons</option>
        <option value="Autumn">Autumn</option>
        <option value="Winter">Winter</option>
        <option value="Spring">Spring</option>
        <option value="Summer">Summer</option>
      </select>

      <p>Choose the country:</p>
      <select name='country' onChange={handleChange} value={input.country}>
      <option value="-">-</option>
        {
          countries.map(c => {
            return(
              <option value={c.id} key={c.id}>{c.name}</option>
            )
          })
        }
      </select>
      
        <input type='submit' value='Send'/>
    </form>
  )

}
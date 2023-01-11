import { useState, React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../../Redux/Actions/countryActions";
import { addActivities } from "../../Redux/Actions/activityActions";
import { Link, useHistory } from 'react-router-dom'
import style from './AddActivity.module.css'
import { orderName } from "../../Redux/Actions/sortActions";

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
  const history = useHistory();
  const countries = useSelector(state => state.countries).sort(orderName)
  const countryDetail = useSelector(state => state.countryDetail)
  const [error, setError] = useState({})
  const [input, setInput] = useState({
    name: '',
    difficulty: 0,
    duration:0,
    season: '',
    country:''
  })
  
  const hours = [];
    for(let i = 1; i <= 24; i++) {
      hours.push(i)
    }

    function validate(input) {
      let error = {}
      if (!input.name) { error.name = "Name required"}
      if (input.name.length < 3 ) { error.name = "The name must have at least 3 characters"}
      if (!input.difficulty || input.difficulty === '-') { error.difficulty = "Choose a difficulty"}
      if (!input.duration || input.duration === '-') { error.duration = "Choose a duration"}
      if (!input.season || input.season === '-') { error.season = "Choose a season"}
      if (!input.country || input.country === '-') { error.country = "Choose a country"}
      if (input.name) {
        for(let i in input.name) {
          if(input.name.charCodeAt(i) < 65 || input.name.charCodeAt(i) > 122) {
            if(input.name.charCodeAt(i) !== 32) {
              error.name = "The name must only contain alphabetic characters"
            }
          }
        }
      }
      return error;
    }
  
  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
    setError(validate({
      ...input,
      [e.target.name]: e.target.value
    }))
  }

  function handleSubmit(e) {
    e.preventDefault();
      if(!input.name || !input.season || !input.duration || !input.difficulty) {
        alert('Please, complete all the fields correctly')
      }
      if(error.hasOwnProperty('name') || error.hasOwnProperty('duration') || error.hasOwnProperty('difficulty') || error.hasOwnProperty('season') || error.hasOwnProperty('country')) {
        alert('Please, complete all the fields correctly')
      } else {
      dispatch(addActivities(input))
      history.push('/home')
      }
  }

  useEffect(() => {
    dispatch(getCountries())
  }, [dispatch])

  return (
    <div className={style.background}>
      <form onSubmit={handleSubmit} className={style.backgroundSquare}>

        <p className={style.addAct}>Add a new activity</p>

        <label className={style.actName}>Activity name:</label>
          <input
            type="text" 
            placeholder="Activity name... " 
            name="name"
            onChange={handleChange}
            value={input.name} 
            className={style.actNameInput}>
          </input>
          {error ? <p className={style.error}>{error.name}</p> : null}

        <div className={style.choose}>Choose the difficulty from 1 to 5<p className={style.anotherChoose}>(Being 1 the easiest and 5 the hardest):</p></div> 
        <select className={style.chooseInput} name='difficulty' onChange={handleChange} value={input.difficulty}>
          <option value="-">-</option>
          <option value='1'>1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        {error ? <p className={style.error}>{error.difficulty}</p> : null}

        <p className={style.chooseAct}>Choose the activity duration:</p>
        <select className={style.chooseActInput} name='duration' onChange={handleChange} value={input.duration}>
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
        {error ? <p className={style.error}>{error.duration}</p> : null}

        <p className={style.chooseSeason}>Choose the season:</p>
        <select className={style.chooseSeasonInput} name='season' onChange={handleChange} value={input.season}>
          <option value="-">-</option>
          <option value="All">All seasons</option>
          <option value="Autumn">Autumn</option>
          <option value="Winter">Winter</option>
          <option value="Spring">Spring</option>
          <option value="Summer">Summer</option>
        </select>
        {error ? <p className={style.error}>{error.season}</p> : null}

        <p className={style.chooseSeason}>Choose the country:</p>
        <select className={style.chooseSeasonInput} name='country' onChange={handleChange} >
        <option value="-">-</option>
          {
            countries.map(c => {
              return(
                <option value={c.id} key={c.id} selected={c.id === countryDetail.id ? true : false} >{c.name}</option>
              )
            })
          }
        </select>
        {error ? <p className={style.error}>{error.country}</p> : null}

          <input className={style.submit} type='submit' value='Send'/>
      </form>
      <Link to='/home' className={style.homeButton} >
        Home
      </Link>
    </div>
  )

}
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchByContinent, sortByName, sortByPopulation } from "../../../Redux/Actions/sortActions.js";
import { getCountries } from '../../../Redux/Actions/countryActions.js'
import style from '../Styles/SortBy.module.css'

/*
Deben ordenar la información en orden ascendente o descendente:
  
  -Alfabético
  -Población

Debe tene run filtro por continente.
*/

export default function SortBy() {

  const [order, setOrder] = useState("");
  //const [continent, setContinent] = useState("");
  const countries = useSelector(state => state.countries)
  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (continent === 'all') {
  //     setContinent('')
  //   } else {
  //     dispatch(searchByContinent(continent))
  //   }
    
  // }, [continent, dispatch]);

  function onChange(e) {
    
    dispatch(searchByContinent(e.target.value))
  }

    useEffect(() => {
      if (order === '-') dispatch(getCountries());
      if (order === "a-z" || order === "z-a") dispatch(sortByName(order));
      if (order === "population↑" || order === "population↓") dispatch(sortByPopulation(order));
    }, [ order, dispatch]);

  return(
    <div className={style.container}>
      <p className={style.sortBy}>Sort by: </p>
        <select onChange={(e) => setOrder(e.target.value)} className={style.select}>
        <option className={style.option} value="-" >-</option>
          <option className={style.option} value="a-z" >A-Z</option>
          <option className={style.option} value="z-a" >Z-A</option>
          <option className={style.option} value="population↑" >Population ↑</option>
          <option className={style.option} value="population↓" >Population ↓</option>
        </select>

      <p className={style.searchBy}>Search by continent: </p>
        <select onChange={onChange} name='continent' className={style.select} >
            <option className={style.option} value="all">All</option>
            <option className={style.option} value="North America">North America</option>
            <option className={style.option} value="South America">South America</option>
            <option className={style.option} value="Africa">Africa</option>
            <option className={style.option} value="Asia">Asia</option>
            <option className={style.option} value="Europe">Europe</option>
            <option className={style.option} value="Oceania">Oceania</option>
            <option className={style.option} value="Antarctica">Antarctica</option>
          </select>
    </div>
  )
}
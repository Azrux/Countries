import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { searchByContinent, sortByName, sortByPopulation, sortByArea } from "../../../Redux/Actions/sortActions.js";
import { getCountries, pagination } from '../../../Redux/Actions/countryActions.js'
import s from '../Styles/SortBy.module.css'

/*
Deben ordenar la información en orden ascendente o descendente:
  
  -Alfabético
  -Población

Debe tene run filtro por continente.
*/

export default function SortBy() {

  const [order, setOrder] = useState("");
  const dispatch = useDispatch();

  function onChange(e) {
    dispatch(pagination(1))
    dispatch(searchByContinent(e.target.value))
  }

    useEffect(() => {
      if (order === '-') dispatch(getCountries());
      if (order === "a-z" || order === "z-a") dispatch(sortByName(order));
      if (order === "population↑" || order === "population↓") dispatch(sortByPopulation(order));
      if (order === "areaAsc" || order === "areaDesc") dispatch(sortByArea(order));
    }, [order, dispatch]);

  return(
    <div className={s.container} >
      <div>
        <p className={s.sort} >Sort by: </p>
        <select onChange={(e) => setOrder(e.target.value) } className={s.select} >
          <option value="-" >-</option>
          <option value="a-z" >A-Z</option>
          <option value="z-a" >Z-A</option>
          <option value="population↑" >Population ↑</option>
          <option value="population↓" >Population ↓</option>
          <option value="areaAsc" >Area ↑</option>
          <option value="areaDesc" >Area ↓</option>
        </select>
      </div>

      <div>
        <p className={s.continent} >Search by continent: </p>
        <select onChange={onChange} name='continent' className={s.select} >
          <option value="all">All</option>
          <option value="North America">North America</option>
          <option value="South America">South America</option>
          <option value="Africa">Africa</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
          <option value="Antarctica">Antarctica</option>
        </select>
      </div>

    </div>
  )
}
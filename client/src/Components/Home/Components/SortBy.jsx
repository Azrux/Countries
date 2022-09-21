import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { searchByContinent, sortByName, sortByPopulation } from "../../../Redux/Actions/sortActions.js";

/*
Deben ordenar la información en orden ascendente o descendente:
  
  -Alfabético
  -Población

Debe tene run filtro por continente.
*/

export default function SortBy() {

  const [order, setOrder] = useState("");
  const [continent, setContinent] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (continent === 'all') {
      setContinent('')
    } else {
      dispatch(searchByContinent(continent))
    }
    
  }, [continent, dispatch]);

    useEffect(() => {

      if (order === '-') dispatch(searchByContinent(continent));
      if (order === "a-z" || order === "z-a") dispatch(sortByName(order));
      if (order === "population↑" || order === "population↓") dispatch(sortByPopulation(order));
    }, [continent, order, dispatch]);

  return(
    <>
      <p>Sort by:</p>
        <select onChange={(e) => setOrder(e.target.value)}>
        <option value="-" >-</option>
          <option value="a-z" >A-Z</option>
          <option value="z-a" >Z-A</option>
          <option value="population↑" >Population ↑</option>
          <option value="population↓" >Population ↓</option>
        </select>
      <p>Search by continent:</p>
        <select onChange={(e) => setContinent(e.target.value)}>
            <option value="all">All</option>
            <option value="North America">North America</option>
            <option value="South America">South America</option>
            <option value="Africa">Africa</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
            <option value="Unknown">Unknown</option>
          </select>
    </>
  )
}
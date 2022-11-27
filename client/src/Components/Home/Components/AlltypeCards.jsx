import React from "react";
import { useSelector } from 'react-redux';
import AllCountries from "./AllCountries";
import ContinentCards from "./ContinentCards";
import { Loading } from "./Loading";
import SearchedCountry from "./SearchedCountry";

/*
Debe mostrar las primeras 9 banderas que se encuentren.
Cada card debe mostrar:

  -IMAGEN de la bandera
  -NOMBRE del país
  -CONTINENTE
*/

export default function AlltypeCards() {

  const countries = useSelector(state => state.countries); //Trae todas las cards
  const country = useSelector(state => state.country); //Trae card buscada
  const continents = useSelector(state => state.continents); //Trae card filtradas por continente

  if(countries.length === 0 && country.length === 0 && continents.length === 0) {
    return <Loading />
  }
  if(country.name) {
    return <SearchedCountry />
  }
  if(continents.length) { 
    return <ContinentCards /> 
  } 
  if(!continents.length && countries) { 
    return <AllCountries /> 
  }

}
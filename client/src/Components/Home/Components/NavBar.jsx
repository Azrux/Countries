import React from "react";
import { Link } from "react-router-dom";
import logo from '../../../imagenes/country-flags.png'
import SearchBar from "./SearchBar";
import { useDispatch } from "react-redux";
import s from '../Styles/NavBar.module.css'
import { searchCountry } from "../../../Redux/Actions/countryActions";

/*
Debe contener:

  -El logo de la app
  -El título de la app
  -El SearchBar
*/

export default function NavBar() {

  const dispatch = useDispatch();

  return (
  <div className={s.container}>
    <Link to='/home' onClick={() => dispatch(searchCountry(''))} className={s.link} >
      <img src={logo} alt='' className={s.img} />
      <h1 className={s.title}>Countries!</h1>
    </Link>
    <SearchBar className={s.searchBar} />
  </div>)
}
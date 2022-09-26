import React from "react";
import logo from '../../../imagenes/country-flags.png'
import SearchBar from "./SearchBar";
import style from '../Styles/NavBar.module.css'

/*
Debe contener:

  -El logo de la app
  -El título de la app
  -El SearchBar
*/

export default function NavBar() {

  return (<div className={style.navBar}>
    <img src={logo} alt='' className={style.logo}/>
    <h1 className={style.title}>Countries!</h1>
    <SearchBar className={style.searchBar}></SearchBar>
  </div>)
}
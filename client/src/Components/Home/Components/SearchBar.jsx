import { useState } from "react";
import { useDispatch } from "react-redux";
import style from '../Styles/SearchBar.module.css'
import searchImg from '../../../imagenes/searchbutton.jpg'
import { searchCountry } from "../../../Redux/Actions/countryActions";

/*
Debe buscar países por nombre
*/

export default function SearchBar() {

  const [ input, setInput ] = useState('');
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(searchCountry(input));
    setInput('')
  };

  return (
    <div className={style.searchBar}>
      <input 
        type='text'
        value={input}
        placeholder='Search country...'
        name='input'
        onChange={(e)=>setInput(e.target.value)}
        className={style.input}
      />
        <img 
          src={searchImg} alt='' 
          className={style.searchButton} 
          onClick={() => onClickHandler()}
        />
      </div>
  )
}
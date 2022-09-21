import React from 'react';
import { Link } from 'react-router-dom';
import style from '../Styles/CountryCard.module.css'



export default function CountryCard({flag, name, continents, id}) {
  
  return (
    <div className={style.countryCards} >
    <Link className={style.link} to={`/detail/${id}`} >
      <div className={style.card}>
          <img src={flag} alt='' className={style.cardImage} />
          <div className={style.cardDetail}>
            <p className={style.cardName}>{name}</p>
            <p className={style.cardContinent}>{continents}</p>
          </div>
      </div>
    </Link>
  </div>
);
}
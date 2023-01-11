import React from "react";
import { Link } from "react-router-dom";
import s from '../Styles/CountryCard.module.css'

export default function CountryCard({ flag, name, continents, id }) {
  
  return (
    <div className={s.container} >
      <Link to={`/detail/${id}`} className={s.link} >
        <div className={s.card} >
            <img src={flag} alt="" className={s.img} />
          <div className={s.info}>
            <p className={s.name}>{name}</p>
            <p className={s.continent}>{continents}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

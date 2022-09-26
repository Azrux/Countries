import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { getCountryById, searchCountry } from "../../../Redux/Actions/countryActions";
import ActivityDetail from "../../ActivityDetail/ActivityDetail";
import style from '../Styles/CountryDetail.module.css'

/*
Debe mostrar los detalles del país al clickear uno del home.
Debe contener:
  
  -IMAGEN de la bandera
  -NOMBRE del país
  -CÓDIGO de país (3 LETRAS)
  -CONTINENTE 
  -CAPITAL 
  -SUBREGIÓN 
  -ÁREA (km2/millones de km2)
  -POBLACIÓN
  -ACTIVIDADES TURÍSTICAS

  
*/

export default function CountryDetail() {
  
  const {id} = useParams();
  const countryDetail = useSelector(state => state.countryDetail);
	const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getCountryById(id));
  }, [dispatch, id])

  return (
    <div className={style.backgroundImg}>
      <div className={style.flagSquare}></div>
        <img src={countryDetail.flag} alt='' className={style.flag} />

      <div className={style.nameContainer}>
        <p className={style.name} >{countryDetail.name}</p>
      </div>

      <div className={style.infoContainer} >
        <div className={style.info}>
          <p className={style.id} >{countryDetail.id}</p>
          <p className={style.capital} ><b>Capital:</b> {countryDetail.capital}</p>
          <p className={style.continent} ><b>Continent:</b> {countryDetail.continents}</p>
          <p className={style.population} ><b>Population:</b> {countryDetail.population}</p>
          <p className={style.area} ><b>Area: </b>{countryDetail.area}km2</p>
        </div>

        <div className={style.activitiesContainer}>
          <p className={style.activities} >Activities</p>
          <ActivityDetail activities={countryDetail.activities} />
         </div>

    </div>
      <Link to='/home' className={style.link} onClick={() => dispatch(searchCountry(''))}>
        Back to Home
      </Link>

	</div>
)
}
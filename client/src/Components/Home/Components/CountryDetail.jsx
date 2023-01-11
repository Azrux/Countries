import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getCountryById } from "../../../Redux/Actions/countryActions";
import { searchByContinent } from "../../../Redux/Actions/sortActions";
import ActivityDetail from "../../ActivityDetail/ActivityDetail";
import s from "../Styles/CountryDetail.module.css";
import { Loading } from "./Loading";

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
  const { id } = useParams();
  const countryDetail = useSelector((state) => state.countryDetail);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountryById(id));
  }, [dispatch, id]);

  if (countryDetail.length === 0 || countryDetail.id !== id) {
    return <Loading />;
  } else {
    return (
      <div className={s.container}>
        <div className={s.nameContainer}>
          <p className={s.name}>{countryDetail.name}</p>
        </div>

          <img src={countryDetail.flag} alt="" className={s.img} />

        <div className={s.dataContainer}>
          <div>
            <p  className={s.id}>{countryDetail.id}</p>
            <p>
              <b>Capital:</b> {countryDetail.capital}
            </p>
            <p>
              <b>Continent:</b> {countryDetail.continents}
            </p>
            <p>
              <b>Population:</b> {countryDetail.population}
            </p>
            <p>
              <b>Area: </b>
              {countryDetail.area}km2
            </p>
          </div>

          <div className={s.activitiesContainer}>
            <p className={s.activities}>Activities</p>
            <ActivityDetail activities={countryDetail.activities} />
          </div>
        </div>
        <Link to="/home" className={s.link} onClick={() => dispatch(searchByContinent("all"))}>
          Back to Home
        </Link>
      </div>
    );
  }
}

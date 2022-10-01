import { useDispatch, useSelector } from "react-redux";
import CountryCard from "./CountryCard";
import style from  '../Styles/SearchedCountry.module.css'
import { searchCountry } from "../../../Redux/Actions/countryActions";



export default function SearchedCountry() {

  const country = useSelector(state => state.country);
  const dispatch = useDispatch();

  if(country.name) {

    return(
      <>
      <div className={style.back}>
        <CountryCard 
          key={country.id}
          id={country.id}
          flag={country.flag}
          name={country.name}
          continents={country.continents}
        />
      </div>
        <button onClick={() => dispatch(searchCountry(''))} className={style.homeButton} >
            Home
        </button>
      </>
    )
  }
}
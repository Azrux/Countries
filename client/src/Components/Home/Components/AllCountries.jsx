import { useSelector } from "react-redux"
import CountryCard from "./CountryCard"
import style from  '../Styles/CountryCards.module.css'
import Pagination from "./Pagination";

export default function AllCountries(){

  const currentPage = useSelector(state => state.currentPage)
  const countries = useSelector(state => state.countries);

  if(currentPage === 0) {
    const firstCountries = countries.slice(0, 9)
      return(
        <>
          <div className={style.countryCards} >
            {
              firstCountries.map((c) => ( 
                <CountryCard
                  key={c.id}
                  id={c.id}
                  flag={c.flag}
                  name={c.name}
                  continents={c.continents}
                />
              ))
            }
          </div>
          <Pagination />
        </>
      )
  } else {
    const filteredCountries = countries.slice(currentPage, currentPage + 10)
    return (
      <>
        <div className={style.countryCards}>
          {
            filteredCountries.map((c) => ( 
              <CountryCard
                key={c.id}
                id={c.id}
                flag={c.flag}
                name={c.name}
                continents={c.continents}
              />
            ))
          }
        </div>
        <Pagination />
      </>
    )
  }
}

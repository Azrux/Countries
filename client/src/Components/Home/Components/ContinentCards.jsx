import { useSelector } from "react-redux"
import CountryCard from "./CountryCard"
import style from  '../Styles/CountryCard.module.css'
import Pagination from "./Pagination";

export default function ContinentCards() {

  const currentPage = useSelector(state => state.currentPage)
  const continents = useSelector(state => state.continents);

  if(currentPage === 0) {
    const firstCountries = continents.slice(0, 9)
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
    const filteredCountries = continents.slice(currentPage, currentPage + 10)
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
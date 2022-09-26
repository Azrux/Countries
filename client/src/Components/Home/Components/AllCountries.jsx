import { useSelector } from "react-redux"
import CountryCard from "./CountryCard"
import Pagination from "./Pagination";

export default function AllCountries(){

  const currentPage = useSelector(state => state.currentPage)
  const countries = useSelector(state => state.countries);

  return(<div>
    {// eslint-disable-next-line
    countries.length > 0 ? countries.map((c, i) =>{
    if(currentPage === 1 & i < 9){
      return (
        <>
          <CountryCard 
            key={c.id} 
            id={c.id}
            flag={c.flag}
            name={c.name}
            continents={c.continents}     
          />
        </>
      )
    } else if(currentPage !== 1 && i >= ( (currentPage - 1) * 10) - 1 && (i < (currentPage * 10) - 1)){
      return (
        <>
        <CountryCard 
          key={c.id} 
          id={c.id}
          flag={c.flag}
          name={c.name}
          continents={c.continents}     
        />
      </>
      )
      }
    }) : (<p>Please, refresh de actual page</p>)
    }
    <Pagination />
  </div>
)
}

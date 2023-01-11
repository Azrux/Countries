import { useSelector } from "react-redux"
import CountryCard from "./CountryCard"
import s from '../Styles/AllCountries.module.css'

export default function ContinentCards() {

  const currentPage = useSelector(state => state.currentPage)
  const continents = useSelector(state => state.continents);

  return(
    <div  className={s.container}>
      {// eslint-disable-next-line
      continents.length > 0 ? continents.map((c, i) =>{
      if(currentPage === 1 & i < 9){
        return (
          <div>
            <CountryCard 
              key={c.id} 
              id={c.id}
              flag={c.flag}
              name={c.name}
              continents={c.continents}     
            />
          </div>
        )
      } else if(currentPage !== 1 && i >= ( (currentPage - 1) * 10) - 1 && (i < (currentPage * 10) - 1)){
        return (
          <div>
            <CountryCard 
              key={c.id} 
              id={c.id}
              flag={c.flag}
              name={c.name}
              continents={c.continents}     
            />
        </div>
        )
        }
      }) : (<p>Please, refresh de actual page</p>)
      }
    </div>
  )
}
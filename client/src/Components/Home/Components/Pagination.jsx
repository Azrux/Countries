import { useDispatch, useSelector } from "react-redux";
import { pagination } from "../../../Redux/Actions/countryActions";
import style from  '../Styles/CountryCards.module.css'

export default function Pagination() {

  const currentPage = useSelector(state => state.currentPage)
  const countries = useSelector(state => state.countries);
  //const continents = useSelector(state => state.continents)
  const dispatch = useDispatch();

  function nextPage() {
    if (countries.length <= currentPage + 10) {
      dispatch(pagination(currentPage));
    } else {
      dispatch(pagination(currentPage + 10))
    };
  };
  
  function prevPage() {
    if (currentPage < 9) {
      dispatch(pagination(0));
    } else {
      dispatch(pagination( currentPage - 10));
    }
  };
  
  function firstPage() {
    dispatch(pagination(0));
  };
  
  function lastPage() {
    dispatch(pagination(countries.length - 10));
  };

  return(
    <div>
      <button onClick={() => firstPage()} className={style.pageButtons} > {'<<'} </button>
      <button onClick={() => prevPage()} className={style.pageButtons} > {'<'} </button>
      <button onClick={() => nextPage()} className={style.pageButtons} >  {'>'}   </button>
      <button onClick={() => lastPage()} className={style.pageButtons} >  {'>>'} </button>
    </div>
  )
}
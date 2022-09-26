import { useDispatch, useSelector } from "react-redux";
import { pagination } from "../../../Redux/Actions/countryActions";
import style from  '../Styles/CountryCards.module.css'

export default function Pagination() {


  const currentPage = useSelector(state => state.currentPage);
  const countries = useSelector(state => state.countries)
  const dispatch = useDispatch();

  const pages = [];
    for(let i = 1; i <= Math.ceil((countries.length + 1) / 10); i++){
      pages.push(i);
    }   

  function prevPage() {
    if(currentPage !== 1){
      dispatch(pagination(currentPage - 1));
    }
    //window.scroll({top: 0, behavior: 'smooth'});
  }

  function firstPage() {
    if(currentPage !== 1){
         dispatch(pagination(1));
    }
    //window.scroll({top: 0, behavior: 'smooth'});
  }

  function nextPage() {
    if(currentPage !== pages.length) {
         dispatch(pagination(currentPage + 1));
    }
    //window.scroll({top: 0, behavior: 'smooth'});
  }

  function lastPage() {
    if(currentPage !== pages.length) {
         dispatch(pagination(pages.length));
    }
    //window.scroll({top: 0, behavior: 'smooth'});
  }
  
  return(
    <div>
      <button onClick={() => firstPage()} className={style.pageButtons} > {'<<'} </button>
      <button onClick={() => prevPage()} className={style.pageButtons} > {'<'} </button>
      <button onClick={() => nextPage()} className={style.pageButtons} >  {'>'}   </button>
      <button onClick={() => lastPage()} className={style.pageButtons} >  {'>>'} </button>
    </div>
  )
}
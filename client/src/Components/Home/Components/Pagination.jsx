import { useDispatch, useSelector } from "react-redux";
import { pagination } from "../../../Redux/Actions/countryActions";
import style from  '../Styles/Pagination.module.css'

export default function Pagination() {


  const currentPage = useSelector(state => state.currentPage);
  const countries = useSelector(state => state.countries);
  const continents = useSelector(state => state.continents)
  const dispatch = useDispatch();

  const pages = [];
  
  if(continents.length) { 
    for(let i = 1; i <= Math.ceil((continents.length + 1) / 10); i++){
      pages.push(i);
    }  
  } 
  if(!continents.length && countries) { 
    for(let i = 1; i <= Math.ceil((countries.length + 1) / 10); i++){
        pages.push(i);
      }     
  }

  function prevPage() {
    dispatch(pagination(currentPage - 1));
    window.scroll({top: 0, behavior: 'smooth'});
  }

  function firstPage() {
    dispatch(pagination(1));
    window.scroll({top: 0, behavior: 'smooth'});
  }

  function nextPage() {
    dispatch(pagination(currentPage + 1));
    window.scroll({top: 0, behavior: 'smooth'});
  }

  function lastPage() {
    dispatch(pagination((pages.length) / 10));
    window.scroll({top: 0, behavior: 'smooth'});
  }
  
  function handlechange(e) {
    dispatch(pagination(e.target.value));
    window.scroll({top: 0, behavior: 'smooth'});
  }

  return(
    <div>
      <button onClick={() => firstPage()} 
        disabled={currentPage === 1 ? true : false} 
        className={currentPage === 1 ? style.inactiveButton : style.activeButton}> {'<<'} 
      </button>

      <button onClick={() => prevPage()} 
        disabled={currentPage === 1 ? true : false} 
        className={currentPage === 1 ? style.inactiveButton : style.activeButton}> {'<'} 
      </button>

      <select onChange={handlechange} className={style.pageButton}>
        {pages.map(p => {
          return(
            <option value={p} key={p} selected={p === currentPage ? true : false}>{p}</option>
          )
        })}
      </select>

      <button onClick={() => nextPage()} 
        disabled={ currentPage === (continents?.length > 0 ? (Math.ceil(continents.length/10)) : (Math.ceil(countries.length/10)))+1 ? true : false} 
        className={ currentPage === (continents?.length > 0 ? (Math.ceil(continents.length/10)) : (Math.ceil(countries.length/10)))+1 ? style.inactiveButton : style.activeButton}> {'>'} 
      </button>

      <button onClick={() => lastPage()} 
        disabled={currentPage === (continents?.length > 0 ? (Math.ceil(continents.length/10)) : (Math.ceil(countries.length/10)))+1 ? true : false} 
        className={ currentPage === (continents?.length > 0 ? (Math.ceil(continents.length/10)) : (Math.ceil(countries.length/10)))+1 ? style.inactiveButton : style.activeButton}> {'>>'} 
      </button>
    </div>
  )
}
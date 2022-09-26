import { useDispatch, useSelector } from "react-redux";
import { pagination } from "../../../Redux/Actions/countryActions";
import style from  '../Styles/Pagination.module.css'

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
      <button onClick={() => firstPage()} 
        disabled={currentPage === 1 ? true : false} 
        className={currentPage === 1 ? style.inactiveButton : style.activeButton}> {'<<'} 
      </button>

      <button onClick={() => prevPage()} 
        disabled={currentPage === 1 ? true : false} 
        className={currentPage === 1 ? style.inactiveButton : style.activeButton}> {'<'} 
      </button>

      <button onClick={() => nextPage()} 
        disabled={currentPage === (Math.ceil(countries.length/10))+1 ? true : false} 
        className={ currentPage === (Math.ceil(countries.length/10))+1 ? style.inactiveButton : style.activeButton}> {'>'} 
      </button>

      <button onClick={() => lastPage()} 
        disabled={currentPage === (Math.ceil(countries.length/10))+1 ? true : false} 
        className={ currentPage === (Math.ceil(countries.length/10))+1 ? style.inactiveButton : style.activeButton}> {'>>'} 
      </button>
    </div>
  )
}
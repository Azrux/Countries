import React, { useEffect } from 'react';
import NavBar from '../Components/NavBar.jsx';
import { getCountries } from '../../../Redux/Actions/countryActions'
import { useDispatch, useSelector } from "react-redux";
import SortBy from './SortBy.jsx';
import AlltypeCards from './AlltypeCards.jsx';
import style from '../Styles/Home.module.css'


export default function Home() {

  const dispatch = useDispatch();
  const page = useSelector(state => state.currentPage)
  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);


  return (
    <div >
        <NavBar />
      <div>
          <SortBy />
        <div>
      <div className={page === 1 ? style.backgroundOne : style.background}></div>
          <AlltypeCards />
        </div>
      </div>
    </div>
  );
}
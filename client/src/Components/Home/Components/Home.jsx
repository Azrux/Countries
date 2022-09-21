import React, { useEffect } from 'react';
import NavBar from '../Components/NavBar.jsx';
import { getCountries } from '../../../Redux/Actions/countryActions'
import { useDispatch } from "react-redux";
import SortBy from './SortBy.jsx';
import AlltypeCards from './AlltypeCards.jsx';


export default function Home() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);


  return (
    <div>
        <NavBar />
      <div>
          <SortBy />
        <div>
          <AlltypeCards />
        </div>
      </div>
    </div>
  );
}
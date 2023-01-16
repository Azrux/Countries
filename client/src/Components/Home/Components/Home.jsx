import React, { useEffect } from "react";
import NavBar from "../Components/NavBar.jsx";
import { getCountries } from "../../../Redux/Actions/countryActions";
import { useDispatch } from "react-redux";
import SortBy from "./SortBy.jsx";
import AlltypeCards from "./AlltypeCards.jsx";
import s from "../Styles/Home.module.css";
import Pagination from "./Pagination.jsx";

export default function Home() {
  const dispatch = useDispatch();
  //const page = useSelector(state => state.currentPage)
  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  return (
    <div className={s.container}>
      <NavBar />
      <SortBy />
      <AlltypeCards />
      <Pagination />
    </div>
  );
}

import { useSelector } from "react-redux";
import CountryCard from "./CountryCard";
import Pagination from "./Pagination";
import s from "../Styles/AllCountries.module.css";

export default function AllCountries() {
  const currentPage = useSelector((state) => state.currentPage);
  const countries = useSelector((state) => state.countries);

  return (
    <div className={s.container}>
      {
        countries.length > 0 ? (// eslint-disable-next-line
          countries.map((c, i) => {
            if ((currentPage === 1) & (i < 9)) {
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
              );
            } else if (
              currentPage !== 1 &&
              i >= (currentPage - 1) * 10 - 1 &&
              i < currentPage * 10 - 1
            ) {
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
              );
            }
          })
        ) : (
          <p>Please, refresh de actual page</p>
        )
      }
    </div>
  );
}

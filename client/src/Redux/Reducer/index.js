import { CHANGE_PAGE, GET_ALL_COUNTRIES, GET_COUNTRY_BY_ID, SEARCH_BY_CONTINENT, SEARCH_COUNTRY,  SORT_BY_NAME, SORT_BY_POPULATION, SORT_BY_AREA } from "../../Constants/constants.js"
import { orderName, orderPopulation, orderArea } from "../Actions/sortActions.js"



//Fijarse bien esto

export const initialState = {
  countries: [],
  country: [],
  countryDetail: [],
  continents: [],
  currentPage: 1
}

export default function reducer(state = initialState, action){
  switch(action.type){
    case GET_ALL_COUNTRIES: {
      return {
        ...state,
        countries: action.payload
      }
    }
    case SEARCH_COUNTRY: {
      return {
        ...state,
        country: action.payload
      }
    }
    case GET_COUNTRY_BY_ID: {
      return {
          ...state,
          countryDetail: action.payload
      }
    }
    case SORT_BY_NAME: {
      if(action.payload === 'a-z') {
        return {
          ...state,
          countries: state.countries.slice().sort(orderName),
          continents: state.continents.slice().sort(orderName)
        }
      } else {
        return {
          ...state,
          countries: state.countries.slice().sort(orderName).reverse(),
          continents: state.continents.slice().sort(orderName).reverse()
        }
      }
    }
    case SORT_BY_POPULATION: {
      if(action.payload === 'population↑') {
        return {
          ...state,
          countries: state.countries.slice().sort(orderPopulation),
          continents: state.continents.slice().sort(orderPopulation)
          }
      } else {
        return {
          ...state,
          countries: state.countries.slice().sort(orderPopulation).reverse(),
          continents: state.continents.slice().sort(orderPopulation).reverse()
        }
      }
    }
    case SORT_BY_AREA: {
      if(action.payload === 'areaAsc') {
        return {
          ...state,
          countries: state.countries.slice().sort(orderArea),
          continents: state.continents.slice().sort(orderArea)
        }
      } else {
        return {
          ...state,
          countries: state.countries.slice().sort(orderArea).reverse(),
          continents: state.continents.slice().sort(orderArea).reverse()
        }
      }
    }
    case SEARCH_BY_CONTINENT:
      const filteredContinents = [];// eslint-disable-next-line
      state.countries.map(c => {
        if(c.continents === action.payload) {
          filteredContinents.push(c);
        }
      })
      return {
        ...state,
        continents: filteredContinents
      }
    case CHANGE_PAGE : {
      return {
        ...state,
        currentPage: action.payload
      }
    }
    default: {
      return {...state}
    }
  }
}
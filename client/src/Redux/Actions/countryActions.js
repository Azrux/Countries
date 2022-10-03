import axios from 'axios';
import { COUNTRIES_URL, GET_COUNTRY_BY_ID, SEARCH_COUNTRY, GET_ALL_COUNTRIES, CHANGE_PAGE } from '../../Constants/constants.js';

export function getCountries() {
  return function(dispatch){ 
    return axios.get(COUNTRIES_URL)
      .then(res => {
        dispatch({
          type: GET_ALL_COUNTRIES,
          payload: res.data
        })
      })
      .catch(e => {alert(e.response.data)})
  }
}

export function getCountryById(id) {
  return function(dispatch) {
    return axios.get(`${COUNTRIES_URL}/${id}`)
    .then(res => {
      dispatch({
        type: GET_COUNTRY_BY_ID,
        payload: res.data
      })
    })
    .catch(e => {alert(e.response.data)})
  }
}

export function searchCountry(name) {
  return function(dispatch) {
    return axios.get(`${COUNTRIES_URL}?name=${name}`)
    .then(res =>{
      dispatch({
        type: SEARCH_COUNTRY,
        payload: res.data
      })
    })
    .catch(e => {alert(e.response.data)})
  }
}

export function pagination(payload) {
  return {
    type: CHANGE_PAGE,
    payload
  }
}
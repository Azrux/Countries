import axios from 'axios';
import {  GET_COUNTRY_BY_ID, SEARCH_COUNTRY, GET_ALL_COUNTRIES, CHANGE_PAGE, SET_LOADING } from '../../Constants/constants.js';
const {REACT_APP_COUNTRIES_URL} = process.env

export function getCountries() {
  return function(dispatch){ 
    return axios.get(REACT_APP_COUNTRIES_URL)
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
    return axios.get(`${REACT_APP_COUNTRIES_URL}/${id}`)
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
    return axios.get(`${REACT_APP_COUNTRIES_URL}?name=${name}`)
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

export function isLoading(payload){
  return {
      type: SET_LOADING,
      payload
  }
}
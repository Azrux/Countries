import { SEARCH_BY_CONTINENT, SORT_BY_NAME, SORT_BY_POPULATION } from '../../Constants/constants.js'

export function sortByName(payload) {
  return {
      type: SORT_BY_NAME,
      payload
  }
}

export function sortByPopulation(payload) {
  return {
    type: SORT_BY_POPULATION,
    payload
  }
}

export function searchByContinent(payload) {
  return {
    type: SEARCH_BY_CONTINENT,
    payload
  }
}

export function orderName(a, b) {
  if(a.name < b.name) return -1
  if(b.name < a.name) return 1 
  return 0
}

export function orderPopulation(a, b) {
  if(a.population < b.population) return -1
  if(b.population < a.population) return 1 
  return 0
}


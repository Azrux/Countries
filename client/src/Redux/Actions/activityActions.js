import axios from "axios"
const { REACT_APP_ACTIVITIES_URL } = process.env

export function addActivities(payload) {
  return function(){ 
    axios.post(REACT_APP_ACTIVITIES_URL, payload)
      .then(res => {alert(res.data)})
      .catch(e => {alert(e.response.data)})
  }
}
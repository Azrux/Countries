import axios from "axios"
import { ACTIVITIES_URL } from "../../Constants/constants"

export function addActivities(payload) {
  return function(){ 
    axios.post(ACTIVITIES_URL, payload)
      .then(res => {alert(res.data)})
      .catch(e => {alert(e.response.data)})
  }
}
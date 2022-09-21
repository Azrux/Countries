import axios from "axios"
import { ACTIVITIES_URL, GET_ALL_ACTIVITIES } from "../../Constants/constants"

export function getActivities() {
  return  function(dispatch){ 
    return axios.get(ACTIVITIES_URL)
      .then(res => {
        dispatch({
          type: GET_ALL_ACTIVITIES,
          payload: res.data
        })
      })
      .catch(e => {console.log(e)})
  }
}
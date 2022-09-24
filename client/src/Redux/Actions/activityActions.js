import axios from "axios"
import { ACTIVITIES_URL, ADD_ACTIVITY, SELECTED_ACTIVITY } from "../../Constants/constants"

export function addActivities(payload) {
  return  function(dispatch){ 
    return axios.post(ACTIVITIES_URL, payload)
      .then(res => {
        dispatch({
          type: ADD_ACTIVITY,
          payload: res.data
        })
      })
      .catch(e => {console.log(e)})
  }
}
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function ActivityDetail({activities}) {

  const [activity, setActivity] = useState('')

  function onChange(e) {
    if(e !== '-') {
      setActivity(activities.find(a => a.name === e))
    } else {
      setActivity('')
    }
  }

    return (
      <div >
       <select onChange={(e) => {onChange(e.target.value)}}>
        <option value='-'>Choose an activity!</option>
            {activities && activities.map((a) => (
                <option value={`${a.name}`}>{a.name}</option>
              ))
            }
        </select>
        <div>
          { activity ? (<>
          <p>{activity.name}</p>
          <p>Difficulty: {activity.difficulty}</p>
          <p>Duration: {activity.duration}</p>
          <p>Season: {activity.season}</p></>) : (<p>Choose an activity or add a new one!</p>)
          }
        </div>
        <Link to="/activities">Add an activity</Link>
      </div>
    )
  
};
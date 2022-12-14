import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import style from './ActivityDetail.module.css'

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
                <option value={`${a.name}`} key={`${a.id}`}>{a.name}</option>
              ))
            }
        </select>
        <div>
          { activity ? (
          <>
            <p><b>{activity.name}</b></p>
            <p><b>Difficulty: </b> {activity.difficulty}</p>
            <p><b>Duration: </b> {activity.duration === 1 ? `${activity.duration} hour` : `${activity.duration} hours`}</p>
            <p><b>Season: </b> {activity.season}</p>
          </>
          ) : (
            <p>Choose an activity or add a new one!</p>)
          }
        </div>
        <Link to="/activities" className={style.link}>Add an activity</Link>
      </div>
    )
  
};
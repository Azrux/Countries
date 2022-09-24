// import React, { useEffect } from "react";
// import { useState } from "react";
// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import ActivityCard from "../ActivityCard/ActivityCard";

// export default function ActivityDetail({ activities }) {

//   const [input, setInput] = useState('');
//   const [selectedAct, setSelectedAct] = useState('');
//   const [activity, setActivity] = useState(activities)
//   const countries = useSelector(state => state.countryDetail)
  
  // useEffect(() => {
    //   if(input === '-') return( <div>
    //       Choose an activity or add a new one!
    //      </div>
    //   )
    // }, [])
    
    // function handleChange(input) {
      //   setInput(input)
      //   if(e === '-'){
        //     return(
          //       <div>
          //         Choose an activity or add a new one!
          //       </div>
          //     )
          //   } else {
            //      const findActivity = activities.find(a => a.name === e)
    //     return(
      //         <ActivityCard
      //           key={findActivity.id}
      //           name={findActivity.name}
      //           difficulty={findActivity.difficulty}
      //           duration={findActivity.duration}
      //           season={findActivity.season}
      //         />
      //   )}
      // }  

//     useEffect(() => {
//       if(input !== '-') {
//         setSelectedAct(countries.activities.find(a => a.name === input))}
//       console.log(selectedAct)
//     }, [input])

//     return (
//       <div >
//        <select onChange={(e) => {setInput(e.target.value)}}>
//         <option value='-'>Choose an activity!</option>
//             {activities && activities.map((a) => (
//                 <option value={`${a.name}`}>{a.name}</option>
//               ))
//             }
//         </select>
//             {
//               selectedAct ? 
//               (<ActivityCard
//                 key={selectedAct.id}
//                 name={selectedAct.name}
//                 difficulty={selectedAct.difficulty}
//                 duration={selectedAct.duration}
//                 season={selectedAct.season}
//               /> ) : null
//             }
//         <Link to="/activities">Add an activity</Link>
//       </div>
//     )
  
// };
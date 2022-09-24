export default function ActivityCard({ name, difficulty, duration, season }) {

  return (
    <div>
      <p>{name}</p>
      <p>Difficulty: {difficulty}</p>
      <p>Duration: {duration}</p>
      <p>Season: {season}</p>
    </div>
  )
}
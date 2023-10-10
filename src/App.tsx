import './App.css'

export default function App() {
  return (
    <>
      <h1>Pompom</h1>
      <h2>Pomodoro timer</h2>
      <div className="time">25:00</div>
      <div className="flex-container">
        <button className="start-stop">Start</button>
        <button className="reset">Reset</button>
        <button className="skip">Skip</button>
      </div>
    </>
  )
}

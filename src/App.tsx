import * as dayjs from 'dayjs'

import './App.css'

export default function App() {
  // const MAIN_DURATION = 25
  // const BREAK_DURATION = 5
  // const LONG_BREAK_DURATION = 15

  // dayjs() is an immutable wrapper object for Date.prototype
  dayjs().format()

  // Countdown starts at 25 minutes
  // Click on Start to engage the countdown
  // Every second the timer is updated
  // When the timer has reached zero, inform the user then start next phase

  return (
    <>
      <h1>Pompom</h1>
      <img id="logo" src="pompom-placeholder.svg" alt="pompom logo" />
      <h2>Pomodoro timer</h2>
      <div className="time">25:00</div>
      <div className="flex-container">
        <button className="start-stop">Start</button>
        <button className="reset">Reset</button>
        <button className="skip">Skip</button>
      </div>
      <br />
      <label htmlFor="auto">Auto start next timer: </label>
      <input type="checkbox" name="auto" id="auto" />
    </>
  )
}

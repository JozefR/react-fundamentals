// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input
  const userNameInput = React.useRef()
  const [error, setError] = React.useState(null)
  const [userInputValue, lowerInput] = React.useState(null)

  function handleSubmit(event) {
    event.preventDefault()
    var value = userNameInput.current.value
    onSubmitUsername(value)
  }

  function handleErrorChange(event) {
    var value = event.target.value
    const isValid = value === value.toLowerCase()

    setError(isValid ? null : 'Username must be lower case')
  }

  function handleUserInputChange(event) {
    var value = event.target.value
    var lower = value.toLowerCase()
    lowerInput(lower)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="userNameInput">Username:</label>
        <input
          id="userNameInput"
          type="text"
          value={userInputValue}
          onChange={handleUserInputChange}
          ref={userNameInput}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App

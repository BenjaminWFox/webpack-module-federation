import React, { useState, Suspense } from 'react'
import log from './common'
import RemoteRed from './RemoteRed'
import RemoteBlue from './RemoteBlue'

export default function App(): JSX.Element {
  const [clicks, setClicks] = useState(0)

  log();
  
  const handleClick = () => {
    setClicks((c) => c + 1);
  }

  return (
    <>
      <div>
        <h1>Hello React!</h1>
        <h3>Clicked {clicks} times.</h3>
        <button onClick={handleClick}>Click Me</button>
      </div>
      <br />
      <RemoteBlue />
      <br />
      <RemoteRed />
      <br />
    </>
  )
}

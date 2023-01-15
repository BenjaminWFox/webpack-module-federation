import React, { useState } from 'react'
import log from './common'

export default function Component(): JSX.Element {
  const [clicks, setClicks] = useState(0)

  log();
  
  const handleClick = () => {
    setClicks((c) => c + 1);
  }

  return (<div>
    <h1>Hello React!</h1>
    <h3>Clicked {clicks} times.</h3>
    <button onClick={handleClick}>Click Me</button>
  </div>)
}

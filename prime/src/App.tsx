import React, { useState, Suspense } from 'react'
import log from './common'

// const RemoteApp = React.lazy(() => import("app2/App"));
const RemoteApp = React.lazy(() => import('remote/RemoteApp'));

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

      <React.Suspense fallback="loading">
          <RemoteApp>
          </RemoteApp>
      </React.Suspense>
    </>
  )
}

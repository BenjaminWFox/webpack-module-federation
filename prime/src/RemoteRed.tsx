import React from 'react'

const RemoteAppRed = React.lazy(() => import('primeRed/RemoteAppRed'));
// const RemoteAppRed = React.lazy(() => delayForDemo(import('./LazyComponent2')));

export default function RemoteRed(): JSX.Element {
  return (
    <React.Suspense fallback="loading">
      <RemoteAppRed />
    </React.Suspense>
  )
}

function delayForDemo(promise: any) {
  return new Promise(resolve => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}

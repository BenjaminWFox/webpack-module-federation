import React from 'react'

const RemoteAppBlue = React.lazy(() => import('primeBlue/RemoteAppBlue'));
// const RemoteAppBlue = React.lazy(() => delayForDemo(import('./LazyComponent')));

export default function RemoteBlue(): JSX.Element {
  return (
    <React.Suspense fallback="loading">
      <RemoteAppBlue />
    </React.Suspense>
  )
}

function delayForDemo(promise: any) {
  return new Promise(resolve => {
    setTimeout(resolve, 4000);
  }).then(() => promise);
}

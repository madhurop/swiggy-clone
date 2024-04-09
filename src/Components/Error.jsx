import React from 'react'
import { useRouteError } from 'react-router-dom'
function Error() {
    const err = useRouteError()
  return (
    <div>
      <h1>Error</h1>
      <h1>{err.status}</h1>
      <h2>Something get wrong!!!!!</h2>
    </div>
  )
}

export default Error

import React from 'react'
import NavBar from './Header'
import MainBody from './MainBody'

function Screen() {
  return (
    <div className=' w-screen h-screen bg-gray-200'>
      <NavBar/>
      <MainBody/>
    </div>
  )
}

export default Screen

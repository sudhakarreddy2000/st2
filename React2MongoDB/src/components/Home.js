import React from 'react'
import {useLocation} from 'react-router-dom'
export default function Home() {
  const location=useLocation()
  return (
<> 
<h1>Hello {location.state.id} and welcome to the home</h1>
</>
  )
}

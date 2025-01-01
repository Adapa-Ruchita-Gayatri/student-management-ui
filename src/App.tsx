import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import {Header} from './components';
function App() {
  

  return (
    <>
      <div className='app-wrapper'>
        <Header/>
        <Outlet/>
      </div>
    </>
  )
}

export default App

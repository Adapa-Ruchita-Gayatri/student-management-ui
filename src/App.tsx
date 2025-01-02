import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from 'react-router-dom'
import {Header} from './components';
import React from 'react';
import { ToastContainer } from 'react-toastify';

function App() {
  

  return (
    <>
      <div className='app-wrapper'>
        <ToastContainer />
        <Header/>
        <Outlet/>
      </div>
    </>
  )
}

export default App

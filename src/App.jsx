import { useContext, useEffect, useRef, useState } from 'react'
import './App.css'

import { io } from 'socket.io-client'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import Menu from './components/Menu'
import Footer from './components/Footer'


export const socket = io('https://tryst-server.onrender.com')

function App() {

  useEffect(
    () => {
      socket.on('test', (data) => {
        console.log(data)
      })
    }, []
  )

  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
      <Menu />
    </div>
  )
}

export default App
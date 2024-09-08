import React from 'react'
import logo from '../assets/tryst-link-logo.png'

const Navbar = () => {
  return (
    <div className=' bg-[#1b1f29] text-white flex justify-between px-4 py-2'>
      <img className=' h-12' src={logo} alt="Logo" />
      <div className=' flex text-lg font-medium items-center gap-1'>
        <h2>Login</h2>
        <p className=' text-base font-normal'>or</p>
        <h2>Sign up</h2>
      </div>
    </div>
  )
}

export default Navbar
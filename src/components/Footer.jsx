import React from 'react'
import logo from '../assets/tryst-link-logo.png'
import fIcon from '../assets/footer-icon.png'

const Footer = () => {
  return (
    <div className='footer-container flex flex-col text-white gap-6 pb-32 bg-slate-900 '>

      <div className=' py-5 flex items-center px-3 gap-2'>
        <img className=' h-14' src={logo} alt="img" />
        <img className=' h-10' src={fIcon} alt="img" />
      </div>

      <section>
        <ul>
          <li>Home</li>
          <li>Dashboard</li>
          <li>Favourites</li>
          <li>links</li>
          <li>logout</li>
        </ul>
        <ul>
          <li>Locations</li>
          <li>All Escorts</li>
          <li>Backpage Alternative</li>
        </ul>
      </section>

      <section>
        <ul>
          <li>Pages</li>
          <li>Health Related</li>
          <li>Skin Tone</li>
          <li>About </li>
          <li>Find Women</li>
        </ul>
        <ul>
          <li>Right to way</li>
          <li>Short time</li>
          <li>Have To Leave</li>
          <li>Tryst Community</li>
        </ul>
      </section>

    </div>
  )
}

export default Footer
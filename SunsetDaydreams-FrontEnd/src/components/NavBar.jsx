import React from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router'

const NavBar = () => {
  return (
    <div className='flex items-center justify-between py-5 font-medium'>
      <img src={assets.PlaceHolderImage} className='w-36 h-24' alt="Logo" />
      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
        <NavLink to='/' className='flex flex-col items-center gap-1'>
          <p>Home</p>

        </NavLink>
      </ul>
    </div>
  )
}

export default NavBar
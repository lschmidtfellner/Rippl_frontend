import React from 'react'
import ripplLogo from '../assets/rippl_logo.svg'
import hamburger from '../assets/rippl_hamburger.svg'

function Nav() {
  return (
    <div className=' flex justify-between fixed top-0 left-0 w-full bg-green-500 z-10 py-6 px-5'>
      <img src={ripplLogo} alt='Rippl logo' className='h-6'></img>
      <img src={hamburger} className='h-6'></img>
    </div>
  )
}

export default Nav

import React from 'react'
import ripplLogo from '../assets/rippl_logo.svg'
import hamburger from '../assets/rippl_hamburger.svg'

function Nav() {
  return (
    <div className='py-6 flex justify-between'>
      <img src={ripplLogo} alt='Rippl logo' className='h-6'></img>
      <img src={hamburger} className='h-6'></img>
    </div>
  )
}

export default Nav
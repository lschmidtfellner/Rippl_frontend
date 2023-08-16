import React, { useEffect } from 'react';
import ripplLogo from '../assets/rippl_logo.svg';
import hamburger from '../assets/rippl_hamburger.svg';
import closeBtn from '../assets/rippl_close_btn.svg';
import { useNavigate } from 'react-router-dom';

function Nav({ isMenuOpen, setIsMenuOpen, bgColor }) {
  const navigate = useNavigate();

  function menuToggle() {
    setIsMenuOpen((prev) => !prev);
  }

  useEffect(() => {
    // Here you can handle side effects when isMenuOpen changes
    if (isMenuOpen) {
      // Do something if the menu is open
    } else {
      // Do something else if the menu is closed
    }
  }, [isMenuOpen]);

  return (
    <div>
      <div style={{ backgroundColor: bgColor }} className="nav-div fixed top-0 left-0 w-full z-50 py-6 px-5">
        <div className="flex justify-between w-full">
          <img
            onClick={() => navigate('/')}
            src={ripplLogo}
            alt="Rippl logo"
            className="h-6"
          ></img>
          <img onClick={menuToggle} src={isMenuOpen ? closeBtn : hamburger} className="h-6"></img>
        </div>

        {isMenuOpen && (
          <ul className="font-semi text-3xl mt-8">
            <li className="mb-4">Get Recs</li>
            <li className="mb-4">About</li>
            <li className="mb-4">Contact</li>
          </ul>
        )}
      </div>

      {isMenuOpen && (
        <div className='nav-overlay fixed top-0 left-0 w-full h-full bg-black opacity-25 z-40' onClick={menuToggle}></div>
      )}
    </div>
  )
}

export default Nav;

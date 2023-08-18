import React, { useEffect } from 'react'
import ripplLogo from '../assets/rippl_logo.svg'
import hamburger from '../assets/rippl_hamburger.svg'
import closeBtn from '../assets/rippl_close_btn.svg'
import { useNavigate } from 'react-router-dom'

function Nav({ isMenuOpen, setIsMenuOpen, bgColor }) {
  const navigate = useNavigate()

  function menuToggle() {
    setIsMenuOpen((prev) => !prev)
  }

  useEffect(() => {
    // Here you can handle side effects when isMenuOpen changes
    if (isMenuOpen) {
      // Do something if the menu is open
    } else {
      // Do something else if the menu is closed
    }
  }, [isMenuOpen])

  return (
    <div>
      <div
        style={{ backgroundColor: bgColor }}
        className="nav-div fixed top-0 left-0 w-full z-50 py-6 px-5 md:px-40 xl:px-80"
      >
        <div className="flex justify-between w-full">
          <img
            onClick={() => {navigate('/')
            if (isMenuOpen===true){menuToggle()
            }}}
            src={ripplLogo}
            alt="Rippl logo"
            className="h-5 cursor-pointer"
          ></img>
          <ul className="font-bold font-proxima text-xl hidden lg:flex">
            <li
              onClick={() => {
                navigate('/input')
                if (isMenuOpen === true) {
                  menuToggle()
                }
              }}
              className="mr-8 cursor-pointer"
            >
              Get Recs
            </li>
            <li className="mr-8">
              <a
                href="https://github.com/lschmidtfellner/Rippl_frontend"
                target="_blank"
                rel="noopener noreferrer"
              >
                About
              </a>
            </li>
            <li className="mr-8">
              <a
                href="https://www.linkedin.com/in/lsfdesign/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
              </a>
            </li>
            <li className="">
              <a
                href="https://www.lsfdesign.co"
                target="_blank"
                rel="noopener noreferrer"
              >
                Portfolio
              </a>
            </li>
          </ul>
          <img
            onClick={menuToggle}
            alt="menu"
            src={isMenuOpen ? closeBtn : hamburger}
            className="h-5 lg:hidden"
          ></img>
        </div>

        {isMenuOpen && (
          <ul className="font-bold font-proxima text-2xl mt-8">
            <li
              onClick={() => {
                navigate('/input')
                if (isMenuOpen === true) {
                  menuToggle()
                }
              }}
              className="mb-4 cursor-pointer"
            >
              Get Recs
            </li>
            <li className="mb-4">
              <a
                href="https://github.com/lschmidtfellner/Rippl_frontend"
                target="_blank"
                rel="noopener noreferrer"
              >
                About
              </a>
            </li>
            <li className="mb-4">
              <a
                href="https://www.linkedin.com/in/lsfdesign/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
              </a>
            </li>
            <li className="mb-4">
              <a
                href="https://www.lsfdesign.co"
                target="_blank"
                rel="noopener noreferrer"
              >
                Portfolio
              </a>
            </li>
          </ul>
        )}
      </div>

      {isMenuOpen && (
        <div
          className="nav-overlay fixed top-0 left-0 w-full h-full bg-black opacity-25 z-40"
          onClick={menuToggle}
        ></div>
      )}
    </div>
  )
}

export default Nav

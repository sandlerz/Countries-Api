import { useEffect, useState } from 'react'

import moonLight from '../assets/images/half-moon-icon-light.png'
import moonDark from '../assets/images/half-moon-icon-dark.png'

export default function Header () {
  const [toggleDarkMode, setToggleDarkMode] = useState(localStorage.getItem('darkModeIsActive') === 'true' || false)

  useEffect(() => {
    if (localStorage.getItem('darkModeIsActive') === 'true') {
      const body = document.body
      body.classList.add('dark-mode')
    }
  }, [])

  const handleDarkMode = () => {
    const body = document.body
    body.classList.toggle('dark-mode')
    localStorage.setItem('darkModeIsActive', !toggleDarkMode)
    setToggleDarkMode(prev => !prev)
  }

  return (
    <header>
      <div className='header-container'>
        <h1 className='tittle'>Where in the world?</h1>
        <div
          className='dark-mode'
          onClick={handleDarkMode}
        >
          <img
            className='dark-mode__icon'
            src={toggleDarkMode ? moonLight : moonDark}
            alt='dark mode icon'
          />
          <p>Dark Mode</p>
        </div>
      </div>
    </header>
  )
}

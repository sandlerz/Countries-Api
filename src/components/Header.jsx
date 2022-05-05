import moonLight from '../assets/images/half-moon-icon-light.png'
import moonDark from '../assets/images/half-moon-icon-dark.png'

export default function Header () {
  return (
    <header>
      <div className='header-container'>
        <h1 className='tittle'>Where in the world?</h1>
        <div className='dark-mode'>
          <img
            className='dark-mode__icon'
            src={moonLight}
            alt='dark mode icon'
          />
          <p>Dark Mode</p>
        </div>
      </div>
    </header>
  )
}

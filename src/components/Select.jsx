import { useState } from 'react'
import arrowIcon from '../assets/images/arrow-down-solid.svg'

export default function Select ({ handleRegionFilter, regionFilter }) {
  const [isActive, setIsActive] = useState(false)
  const options = ['Africa', 'America', 'Asia', 'Europe', 'Oceania', 'All Regions']

  const handleClick = (region) => {
    if (region === 'All Regions') return handleRegionFilter('')
    handleRegionFilter(region)
  }

  const regions = options.map((region, index) => (
    <li
      key={index}
      className='items'
      onClick={() => handleClick(region)}
    >{region}
    </li>
  ))

  return (
    <div className='select__container' onClick={() => setIsActive(prev => !prev)}>
      <div className='select__btn'>
        {regionFilter === '' ? 'Filter by Region' : regionFilter}
        <img className='arrowIcon' src={arrowIcon} alt='' />
      </div>
      {isActive && (<ul className='select__dropdown__container'> {regions} </ul>)}
    </div>
  )
}

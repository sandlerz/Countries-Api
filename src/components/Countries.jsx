import { useNavigate } from 'react-router-dom'

export default function Countries ({ name, population, region, capital, flag }) {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(`/${name}`)
  }

  return (
    <div className='country-card' onClick={handleClick}>
      <div className='img-container'>
        <img src={flag} alt='flag of the country' className='country-flag' />
      </div>
      <div className='card__description'>
        <h2 className='tittle'>{name}</h2>
        <p className='text'>
          Population:{' '}
          <span className='text2'>{population.toLocaleString()}</span>
        </p>
        <p className='text'>
          Region: <span className='text2'>{region}</span>
        </p>
        <p className='text'>
          Capital: <span className='text2'>{capital}</span>
        </p>
      </div>
    </div>
  )
}

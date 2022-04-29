import { useEffect, useState } from 'react'
import getCountries from '../services/data'
import Countries from '../components/Countries'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const [dataCountries, setDataCountries] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    getCountries().then(data => setDataCountries(data))
  }, [])

  const countries = dataCountries.map(country => (
    <Countries
      key={country.name}
      name={country.name}
      population={country.population}
      region={country.region}
      capital={country.capital}
      flag={country.flag}
    />
  ))

  const handleEnter = event => {
    const { key } = event
    if (key === 'Enter') {
      navigate(`/Countries-Api/${null}`)
    }
  }

  return (
    <main>
      <div className="inputs_container">
        <input
          onKeyDown={handleEnter}
          className="input__text"
          type="text"
          placeholder="Search for a country..."
        />
        <input type="text" />
      </div>
      <div className="countries-grid">{countries}</div>
    </main>
  )
}

import { useEffect, useState } from 'react'
import getCountries from '../services/data'
import Countries from '../components/Countries'
import { useNavigate } from 'react-router-dom'
import ReactLoading from 'react-loading'

export default function Home() {
  const [dataCountries, setDataCountries] = useState([])
  const [filter, setFilter] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    getCountries().then(data => setDataCountries(data))
  }, [])

  let countries = dataCountries

  if (dataCountries.length > 0) {
    countries = dataCountries
      .filter(country =>
        country.name.toLowerCase().includes(filter.toLowerCase())
      )
      .map(country => (
        <Countries
          key={country.name}
          name={country.name}
          population={country.population}
          region={country.region}
          capital={country.capital}
          flag={country.flag}
        />
      ))
  }

  const handleEnter = event => {
    const { key, target } = event
    if (key === 'Enter') {
      navigate(`/${target.value}`)
    }
  }

  const handleFilter = event => {
    const { value } = event.target
    setFilter(value)
  }
  console.log(filter)
  return (
    <main>
      <div className="inputs_container">
        <input
          onKeyDown={handleEnter}
          className="input__text"
          type="text"
          placeholder="Search for a country..."
          onChange={handleFilter}
          value={filter}
        />
        <input type="text" />
      </div>
      {dataCountries.length === 0 ? (
        <ReactLoading type="bubbles" height={600} width={300} />
      ) : (
        <div className="countries-grid">{countries}</div>
      )}
    </main>
  )
}

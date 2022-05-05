import { useEffect, useState } from 'react'
import getCountries, { options } from '../services/data'
import Countries from '../components/Countries'
import { useNavigate } from 'react-router-dom'
import ReactLoading from 'react-loading'
import Select from 'react-select'

export default function Home() {
  const [dataCountries, setDataCountries] = useState([])
  const [filter, setFilter] = useState('')
  const [regionFilter, setRegionFilter] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    getCountries().then(data => setDataCountries(data))
  }, [])

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

  const handleRegionFilter = ({ value }) => {
    setRegionFilter(value)
  }

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
        <Select
          options={options}
          onChange={handleRegionFilter}
          defaultValue={{
            label: 'Filter by Region',
            value: '',
          }}
          className="input__select__container"
          classNamePrefix="input__select"
        />
      </div>
      {dataCountries.length === 0 ? (
        <ReactLoading type="bubbles" height={600} width={300} />
      ) : (
        <div className="countries-grid">
          {dataCountries
            .filter(country => {
              if (regionFilter === '') return true
              return country.region
                .toLowerCase()
                .includes(regionFilter.toLowerCase())
            })
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
            ))}
        </div>
      )}
    </main>
  )
}

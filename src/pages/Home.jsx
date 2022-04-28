import { useEffect, useState } from 'react'
import getCountries from '../services/data'
import Country from '../components/Country'

export default function Home() {
  const [dataCountries, setDataCountries] = useState([])
  useEffect(() => {
    getCountries().then(data => setDataCountries(data))
  }, [])
  const countries = dataCountries.map(country => (
    <Country
      key={country.name}
      name={country.name}
      population={country.population}
      region={country.region}
      capital={country.capital}
      flag={country.flag}
    />
  ))

  return (
    <main>
      <div className="inputs_container">
        <input type="text" />
        <input type="text" />
      </div>
      <div className="countries-grid">{countries}</div>
    </main>
  )
}

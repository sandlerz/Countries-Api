import { useEffect, useState } from 'react'
import getCountries from '../services/data'
import Country from '../components/Country'

export default function Main() {
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

  return <main className="countries-grid">{countries}</main>
}

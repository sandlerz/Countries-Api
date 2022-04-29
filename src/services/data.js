const allCountriesURL = 'https://restcountries.com/v2/all'

export default async () => {
  try {
    const response = await fetch(allCountriesURL)
    if (response.ok) {
      const data = await response.json()
      const allCountries = data.map(country => ({
        name: country.name,
        population: country.population,
        region: country.region,
        capital: country.capital,
        flag: country.flags.png,
      }))
      return allCountries
    }
    throw new Error('Request failed!')
  } catch (error) {
    console.log(`Error connecting to server: ${error}`)
  }
}

export const getCountry = async name => {
  const URL = `https://restcountries.com/v2/name/${name}`
  try {
    const response = await fetch(URL)
    if (response.ok) {
      const data = await response.json()
      const country = data[0]
      return country
    }
    throw new Error('Request failed!')
  } catch (error) {
    console.log(`Error connecting to server: ${error}`)
  }
}

export const getBorderCountry = async name => {
  const URL = `https://restcountries.com/v2/alpha/${name}?fields=name`
  try {
    const response = await fetch(URL)
    if (response.ok) {
      const data = await response.json()
      const borderCountry = data.name
      console.log(borderCountry)
      return borderCountry
    }
    throw new Error('Request failed')
  } catch (error) {
    console.log(`Error connection to server: ${error}`)
  }
}

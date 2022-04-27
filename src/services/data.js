const allCountriesURL = 'https://restcountries.com/v2/all'

const getCountries = async () => {
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

export default getCountries

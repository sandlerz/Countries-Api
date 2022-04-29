import { useParams } from 'react-router-dom'
import { getCountry } from '../services/data'
import { useEffect, useState } from 'react'
import BorderCountries from '../components/BorderCountries'
import { useNavigate } from 'react-router-dom'

export default function Country() {
  const [country, setCountry] = useState([])

  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    getCountry(params.country).then(data => setCountry(data))
  }, [params])

  const handleHome = () => {
    navigate('/Countries-Api')
  }

  const handleBack = () => {
    navigate(-1)
  }

  return (
    <main>
      <div>
        <div className="btn__container">
          <button onClick={handleBack} className="back__btn">
            ⬅ Back
          </button>
          <button onClick={handleHome} className="back__btn">
            Home
          </button>
        </div>
        <div className="country_container">
          <div className="country__container__img">
            {country.flags && (
              <img src={country.flags.svg} alt={`${country.name}'s flag`} />
            )}
          </div>
          <div className="country__container__text">
            <h1 className="tittle">{country.name}</h1>
            <div className="country__container__text__layout">
              <div className="country__container__text__right">
                <p className="text">
                  Native Name:{' '}
                  <span className="text2">{country.nativeName}</span>
                </p>
                <p className="text">
                  Population:{' '}
                  <span className="text2">
                    {country.population && country.population.toLocaleString()}
                  </span>
                </p>
                <p className="text">
                  Region: <span className="text2">{country.region}</span>
                </p>
                <p className="text">
                  Sub Region: <span className="text2">{country.subregion}</span>
                </p>
                <p className="text">
                  Capital: <span className="text2">{country.capital}</span>
                </p>
              </div>
              <div className="country__container__text__left">
                <p className="text">
                  Top Level Domain:{' '}
                  <span className="text2">{country.topLevelDomain}</span>
                </p>
                <p className="text">
                  Currencies:{' '}
                  <span className="text2">
                    {country.currencies &&
                      country.currencies.map(currency => currency.name)}
                  </span>
                </p>
                <p className="text">
                  Languages:{' '}
                  <span className="text2">
                    {country.languages &&
                      country.languages.map(language => language.name)}
                  </span>
                </p>
              </div>
            </div>
            <div className="border__country__container">
              <p className="text">Border Countries:</p>
              <div className="border__country__container__btn">
                {country.borders &&
                  country.borders.map(border => (
                    <BorderCountries country={border} key={border} />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

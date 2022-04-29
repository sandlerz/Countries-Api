import { useEffect, useState } from 'react'
import { getBorderCountry } from '../services/data'
import { useNavigate } from 'react-router-dom'

export default function BorderCountries({ country }) {
  const [dataCountry, setDataCountry] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    getBorderCountry(country).then(data => setDataCountry(data))
  }, [])

  const handleBorderCountry = () => {
    navigate(`/Countries-Api/${dataCountry}`)
  }

  return (
    <div className="border__country text2" onClick={handleBorderCountry}>
      {dataCountry}
    </div>
  )
}

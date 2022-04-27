export default function Country({ name, population, region, capital, flag }) {
  return (
    <div className="card">
      <div className="img-container">
        <img src={flag} alt="flag of the country" className="country-flag" />
      </div>
      <h2>{name}</h2>
      <h3>
        Population: <span>{population}</span>
      </h3>
      <h3>
        Region: <span>{region}</span>
      </h3>
      <h3>
        Capital: <span>{capital}</span>
      </h3>
    </div>
  )
}

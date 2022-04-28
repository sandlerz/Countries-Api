export default function Country({ name, population, region, capital, flag }) {
  return (
    <div className="country-card">
      <div className="img-container">
        <img src={flag} alt="flag of the country" className="country-flag" />
      </div>
      <div className="card__description">
        <h2 className="card__name">{name}</h2>
        <h3 className="card__text">
          Population:{' '}
          <span className="card__text2">{population.toLocaleString()}</span>
        </h3>
        <h3 className="card__text">
          Region: <span className="card__text2">{region}</span>
        </h3>
        <h3 className="card__text">
          Capital: <span className="card__text2">{capital}</span>
        </h3>
      </div>
    </div>
  )
}

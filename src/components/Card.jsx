function Card({flag, name, population, region, capital}) {
  return (
    <section>
      <img src={flag} alt="flag" />
      <h2>{name}</h2>
      <p>Population: {population}</p>
      <p>Region: {region}</p>
      <p>Capital: {capital}</p>
    </section>
  )
}


export default Card;
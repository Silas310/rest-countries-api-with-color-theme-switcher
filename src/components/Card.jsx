function Card({flag, altFlag, name, population, region, capital}) {
  return (
    <section>
      <img src={flag} alt={altFlag} />
      <h2>{name}</h2>
      <p>Population: {population}</p>
      <p>Region: {region}</p>
      <p>Capital: {capital}</p>
    </section>
  )
}


export default Card;
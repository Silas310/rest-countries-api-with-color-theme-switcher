function Card({flag, altFlag, name, population, region, capital}) {
  return (
    <section className="bg-white dark:bg-dark-element dark:text-white rounded-lg shadow-2xl max-w-[18rem]">
      <img src={flag} alt={altFlag} className="min-h-48 w-full object-cover rounded-t-lg"/>
      <div className="p-5 pb-12">
        <h2 className="text-[1.2rem] font-bold mb-3">{name}</h2>
        <p><strong className="font-semibold">Population:</strong> {population}</p>
        <p><strong className="font-semibold">Region:</strong> {region}</p>
        <p><strong className="font-semibold">Capital:</strong> {capital}</p>
      </div>
    </section>
  )
}


export default Card;
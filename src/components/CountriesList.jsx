import Card from './Card';
import Loading from './Loading';


function CountriesList({ data, error, isLoading }) {
  if (error) return <div>Error loading countries</div>;
  if (isLoading) return <Loading />;
  if (!data) return <div>No countries found</div>;
  
  return (
    <section className='flex flex-col items-center gap-y-10 dark:bg-dark-bg'>
      {data.map((country) => (
        <Card
          key={country.cca3}
          flag={country.flags.png}
          altFlag={country.flags.alt}
          name={country.name.common}
          population={country.population.toLocaleString()}
          region={country.region}
          capital={country.capital ? country.capital[0] : "No capital"}
        />
      ))}
    </section>
  )
}

export default CountriesList;
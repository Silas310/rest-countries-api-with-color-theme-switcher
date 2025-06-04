import { Link } from 'react-router-dom';
import Card from './Card';
import Loading from './Loading';
import ErrorAlert from './ErrorAlert';
import NoResults from './NoResults';  


function CountriesList({ data, error, isLoading }) {
  if (error) return <ErrorAlert />;
  if (isLoading) return <Loading />;
  if (!data) return <NoResults />;
  
  return (
    <section className='flex flex-col items-center gap-y-10 bg-light-bg dark:bg-dark-bg 
    lg:grid lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 lg:gap-6 lg:p-12'>
      {data.map((country) => (
        <Link key={country.cca3} to={`/country/${country.cca3}`}>
          <Card
            flag={country.flags.png}
            altFlag={country.flags.alt}
            name={country.name.common}
            population={country.population.toLocaleString()}
            region={country.region}
            capital={country.capital ? country.capital[0] : "No capital"}
          />
        </Link>
      ))}
    </section>
  )
}


export default CountriesList;
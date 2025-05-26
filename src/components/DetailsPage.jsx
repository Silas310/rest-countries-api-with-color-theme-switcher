import { useParams } from "react-router-dom";
import useSWR from "swr";
import fetcher from "../lib/fetcher.js";
import Loading from "./Loading";
import ErrorAlert from "./ErrorAlert";
import NoResults from "./NoResults";


function DetailsPage() {
  const baseURL = "https://restcountries.com/v3.1/";
  const { id } = useParams();

  const { data, error, isLoading } = useSWR(baseURL + `alpha/${id}`, fetcher);

  if (error) return <ErrorAlert msg={"Error fetching data"}/>
  if (isLoading) return <Loading />
  if (!data || data.length === 0) return <NoResults msg={"No country found"}/>

  console.log(data[0]);
  const country = data[0];
  const borderCountries = country.borders || [];
  

  return (
    <main className="dark:text-light-bg text-light-text p-4 bg-inherit">
      <nav className="justify-self-start">
        <button className="px-6 box py-2">Back</button>
      </nav>

      <section className="flex flex-col gap-y-8">
        <div className="w-full max-w-xl aspect-[4/3] overflow-hidden">
          <img
            src={country.flags?.png}
            alt={country.flags?.alt}
            className="w-full h-full object-cover"
          />
        </div>


        <h1 className="text-2xl font-semibold">{country.name.common}</h1> {/*Country name*/ }

        <div className="flex flex-col gap-y-2">
          <p><strong className="font-semibold">Native name: </strong> { Object.values(country.name.nativeName).map(n => n.common).join(", ")}</p>
          <p><strong className="font-semibold">Population: </strong> {country.population.toLocaleString("pt-BR")}</p>
          <p><strong className="font-semibold">Region: </strong> {country.region}</p>
          <p><strong className="font-semibold">Sub Region:</strong> {country.subregion}</p>
          <p><strong className="font-semibold">Capital:</strong> {country.capital}</p>
        </div>

        <div className="flex flex-col gap-y-2">
          <p><strong className="font-semibold">Top Level Domain:</strong> {country.tld.join(" - ")}</p>
          <p><strong className="font-semibold">Currencies:</strong> {Object.values(country.currencies).map(c => c.name).join(", ")}</p>
          <p><strong className="font-semibold">Languages:</strong> {Object.values(country.languages).join(", ")}</p>
        </div>

        <section>
          <h2>Border countries: </h2>
          <ul className="flex flex-wrap gap-2 mt-4">
            {borderCountries.length > 0 ? (
              borderCountries.map((border) => (
                <li key={border} className="box px-2">
                  {border}
                </li>
              ))
            ) : (
              <li className="text-gray-500">No border countries</li>
            )}
          </ul>
        </section>

      </section>
    </main>
  )
}

export default DetailsPage; 
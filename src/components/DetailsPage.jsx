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
  

  return (
    <main>
      <nav>
        <button>Back</button>
      </nav>

      <main>
        <img src={country.flags?.png} alt="country flag"/>

        <h1>{country.name.common}</h1> {/*Country name*/ }

        <div>
          <p><strong className="font-semibold">Native name: </strong> { Object.values(country.name.nativeName).map(n => n.common).join(", ")}</p>
          <p><strong className="font-semibold">Population: </strong> {country.population.toLocaleString("pt-BR")}</p>
          <p><strong className="font-semibold">Region: </strong> {country.region}</p>
          <p><strong className="font-semibold">Sub Region:</strong> {country.subregion}</p>
          <p><strong className="font-semibold">Capital:</strong> {country.capital}</p>
        </div>

        <div>
          <p><strong className="font-semibold">Top Level Domain:</strong> {country.tld.join(" - ")}</p>
          <p><strong className="font-semibold">Currencies:</strong> {Object.values(country.currencies).map(c => c.name).join(", ")}</p>
          <p><strong className="font-semibold">Languages:</strong> {Object.values(country.languages).join(", ")}</p>
        </div>

        <section>
          <h2>Border countries: {country.borders?.join(", ")}</h2>
        </section>

      </main>
    </main>
  )
}

export default DetailsPage; 
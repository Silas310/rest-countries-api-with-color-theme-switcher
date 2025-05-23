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
  if (!data) return <NoResults msg={"No country found"}/>

  console.log(data[0]);
  

  return (
    <main>
      <nav>
        <button>Back</button>
      </nav>

      <main>
        <img src={data[0].flags.png} alt="country flag"/>

        <h1>{data[0].name.common}</h1> {/*Country name*/ }

        <div>
          <p><strong className="font-semibold">Native name: </strong> { Object.values(data[0].name.nativeName).map(n => n.common).join(", ")}</p>
          <p><strong className="font-semibold">Population: </strong> {data[0].population.toLocaleString("pt-BR")}</p>
          <p><strong className="font-semibold">Region: </strong> {data[0].region}</p>
          <p><strong className="font-semibold">Sub Region:</strong> {data[0].subregion}</p>
          <p><strong className="font-semibold">Capital:</strong> {data[0].capital}</p>
        </div>

        <div>
          <p><strong className="font-semibold">Top Level Domain:</strong> {data[0].tld.join(" - ")}</p>
          <p><strong className="font-semibold">Currencies:</strong> {Object.values(data[0].currencies).map(c => c.name).join(", ")}</p>
          <p><strong className="font-semibold">Languages:</strong> {Object.values(data[0].languages).join(", ")}</p>
        </div>

        <section>
          <h2>Border countries: {data[0].borders.join(", ")}</h2>
        </section>

      </main>
    </main>
  )
}

export default DetailsPage; 
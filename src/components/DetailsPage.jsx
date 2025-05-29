import { useParams } from "react-router-dom";
import useSWR from "swr";
import fetcher from "../lib/fetcher.js";
import Loading from "./Loading";
import ErrorAlert from "./ErrorAlert";
import NoResults from "./NoResults";
import { Link } from "react-router-dom";


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
  

  const primaryInfo = [
    { label: "Native name", value: Object.values(country.name.nativeName).map(n => n.common).join(", ") },
    { label: "Population", value: country.population.toLocaleString("pt-BR") },
    { label: "Region", value: country.region },
    { label: "Sub Region", value: country.subregion },
    { label: "Capital", value: country.capital ? country.capital[0] : "No capital" }
  ];
  console.log(country.capital);
  

  const secondaryInfo = [
    {
      label: "Top Level Domain",
      values: country.tld,
    },
    {
      label: "Currencies",
      values: Object.values(country.currencies).map(c => c.name),
    },
    {
      label: "Languages",
      values: Object.values(country.languages),
    },
  ];

  return (
    
    <main className="dark:text-light-bg text-light-text p-4 sm:p-8 bg-inherit flex 
    flex-col gap-y-8 [@media(min-width:80rem)]:p-14">

      <nav className="justify-self-start [@media(min-width:80rem)]:mb-6">
        <Link to="/">
          <button className="px-6 box py-1 rounded-sm cursor-pointer"> ← Back</button>
        </Link>
      </nav>

      <section className="flex flex-col gap-y-8 [@media(min-width:80rem)]:flex-row justify-between max-w-[90rem]">
        <div className="w-full max-w-xl aspect-[4/3] overflow-hidden">
          <img
            src={country.flags?.png}
            alt={country.flags?.alt}
            className="w-full h-full object-cover"
          />
        </div>

        
        <div className="flex flex-col gap-y-8">
          <h1 className="text-2xl font-semibold">{country.name.common}</h1> {/*Country name*/ }
          <div className="flex flex-col gap-y-6 [@media(min-width:80rem)]:flex-row [@media(min-width:80rem)]:gap-x-8">
            <div className="flex flex-col gap-y-2">
              {primaryInfo.map((item, index) => (
                <p key={index}>
                  <strong className="font-semibold">{item.label}:</strong> {item.value}
                </p>
              ))}
            </div>
            <div className="flex flex-col gap-y-2">
              {secondaryInfo.map(({ label, values }) => (
                <p key={label}>
                  <strong className="font-semibold">{label}:</strong> {values.join(", ")}
                </p>
              ))}
            </div>
          </div>
          
          <section>
            <h2>Border countries: </h2>
            <ul className="flex flex-wrap gap-2 mt-2">
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
        </div>

      </section>
    </main>
  )
}

export default DetailsPage; 
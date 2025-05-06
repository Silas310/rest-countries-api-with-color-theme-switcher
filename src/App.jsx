import "../src/index.css"
import Header from "./components/Header"
import Form from "./components/Form"
import CountriesList from "./components/CountriesList"  
import useSWR from "swr"


const fetcher = (...args) => fetch(...args).then(res => res.json())


function App() {
  const { data, error, isLoading } = useSWR("https://restcountries.com/v3.1/alpha?codes=DE,US,BR,IS,AF,AX,AL,DZ", fetcher)


  return (
    <div className="flex justify-center w-screen h-screen">
      <main className="text-(length:--font-size-home) flex flex-col w-full bg-light-bg gap-6 dark:bg-dark-bg">
        <Header />
        <Form />
        <CountriesList data={data} error={error} isLoading={isLoading}/>
      </main>
    </div>
  )
}

export default App
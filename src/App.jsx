import "../src/index.css"
import Header from "./components/Header"
import Form from "./components/Form"
import CountriesList from "./components/CountriesList"  
import { useState } from "react"
import useSWR from "swr"


// const fetcher = (...args) => fetch(...args).then(res => res.json())

const fetcher = async (...args) => {
  const res = await fetch(...args);
  if (!res.ok) throw new Error('Erro ao buscar países');
  return res.json();
}



function App() {
  const [searchValue, setSearchValue] = useState('');
  const [filterValue, setFilterValue] = useState('');

  const baseURL = "https://restcountries.com/v3.1/";
  let endpoint = "alpha?codes=DE,US,BR,IS,AF,AX,AL,DZ";

  if (searchValue) {
    endpoint = `name/${searchValue}`;
  } else if (filterValue) {
    endpoint = `region/${filterValue}`;
  } 

  const { data, error, isLoading } = useSWR(baseURL + endpoint, fetcher)

  return (
    <div className="flex justify-center w-screen h-screen">
      <main className="text-(length:--font-size-home) flex flex-col w-full bg-light-bg gap-6 dark:bg-dark-bg">
        <Header />
        <Form 
          filterValue={filterValue} 
          setFilterValue={setFilterValue} 
          searchValue={searchValue} 
          setSearchValue={setSearchValue} 
        />

        <CountriesList data={data} error={error} isLoading={isLoading}/>
      </main>
    </div>
  )
}

export default App
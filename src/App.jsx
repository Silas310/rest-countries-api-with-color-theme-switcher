import "../src/index.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import useSWR from "swr";

import Header from "./components/Header";
import Form from "./components/Form";
import CountriesList from "./components/CountriesList";
import DetailsPage from "./components/DetailsPage";
import fetcher from "./lib/fetcher.js";

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

  const { data, error, isLoading } = useSWR(baseURL + endpoint, fetcher);

  return (
    <div className="flex justify-center w-screen h-screen">
      <main className="flex flex-col w-full gap-6 bg-light-bg text-[length:--font-size-home] dark:bg-dark-bg">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Form
                  searchValue={searchValue}
                  setSearchValue={setSearchValue}
                  filterValue={filterValue}
                  setFilterValue={setFilterValue}
                />
                <CountriesList
                  data={data}
                  error={error}
                  isLoading={isLoading}
                />
              </>
            }
          />
          <Route path="/country/:id" element={<DetailsPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

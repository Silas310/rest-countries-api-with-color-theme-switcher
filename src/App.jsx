import "../src/index.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import useSWR from "swr";

import Header from "./components/Header";
import Form from "./components/Form";
import CountriesList from "./components/CountriesList";
import DetailsPage from "./components/DetailsPage";
import fetcher from "./lib/fetcher.js";

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [debouncedSearchValue, setDebouncedSearchValue] = useState('');
  const [filterValue, setFilterValue] = useState('');

  useEffect(() => {
    const delay = setTimeout(() => {
      setDebouncedSearchValue(searchValue);
    }, 500);
    return () => clearTimeout(delay);
  })

  const baseURL = "https://restcountries.com/v3.1/";
  let endpoint = "alpha?codes=DE,US,BR,IS,AF,AX,AL,DZ";

  const formattedSearchValue = encodeURIComponent(debouncedSearchValue.trim().replace(/\s+/g, ' '));

  if (formattedSearchValue) {
    endpoint = `name/${formattedSearchValue}`;
  } else if (filterValue) {
    endpoint = `region/${filterValue}`;
  }

  const { data, error, isLoading } = useSWR(baseURL + endpoint, fetcher);

  return (
    <div className="flex justify-center w-screen min-h-screen">
      <main className="flex flex-col w-full gap-6 bg-light-bg text-light-text dark:bg-dark-bg">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <div className="flex flex-col gap-6 lg:p-12">
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
              </div>
            }
          />
          <Route path="/country/:id" element={<DetailsPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

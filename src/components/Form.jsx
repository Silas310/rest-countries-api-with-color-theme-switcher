import Filter from "./Filter"
import Search from "./Search"
import { useState } from "react"


function Form({filterValue, setFilterValue, searchValue, setSearchValue}) { 
  const validRegions = ['africa', 'america', 'asia', 'europe', 'oceania'];

  function handleFilterChange(value) {
    if ( validRegions.includes(value) ) {
      setFilterValue(value);
      console.log(value);
    }
  }

  return (
    <form action="" className="flex flex-col gap-15 px-4">
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      <Filter onChange={handleFilterChange} value={filterValue} />
    </form>
  )
}

export default Form
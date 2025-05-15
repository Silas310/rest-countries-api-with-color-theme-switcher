import Filter from "./Filter"
import Search from "./Search"
import { useState } from "react"


function Form() { 
  const [filterValue, setFilterValue] = useState('');
  const [searchValue, setSearchValue] = useState('');

  function handleFilterChange(value) {
    console.log(value);
  }

  return (
    <form action="" className="flex flex-col gap-15 px-4">
      <Search />
      <Filter onChange={handleFilterChange}/>
    </form>
  )
}

export default Form
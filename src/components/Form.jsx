import Filter from "./Filter"
import Search from "./Search"


function Form({filterValue, setFilterValue, searchValue, setSearchValue}) { 
  const validRegions = ['africa', 'america', 'asia', 'europe', 'oceania'];

  function handleFilterChange(value) {
    if ( validRegions.includes(value) ) {
      setFilterValue(value);
    }
  } 

  function handleSearchChange(event) {
    setSearchValue(event.target.value);
  }

  return (
    <form className="flex flex-col gap-15 max-lg:px-4">
      <Search searchValue={searchValue} onChange={handleSearchChange} />
      <Filter value={filterValue} onChange={handleFilterChange}  />
    </form>
  )
}

export default Form
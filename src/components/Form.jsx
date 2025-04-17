import Filter from "./Filter"
import Search from "./Search"


function Form() {
  return (
    <form action="" className="flex flex-col gap-15 px-4">
      <Search />
      <Filter />
    </form>
  )
}

export default Form
function Search() {
  return(
    
    <input 
      aria-label="Search for a country" 
      type="text" 
      placeholder="Search for a country..." 
      className="bg-white bg-[url(../../public/icons/search.svg)] bg-no-repeat 
      min-[10rem]:bg-position-[center_left_1.5rem] py-4 min-[10rem]:px-20 rounded-md 
      outline-0 placeholder:text-[light-input] shadow-[1px_1px_10px_rgba(0,0,0,0.10)]"
    />
  )
}

export default Search
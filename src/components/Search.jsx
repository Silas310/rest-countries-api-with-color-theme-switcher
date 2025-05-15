function Search({searchValue, onChange}) {
  return(
    
    <input 
      aria-label="Search for a country" 
      type="text" 
      placeholder="Search for a country..." 
      className="bg-white dark:bg-dark-element bg-[url(icons/search.svg)] 
      dark:bg-[url(icons/search-white.svg)] bg-no-repeat min-[10rem]:bg-position-[center_left_1.5rem] 
      py-4 min-[10rem]:px-20 rounded-md outline-0 placeholder:text-[light-input] 
      dark:placeholder:text-light-element shadow-[1px_1px_10px_rgba(0,0,0,0.10)] max-w-[36rem]"
      onChange={onChange}
      value={searchValue}
    />
  )
}

export default Search
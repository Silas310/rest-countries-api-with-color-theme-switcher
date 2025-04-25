function Filter() {
  return (
    <div className="flex w-[60%]">
      <label htmlFor="region" className="sr-only">Filter By Region</label>
      <select name="region" id="region" 
      className="flex-1 bg-white rounded-md py-4 shadow-[1px_1px_10px_rgba(0,0,0,0.10)] px-6 cursor-pointer max-w-[24rem]">
        <button>
          <selectedcontent></selectedcontent>
        </button>

        <option value="" className="hidden">Filter by Region</option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </div>
  )
}

export default Filter
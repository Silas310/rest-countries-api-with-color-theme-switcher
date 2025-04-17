function Filter() {
  return (
    <div>
      <label htmlFor="region" className="bg-white py-4 border">Filter by region</label>
      <select name="region" className="hidden">
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
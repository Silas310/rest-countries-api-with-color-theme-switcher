import { useState } from "react"


function Filter() {
  let [visibility, setVisibility] = useState("hidden")


  function handleVisibility() {
    if (visibility === "hidden") {
      setVisibility("block")
    } else {
      setVisibility("hidden")
    }
  }
  
  return (
    <div>
      <label htmlFor="region" className="bg-white py-4 border" onClick={handleVisibility}>Filter by region</label>
      <select name="region" className={visibility}>
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
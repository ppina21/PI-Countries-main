import React from 'react'
import { useDispatch } from "react-redux"
import { orderByContinent } from '../../Redux/Actions/actions'

export default function Filter({setCurrentPage}) {
  
  const dispatch = useDispatch();

  function handleChange(e) {
    e.preventDefault()
    setCurrentPage(1)
    dispatch(orderByContinent(e.target.value))
    console.log(handleChange);
    
  }

  return (
    <div>
          <div>
        
        <select onChange={handleChange}>
          <option value={"All"} key="All"> All Continents</option>
          <option value="North America" key="North America" >North America</option>
          <option value="South America" key="South America" >South America</option>
          <option value="Africa" key="Africa" >Africa</option>
          <option value="Asia" key="Asia" >Asia</option>
          <option value="Europe" key="Europe" >Europe</option>
          <option value="Oceania" key="Oceania" >Oceania</option>
          <option value="Antarctica" key="Antarctica" >Antarctica</option>
        </select>
      </div>

    </div>
  )
}

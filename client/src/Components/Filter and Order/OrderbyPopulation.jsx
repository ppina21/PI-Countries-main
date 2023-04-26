import React from 'react'
import { useDispatch } from "react-redux"
import { orderByPopulation } from '../../Redux/Actions/actions'

export default function OrderbyPopulation({setCurrentPage}) {
     
    const dispatch = useDispatch();

   const handleChange = (e) => {
    e.preventDefault()
     dispatch(orderByPopulation(e.target.value))
     setCurrentPage(1)
  } 
 
    return (
      <div>
          <select onChange={handleChange}>
            <option value="reset">Order By Population</option>
            <option value="population +">By Population from - a + </option>
            <option value="population -">By Population from + a - </option>
        </select>

      </div>
  )
}

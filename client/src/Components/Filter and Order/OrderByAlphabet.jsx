import React from "react"
import { useDispatch } from "react-redux"
import { orderByAlphabet } from '../../Redux/Actions/actions'



const OrderByAlphabet = ({setCurrentPage}) => {
  const dispatch = useDispatch()

  const handleChange = (e) => {
    e.preventDefault()
     dispatch(orderByAlphabet(e.target.value))
     setCurrentPage(1)
  } 

  return (
    <div>
          <select onChange={handleChange}>
            <option value="reset">Order by Alphabet</option>
            <option value="a-z">A - Z</option>
            <option value="z-a">Z - A</option>
          </select>
    </div>
  )
}

export default OrderByAlphabet

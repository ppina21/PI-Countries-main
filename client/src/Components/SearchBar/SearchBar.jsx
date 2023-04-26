import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { getCountryByName } from '../../Redux/Actions/actions'


export default function SearchBar({setCurrentPage}) {
  
    const dispatch = useDispatch();
    const [name, setName] = useState("");
      
    

    // function handleChange(e) {
    //     dispatch(getCountryByName(e.target.value))
    // }

    function handleInputChange(ev){
    console.log(ev.target.value);
    setName(ev.target.value);
    ev.preventDefault();
    }
    
    function handleSubmit(ev){
    ev.preventDefault();
      if(!name){
        alert('Debe escribir el nombre de algún país.');
      }
    dispatch(getCountryByName(name))
    setCurrentPage(1);
  }
  
    return (
        <div>
            
             {/* <input
              type="text"
              name="input"
              key="countryname"
              placeholder='Search Country...'
              onChange={handleChange}
               /> */}
            
            <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Search Country' onChange={handleInputChange} value={name} />
            <input type='submit' value='Search' className='findBTN'/>
          </form>
        </div>
        
  )
}


     
 
            // <form onSubmit={handleSubmit}>
            //      <input type='text' placeholder='Buscar País' onChange={handleInputChange} value={name} />
            //      <input type='submit' value='Buscar'/>
            // </form>
 
// />  
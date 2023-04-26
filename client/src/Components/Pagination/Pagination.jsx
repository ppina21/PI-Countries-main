import React from 'react'
 import style from "./Pagination.module.css"

export default function Pagination({allCountrysPage, countryByPage, setCurrentPage,currentPage}) {

  const pagesCountrys = [];

  for (let i = 1; i <= Math.ceil(allCountrysPage/countryByPage); i++)  {
    pagesCountrys.push(i)
  }

  return (
        
        <div className={style.pagination}>
          { 
            pagesCountrys.map((page, index) => {
               return ( <button key={index} onClick={() => setCurrentPage(page)} className={page === currentPage ? 'active' : ''}
               >{page}</button>)
             })
         }
       </div>
       
    
    )
    
  }
  
    
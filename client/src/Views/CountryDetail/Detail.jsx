import React from 'react';
import { Link, useParams  } from "react-router-dom";
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getCountryByID } from "../../Redux/Actions/actions";
import style from "./Detail.module.css"



export default function Detail() {
  

   const { id } = useParams();
  
   const dispatch = useDispatch();

   const countryDetail = useSelector(state => state.detailID)
   
  useEffect(() => {
    dispatch(getCountryByID(id))
  },[dispatch,id])

  
  return (
    
    <div>
        {
        countryDetail.hasOwnProperty("name") ?
        <div>
          <div className={style.cardDetail}>
            <div>
              
               <h2 className='coudet'>{countryDetail.name}</h2>
               <img src={countryDetail.flags} alt='Bandera' className={style.Detailimg}/>
               <p>Continent: {countryDetail.continents}</p>
               <p>Capital: {countryDetail.capital}</p>
               <p>Subregion: {countryDetail.subregion}</p>
               <p>Area: {parseInt(countryDetail.area).toLocaleString('de-DE')} Km2</p>
               <p>Population: {countryDetail.population.toLocaleString('de-DE')}</p>
        
            </div>
          </div>
          <div className={style.activity}>
            
            <div className={style.content}>
            <br/>
            <h2><i >Activities:</i></h2>
              {
                countryDetail.activities?.length > 0 
                ? countryDetail.activities.map(act => (
                  <p key={act.id} className={style.textAct}>
                    <li className='titleAct'>Activity: {act.name}</li>
                    <li>Season: {act.season}</li>
                    <li>Duration: {act.duration}</li>
                    <li>Difficulty: {act.difficulty}</li>
                    <br/>
                  </p>
                )) : <h3 className='noActivity'>¡The country has no activities!</h3>
              }
            </div>
          </div>
        </div> : <p>Buscando.....</p>
      }
             <div>
       
           <h3><Link to='/create'>Add an Activity</Link></h3>
            </div>
      

    <div><Link to='/home'>⬅ Back to home </Link></div>
    </div>
    )
  }
 
  

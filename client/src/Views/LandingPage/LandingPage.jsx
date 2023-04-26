import React from 'react'
import { Link } from "react-router-dom";
import style from "./Landing.module.css"


export default function LandingPage() {
  return (
    <div className={style.landingContainer}>
      <h1 className={style.titleLand}>Welcome to Countries Api</h1>
      <Link  to= "/home">
        <div className={style.divButton}>
           <button className={style.buttonLand}>Go Home</button>
         </div>
      </Link>
     
    </div>
  )
}


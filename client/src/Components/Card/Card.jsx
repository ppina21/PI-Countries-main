// Este componente debe mostrar la informacion de cada pais a traves de un mapeo... y ademas tener un link para ir al detalle del  pais.
import style from "./Card.module.css"
import { Link } from "react-router-dom"

export default function Card(props) {
    
    const {name, flags,continents,id,population} = props 
    return (
      <>
       <Link to={`/detail/${id}`}>
          <div className={style.card}>
              <img src={flags} width="150" height="150" alt={name} />
              <div className={style.cardInfo}>
              <h1>{name}</h1>
              <h3>{continents}</h3>
              <h3>{population}</h3>
              </div>
          </div>
        </Link>
      
      </>
      // <div className={style.card}>
      //     <h2>{name}</h2>
      //   <img src={flags} alt={name} />
      //   <div className={style.cardInfo}>
      //     <h4>{continents}</h4>
      //     <h4>{population}</h4>
      //   </div>
      //   <Link to={`/detail/${id}`}>
      //      <button className={style.button}>Detail</button>
      //   </Link>
      // </div>
  )
}

  //  <div className={style.card}>
  //     <h2 className={style.title}>{name}</h2>
  //     <div className={style.imageWrapper}>
  //       <img src={flags} className={style.flagImg} alt={flags} />
  //     </div>
  //     <div className={style.content}>
  //       <p className={style.text}>Continents: {continents}</p>
  //       <p className={style.text}>Population: {population}</p>
  //       <Link to={`/detail/${id}`}>
  //         <button className={style.button}>Detail</button>
  //       </Link>
  //     </div>
  //  </div>
import { useEffect,useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCountrys, getActivity, countryByActivitys} from "../../Redux/Actions/actions"
import style from "./Home.module.css"
import Card from "../../Components/Card/Card"
import Pagination from "../../Components/Pagination/Pagination"
import SearchBar from "../../Components/SearchBar/SearchBar"
import FilterByContinent from "../../Components/Filter and Order/FilterByContinent"
import OrderByAlphabet from "../../Components/Filter and Order/OrderByAlphabet"
import OrderbyPopulation from "../../Components/Filter and Order/OrderbyPopulation"
import { NavLink } from "react-router-dom"




export default function Home() {
   
  const dispatch = useDispatch();
  const allCountrys = useSelector((state) => state.Countrys)
  const actTour = useSelector((state)=> state.Activities); ///////////// PRUEBA FILTER ACTIVITY ////////// 
  const [inOrder, setInOrder] = useState(''); ///////////// PRUEBA FILTER ACTIVITY //////////
  
  const [currentPage, setCurrentPage] = useState(1); //  Guardo mi pagina actual en un state.
  const [numCountrysPage] = useState(10); // Guardo el num de elementos/countrys que quiero mostrar por pagina (10);
 
  

  const lastPostIndex = currentPage * numCountrysPage; // multiplicamos la pagina actual x el orden de elementos mostrados.
  const firstPostIndex = lastPostIndex - numCountrysPage; // tomamos el index del ultimo post y le restamos los elementos : lastPostIndex(20)-numCountrys(10) = 10
  const currentCountrys = allCountrys.length ? allCountrys.slice(firstPostIndex, lastPostIndex) : allCountrys;

  ///////////// PRUEBA FILTER ACTIVITY //////////

 const arrayActTour = actTour && actTour.map(act => act.name).sort();
  let newActTour = [];

  for (let i = 0; i < arrayActTour.length; i++) {
    if(arrayActTour[i] !== arrayActTour[i+1]){
      newActTour.push(arrayActTour[i]);
    }
  }
  

  function handleCountryActivity(ev){
    ev.preventDefault();
    dispatch(countryByActivitys(ev.target.value))
    setCurrentPage(1);
    setInOrder(`Ordenado ${ev.target.value}`)
  }


  useEffect(() => {
    dispatch(getCountrys())
    dispatch(getActivity())
  }, [dispatch])

  const handleFilterClick = (e) => {
    e.preventDefault();
    dispatch(getCountrys())
    
  }

 
  return (
      
      
    <div className={style.containerHome}>
         
    
      <div className={style.filtersContainer}>

        <div className={style.searchDiv}>
          <SearchBar setCurrentPage={setCurrentPage}/>
        </div>
         <div className={style.filterContinent}>
               <FilterByContinent setCurrentPage={setCurrentPage}/>
             </div>
               <div>
                  <OrderByAlphabet setCurrentPage={setCurrentPage}/>
              </div>
              <div>
                  <OrderbyPopulation setCurrentPage={setCurrentPage}/>
        </div>
        
        
              <div className= "filtro">
              <select onChange={ev=>handleCountryActivity(ev)} className='selHome'>
                <option value="All">Activities</option>
                if(newActTour.length === 0){
                  <NavLink to="/create" className='actForm'>
                  <p className='crearActividad'>No Hay actividades ¿Crear?</p>
                </NavLink>}
               : { newActTour && newActTour.map(act => <option key={act} value={act}>{act}</option>)}
              </select>
        </div>
        
        <div><button onClick={e => { handleFilterClick(e) }}>Clean Filter</button></div>
                  
        
        
            </div>
      
    
  
      
           <div className={style.cardHome}>
            {
              currentCountrys?.map(co=> {
                return (
                  <Card name={co.name} continents={co.continents}  flags={co.flags} population={co.population}  id={co.id} key={co.id}/>
                );
              })
            }
          </div>
      
      
             <div className={style.paginationHome}>
           <Pagination
             allCountrysPage={allCountrys.length}
             countryByPage={numCountrysPage}
             setCurrentPage={setCurrentPage}
            />          
             </div>
        
          </div>
         
  )
}








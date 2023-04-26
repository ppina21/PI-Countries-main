// Este componente se encarga  de tomar un array de paises y por cada pais , renderizar un componente Card (osea hacer una cartita por cada pais.)
import Card from "../Card/Card";
import style from "./CardsContainer.module.css"
import { useSelector } from "react-redux";

export default function CardsContainer() {
  
    const Countrys = useSelector(state=>state.Countrys)

    return (
          <div className={style.container}>
            
            {Countrys.length > 0 ?
                Countrys.map(country => {
                return <Card
                    key={country.name}
                    id={country.id}
                    name={country.name}
                    flags={country.flags}
                    continents={country.continents}
                    capital={country.capital}
                    subregion={country.subregion}
                    area={country.area}
                    population={country.population}
                    activities={country.activities}
                />
                })
                :
                    <div>
                <Card
                    key={Countrys.name}
                    id={Countrys.id}
                    name={Countrys.name}
                    flags={Countrys.flags}
                    continents={Countrys.continents}
                    capital={Countrys.capital}
                    subregion={Countrys.subregion}
                    area={Countrys.area}
                    population={Countrys.population}
                    activities={Countrys.activities}   
                />
              </div>
         }    
          </div>
    )
}
    


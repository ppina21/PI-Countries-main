import {
  GET_COUNTRY_BY_NAME,
  GET_COUNTRYS,
  ORDER_BY_ALPHABET,
  ORDER_BY_POPULATION,
  ORDER_BY_CONTINENTS,
  GET_COUNTRY_BY_ID,
  GET_ACTIVITY,
  COUNTRY_BY_ACTIVITY,
  POST_ACTIVITY,
 
} from "../Actions/actions";

import { nameAlphabet, populationFilter } from "../Actions/actions";



const initialState = {
    Countrys: [],
    Allcontinents: [],
    Activities: [],
    detailID: {},
    controllActivity: {},
    
    
    
};


const rootReducer = (state = initialState, action) => {

     // let aux = [];

    switch (action.type) {
           
        case GET_COUNTRYS:
            return {
                ...state,
              Countrys: action.payload,
              Allcontinents: action.payload,
              
            };
            
      case GET_COUNTRY_BY_NAME: 
        
            return {
                ...state,
                 Countrys: action.payload
        }
      case GET_COUNTRY_BY_ID:
        return {
          ...state,
          detailID: action.payload
        }
       
      case ORDER_BY_CONTINENTS: 
            const allContinents = state.Allcontinents;
            const continentFilter = action.payload === "All" ? allContinents :
            allContinents.filter(cont => cont.continents.replace(/[{}"]/g, "") === action.payload)  
            return {
                ...state,
                Countrys: continentFilter
           }
  
        case ORDER_BY_ALPHABET:
            {
      if(action.payload === 'a-z') {
        return {
          ...state,
          Countrys: state.Countrys.slice().sort(nameAlphabet),
         
        }
      } else {
        return {
          ...state,
          Countrys: state.Countrys.slice().sort(nameAlphabet).reverse(),
          
        }
      }
        }
      case ORDER_BY_POPULATION: 
        {
          if (action.payload === "population +") {
            return {
              ...state,
             Countrys: state.Countrys.slice().sort(populationFilter),
            
            }
          } else {
            return {
              ...state,
             Countrys: state.Countrys.slice().sort(populationFilter).reverse(),
             
            }
          }  
        }
      
      case GET_ACTIVITY:
        return {
          ...state,
          Activities: action.payload
        }
      
      
      case COUNTRY_BY_ACTIVITY:
            const activitiesbycountries = state.Activities
            const countriesAll = state.Countrys
            const filt = action.payload ==='sin filtros' ? countriesAll : activitiesbycountries.filter(a=> a.name ===  action.payload)[0].countries.map(e => e)
            return{
                    ...state,
                    Countrys: filt
            }
      
      case POST_ACTIVITY:
        
        return {
          ...state,
          controllActivity: action.payload 
        }
        default:
            return { ...state };
    }
};


export default rootReducer;
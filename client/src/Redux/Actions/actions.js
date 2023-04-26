import axios from "axios";

const url = 'http://localhost:3001';

export const GET_COUNTRYS = "GET_COUNTRYS";
export const GET_COUNTRY_BY_NAME = "GET_COUNTRY_BY_NAME"
export const GET_COUNTRY_BY_ID = "GET_COUNTRY_BY_ID"
export const ORDER_BY_ALPHABET = "ORDER_BY_ALPHABET"
export const ORDER_BY_POPULATION = "ORDER_BY_POPULATION"
export const ORDER_BY_CONTINENTS = "ORDER_BY_CONTINENTS"
export const CREATE_ACTIVITY = "CREATE_ACTIVITY"
export const GET_ACTIVITY = "GET_ACTIVITY"
export const COUNTRY_BY_ACTIVITY = "COUNTRY_BY_ACTIVITY"
export const POST_ACTIVITY = "POST_ACTIVITY"




///// GET A TODOS LOS PAISES , POR ID  Y POR NOMBRE /////
export  const getCountrys = () => {
    return async function (dispatch) {
        const apiData = await axios.get(`${url}/countries`);
        const Countrys = apiData.data;
        
        dispatch({ type: GET_COUNTRYS, payload: Countrys })
    };
};

export  const getCountryByName = (name) => {
    return async function (dispatch) {
        try {
            const apiData = await axios.get(`${url}/countries?name=${name}`);
            const Countrys = apiData.data;
         
            dispatch({ type: GET_COUNTRY_BY_NAME, payload: Countrys })
        } catch (error) {
           return  error.message
        }
    };
};


export  const getCountryByID = (id) => {
    return async function (dispatch) {
        const apiData = await axios.get(`${url}/countries/${id}`);
        const detailID = apiData.data;
        
        dispatch({ type: GET_COUNTRY_BY_ID, payload: detailID })
    };
};



/////////////// OTROS ///////////////



export const createActivity = (payload) => {
    return async function (dispatch) {
        const apiData = await axios.post(`${url}/activities`, payload)
         console.log(apiData);
        
        dispatch({type: POST_ACTIVITY, payload: apiData})
    }
}




export const getActivity = () => {
    return async function (dispatch) {
        const apiData = await axios.get(`${url}/activities`)

        const getDataActivity = apiData.data;
        dispatch({ type: GET_ACTIVITY , payload: getDataActivity})
    }
}

export const countryByActivitys = (payload) => {
    return {
        type: COUNTRY_BY_ACTIVITY,
        payload
    }
}


export const orderByAlphabet = (type) => {
    return {
        type: ORDER_BY_ALPHABET,
        payload: type
    }
}

export const nameAlphabet = (a, b) => {
    if(a.name < b.name) return -1
  if(b.name < a.name) return 1 
  return 0
}


export const orderByPopulation = (payload) => {
    return {
        type: ORDER_BY_POPULATION,
        payload
    }
}

export const populationFilter = (a,b) => {
    if (a.population < b.population) return -1
    if (b.population < a.population) return 1
    return 0 
}

export const orderByContinent = (payload) => {
    return {
        type: ORDER_BY_CONTINENTS,
        payload
    }
}



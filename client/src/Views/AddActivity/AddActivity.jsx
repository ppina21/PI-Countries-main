import { useState, useEffect } from "react";
//import axios from "axios"
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCountrys,createActivity } from "../../Redux/Actions/actions"
import { validate } from "./Validate";
import style from "./AddActivity.module.css";


export default function AddActivity() {
  
  // let getBack = useHistory();
  //const url = 'http://localhost:3001';
  const dispatch = useDispatch();
  const countries = useSelector(state => state.Countrys)
  const controllActivity = useSelector(state => state.controllActivity)


  const [error, setError] = useState({});
   
  const [form, setForm] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countries: []
   });
  
  useEffect(() => {
    dispatch(getCountrys())
  },[dispatch])


  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setForm({ ...form, [property]: value })
    setError(validate ({...form, [property]:value}))
 }

  
  function handleSelect(e) {
    if (form.countries.find(name => name === e.target.value)) {
       return alert ("The country already selected")
    }
    setForm({
      ...form,
      countries:[...form.countries, e.target.value]
    })
    setError(validate({
      ...form,
      countries: [...form.countries, e.target.value]
    }))
  }

  function filterCountrys(e) {
    setForm({
      ...form,
      countries: form.countries.filter(el => el !== e.target.name)
      })
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (    error.name !== undefined 
                || error.difficulty !== undefined 
                || error.duration !== undefined 
                || error.season !== undefined 
                || error.countries !== undefined 
        )  {
            return alert("Sorry, all fields are required");
        } else if (form.name === "" 
            || form.difficulty === "" 
            || form.duration === "" 
            || form.season === ""
            || form.countries?.length === 0
             ) {
                
            return alert("Sorry, all fields are required");
        } else {  
           dispatch(createActivity(form))
      //  console.log(form)
      // axios.post(`${url}/activities`, form)
      // .then(r => console.log(r.data))
            setForm({
                name: '',
                difficulty: '',
                duration: '',
                season: '',
                countries: []
            })
       console.log(controllActivity.message);
    }
   
  }

  

  return (
       
    <div className={style.containerActivity}>
       <h2>Create tourist activity</h2>
      <form  className={style.containerForm}  onSubmit={(e)=>handleSubmit(e)}>
       <div>
        <label>Activity Name:</label>
          <input
            placeholder="Name..."
            className={style.formInput}
            type="text"
            value={form.name}
            onChange={changeHandler}
            name="name"
            
           
          />
          
          {error ? <p>{error.name}</p> : null}
          
      </div>
      
        <div>
        
          <label>Difficulty:</label>
    
          <select  className={style.formInput} value={form.difficulty} onChange={changeHandler} name="difficulty">
            <option value="1">Very Easy - For everyone</option>
            <option value="2">Easy - For everyone</option>
            <option value="3">Normal - For everyone</option>
            <option value="4">Difficult - Only for people practicing this activity</option>
            <option value="5">Extreme - For experts</option>
          </select>
          
          {error ? <p>{error.difficulty}</p> : null}
          
      </div>
      
        <div>
          
        <label>Duration:</label>
          <input
            placeholder="Duration..."
            className={style.formInput}
            type="text"
            value={form.duration}
            onChange={changeHandler}
            name="duration"
        />
          {error ? <p>{error.duration}</p> : null} 

      </div>
      
       <div>
        <label>Season:</label>

        <select  className={style.formInput} onChange={changeHandler} name="season"  value={form.season}>
           <option disable hidden>Select Season</option>
           <option value="All">All seasons</option>
           <option value="Summer">Summer</option>
           <option value="Spring">Spring</option>
           <option value="Winter">Winter</option>
           <option value="Autumn">Autumn</option>

          </select>
          
          {error ? <p>{error.season}</p> : null} 
          
      </div>
      
      
        <div>
         <label >Country Name:</label>
          <select className={style.formInput} onChange={(e)=>handleSelect(e)}>
          
          {
            countries.map( e => {
                return (
               <option value={e.name} key={e.name} >{e.name}</option>
                   )
             })
           }
          </select>
          
          {error ? <p>{error.countries}</p> : null}
          
      </div>
        <div>
          <div>
           <input className={style.btnPrimary} type="submit" value="Send"/>
         </div>
       </div>

      {/* <button type="submit">Create Activity</button>
      <button>Add new Activity</button> */}
      </form>

         <div className={style.boxcountriesFather}>
                    <h3>Countries</h3>
                    <div className={style.boxcountries}>
                        {
                            form.countries?.map( (e) => {
                                return (
                                    
                                    <div>
                                        <div  className={style.countries}>
                                            <li>{e}</li>
                                            <button  name={`${e}`} onClick={(e)=>{filterCountrys(e)}}>X</button>
                                        </div>
                                    </div>
                                )
                            })
                        
                        }
                    </div>
                </div>

 
      <div>
         <Link to='/home'>⬅ Back to home </Link>
      </div>
    </div>
   
  )
   
}

import { Route, useLocation } from "react-router-dom";
 import "./App.css"
import Home from "./Views/Home/Home.jsx";
import LandingPage from "./Views/LandingPage/LandingPage.jsx";
import AddActivity from "./Views/AddActivity/AddActivity.jsx"
import Detail from "./Views/CountryDetail/Detail.jsx";
import NavBar from "./Components/NavBar/NavBar.jsx";


function App() {
   
  const location = useLocation();

  return (
    <div className="App">
      
       {location.pathname !== "/" && <NavBar />}

      <Route exact path="/">  <LandingPage/>  </Route>
      
      <Route path='/home'>
        <Home />
      </Route>

      <Route path="/create" render = {()=> <AddActivity/>}/>

      <Route path="/detail/:id" render = {()=> <Detail/>}/>

    </div>
  );
}

export default App;

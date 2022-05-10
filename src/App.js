
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import BreweriesCards from './components/breweriesCards';

function App() {

  const url = 'https://api.openbrewerydb.org/breweries';
  const [breweries,setBreweries] =  useState(null);
  
  useEffect( () => {
    axios.get(url).then(response => {
      setBreweries(response.data)
    }) },  [url]
  ) 
  if(breweries){
     return (
    <div className="App">
      <div className="container">
            <div className="row m-2">
             {breweries.map(brewery => <BreweriesCards key = {brewery.id} brewery = { brewery } ></BreweriesCards> )}
            </div>
        </div>
    </div>
  );
  }
 
}

export default App;

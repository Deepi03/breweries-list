
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
      {breweries.map(brewery => <BreweriesCards brewery = { brewery} ></BreweriesCards> )}

    </div>
  );
  }
 
}

export default App;

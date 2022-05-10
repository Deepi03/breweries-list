import './App.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Getbreweries } from './components/getBreweries'
import BreweriesCards from './components/breweriesCards'

function App () {
  const [breweries, setBreweries] = useState(null)
  useEffect(() => {
    Getbreweries().then(res => {
      setBreweries(res)
    })
  })

  if (breweries) {
    return (
      <div className='App'>
        <div className='container'>
          <div className='row m-2'>
            {breweries.map(brewery =>
              <BreweriesCards key={brewery.id} brewery={brewery} />
            )}
          </div>
        </div>
      </div>
    )
  }
}
export default App

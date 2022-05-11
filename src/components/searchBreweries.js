import React from 'react'
import { useState, useEffect } from 'react'
import { Getbreweries, GetbreweriesByName } from './getBreweries'
import BreweriesCards from './breweriesCards'

let stylingObject = {
  padding: {
    width: '20rem',
    height: '2rem'
  }
}
function Search () {
  const [breweries, setBreweries] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  useEffect(
    () => {
      Getbreweries().then(res => {
        if (searchTerm.length > 0) {
          let val = res.filter(r =>
            r.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
          setBreweries(val)
        } else {
          setBreweries(res)
        }
      })
    },
    [searchTerm]
  )

  /* useEffect(
    () => {
      GetbreweriesByName(searchTerm).then(res => {
        setBreweries(res)
      })
    },
    [searchTerm]
  )
 */
  if (breweries) {
    return (
      <div>
        <div>
          <input
            type='text'
            className='m-2'
            placeholder='Search Breweries by name'
            onChange={evt => {
              setSearchTerm(evt.target.value)
            }}
            style={stylingObject.padding}
          />
        </div>
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

export default Search

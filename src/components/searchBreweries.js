import React from 'react'
import { useState, useEffect } from 'react'
import { Getbreweries, GetbreweriesByName } from './getBreweries'
import BreweriesCards from './breweriesCards'

function Search () {
  const [breweries, setBreweries] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  useEffect(() => {
    Getbreweries().then(res => {
      setBreweries(res)
    })
  }, [])

  useEffect(
    () => {
      GetbreweriesByName(searchTerm).then(res => {
        setBreweries(res)
      })
    },
    [searchTerm]
  )

  if (breweries) {
    return (
      <div>
        <input
          type='text'
          className='m-2'
          placeholder='Search Breweries by name'
          onChange={evt => {
            setSearchTerm(evt.target.value)
          }}
        />
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

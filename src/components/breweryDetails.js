import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { GetbreweryDetail } from './getBreweries'

function BreweryDetails () {
  let params = useParams()
  const [breweryDetail, setBreweryDetail] = useState(null)

  useEffect(() => {
    GetbreweryDetail(params.id).then(res => {
      console.log('inside useEf')
      setBreweryDetail(res)
    })
  }, [])

  if (breweryDetail) {
    return (
      <div>
        <div className='m-2'>
          <h3>
            {' '}{breweryDetail.name}{' '}
          </h3>
        </div>
      </div>
    )
  }
}

export default BreweryDetails

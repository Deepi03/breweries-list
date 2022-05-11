import React from 'react'
import { Link, Outlet } from 'react-router-dom'

let stylingObject = {
  background: {},
  divCard: {
    background: '#D3D3D3',
    width: '18rem'
  },
  cardTitle: {
    color: 'white',
    padding: '1rem'
  }
}
function BreweriesCards ({ brewery }) {
  return (
    <div className='col-sm m-2'>
      <div className='card' style={stylingObject.divCard}>
        <div className='card-body'>
          <div>
            <h5 className='card-title'>
              {' '}{brewery.name}{' '}
            </h5>
          </div>
          <p className='card-text'>
            {' '}{brewery.brewery_type}
          </p>
          <p className='card-text'>
            {' '}{brewery.city}
          </p>
          <Link to={`/details/${brewery.id}`} className='btn btn-info'>
            Detail
          </Link>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default BreweriesCards

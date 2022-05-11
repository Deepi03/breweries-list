import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { GetbreweryDetail } from './getBreweries'

let stylingObject = {
  body: {},
  divHead: {
    textAlign: 'center',
    marginTop: '3rem'
  },
  head: {
    textAlign: 'center',
    fontSize: '2rem',
    fontWeight: 'Bold'
  },
  card: {
    textAlign: 'center',
    width: '50rem',
    margin: ' 4rem auto',
    float: 'none',
    marginBottom: '10px',
    background: '#D3D3D3',
    color: 'black'
  },
  ul: {
    listStyle: 'none',
    textTransform: 'capitalize',
    fontSize: '1.2rem'
  }
}
function BreweryDetails () {
  let params = useParams()
  const [breweryDetail, setBreweryDetail] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    GetbreweryDetail(params.id).then(res => {
      setBreweryDetail(res)
    })
  }, [])

  if (breweryDetail) {
    return (
      <div>
        <div style={stylingObject.divHead}>
          <h3>
            Details of {breweryDetail.name}
          </h3>
        </div>

        <div className='card' style={stylingObject.card}>
          <div className='card-body'>
            <h5 style={stylingObject.head}>
              {' '}{breweryDetail.name}{' '}
            </h5>
            <ul style={stylingObject.ul}>
              <li>
                {breweryDetail.brewery_type
                  ? <span>
                      Brewery Type: {breweryDetail.brewery_type}
                  </span>
                  : null}
              </li>
              <li>
                {breweryDetail.phone
                  ? <span>
                      Contact num: {breweryDetail.phone}{' '}
                  </span>
                  : null}
              </li>
              <li>
                {breweryDetail.website_url
                  ? <span>
                      Webiste :{' '}
                    <a href={breweryDetail.website_url} target='blank'>
                      {breweryDetail.website_url}
                    </a>
                  </span>
                  : null}
              </li>
              <li>
                {breweryDetail.street ||
                breweryDetail.state ||
                breweryDetail.postal_code
                  ? <span>Address :-</span>
                  : null}{' '}
                {breweryDetail.street
                  ? <span>
                    {' '} {breweryDetail.street}
                  </span>
                  : null}
                {breweryDetail.state
                  ? <span>
                    {' '}{breweryDetail.state}
                  </span>
                  : null}
                {breweryDetail.postal_code
                  ? <span>
                    {' '}{breweryDetail.postal_code}
                  </span>
                  : null}
              </li>
            </ul>
            <button className='btn btn-info' onClick={() => navigate(-1)}>
              Go back
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default BreweryDetails

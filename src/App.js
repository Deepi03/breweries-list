import './App.css'

import Search from './components/searchBreweries'
let stylingObject = {
  padding: {
    paddingTop: '2rem',
    paddingBottom: '1rem'
  }
}
function App () {
  return (
    <div className='App'>
      <div>
        <h2 className='' style={stylingObject.padding}>
          Breweries
        </h2>
      </div>
      <Search />
    </div>
  )
}
export default App

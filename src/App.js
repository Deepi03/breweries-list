import './App.css'

import Search from './components/searchBreweries'
let stylingObject = {
  background: {
    background: '#D3D3D3'
  }
}
function App () {
  return (
    <div className='App' style={stylingObject.background}>
      <h2 className=''>Breweries</h2>
      <Search />
    </div>
  )
}
export default App

export async function Getbreweries () {
  const response = await fetch(`https://api.openbrewerydb.org/breweries`)
  return await response.json()
}

export async function GetbreweryDetail (id) {
  const response = await fetch(`https://api.openbrewerydb.org/breweries`)
  let result = await response.json()
  let output = result.filter(r => {
    return r.id === id
  })
  return output[0]
}

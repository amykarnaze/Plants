// token= Y_DWydtmE3ap7Rg1OMEKHoCWdACktJTUY4sTYrGwJ6Q
// all data= https://trefle.io/api/v1/plants?token=Y_DWydtmE3ap7Rg1OMEKHoCWdACktJTUY4sTYrGwJ6Q
const ediblePlantsUrl = "https://cors-anywhere.herokuapp.com/https://trefle.io/api/v1/plants?token=Y_DWydtmE3ap7Rg1OMEKHoCWdACktJTUY4sTYrGwJ6Q&filter%5Bedible_part%5D=roots,stem,leaves,flowers,fruits,seeds"
// const ediblePlantsUrl = "https://cors-anywhere.herokuapp.com/https://trefle.io/api/v1/plants?token=Y_DWydtmE3ap7Rg1OMEKHoCWdACktJTUY4sTYrGwJ6Q&filter%5Bedible_part%5D=roots,stem,leaves,flowers,fruits,seeds&page=2"

export const fetchAllPlants = async () => {
  const response = await fetch(ediblePlantsUrl, { header: 'Access-Control-Allow-Origin' })
  .then(response => {
    if (response.ok) {
      return response.json()
    } else {
      throw alert('Opps, plants right now')
    }
  })
  return response
}

export const fetchPlantInfo = async (id) => {
  const indvPlantUrl = `https://cors-anywhere.herokuapp.com/https://trefle.io/api/v1/species/${id}?token=Y_DWydtmE3ap7Rg1OMEKHoCWdACktJTUY4sTYrGwJ6Q`
  const response = await fetch(indvPlantUrl, { 
    header: 'Access-Control-Allow-Origin'})
    .then(response => {
      console.log(response)
      if (response.ok) {
        return response.json()
      } else {
        throw alert('Opps, plants right now')
      }
    })
   return response

  }
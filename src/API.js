// token= Y_DWydtmE3ap7Rg1OMEKHoCWdACktJTUY4sTYrGwJ6Q
// all data= https://trefle.io/api/v1/plants?token=Y_DWydtmE3ap7Rg1OMEKHoCWdACktJTUY4sTYrGwJ6Q

const plantUrl = "https://trefle.io/api/v1/plants?token=Y_DWydtmE3ap7Rg1OMEKHoCWdACktJTUY4sTYrGwJ6Q"

export const fetchAllPlants = async () => {
  const response = await fetch(plantUrl, {
    })
    .then(response => {
      console.log(response)
      if (response.ok) {
        return response.json()
      }
    })
  return response
}

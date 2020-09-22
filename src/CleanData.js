import { fetchAllPlants } from './API.js'

export const formatPlants = async () => {
  const response = await fetchAllPlants()
  // const response2 = await fetchAllPlants()
  // const responses = response.concat(response2)

  const plantData = response.data;
  return plantData.map(plant => {
    let plantList = {
      id: plant.id,
      common_name: plant.common_name,
      family: plant.family,
      image_url: plant.image_url,
      scientific_name: plant.scientific_name,
      plantLoved: false
    }
    // console.log(plantList)
    return plantList
  })
  // console.log(result)
  // return plantData
}

//  newObj = {}
//  newObj.id = plant.id,
//    newObj.common_name = plant.common_name,
//    newObj.family = plant.family,
//    newObj.image_url = plant.image_url,
//    newObj.scientific_name = plant.scientific_name
//  return newObj;
//  })
import { fetchAllPlants } from './API.js'

export const formatPlants = async () => {
  const response = await fetchAllPlants()
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
    return plantList
  })
}
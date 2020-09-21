// token= Y_DWydtmE3ap7Rg1OMEKHoCWdACktJTUY4sTYrGwJ6Q
// all data= https://trefle.io/api/v1/plants?token=Y_DWydtmE3ap7Rg1OMEKHoCWdACktJTUY4sTYrGwJ6Q
const ediblePlantsUrl = "https://cors-anywhere.herokuapp.com/https://trefle.io/api/v1/plants?token=Y_DWydtmE3ap7Rg1OMEKHoCWdACktJTUY4sTYrGwJ6Q&filter%5Bedible_part%5D=roots,stem,leaves,flowers,fruits,seeds"

// const plantUrl = "https://cors-anywhere.herokuapp.com/https://trefle.io/api/v1/plants?token=Y_DWydtmE3ap7Rg1OMEKHoCWdACktJTUY4sTYrGwJ6Q"

// const indvPlantUrl = `https://cors-anywhere.herokuapp.com/https://trefle.io/api/v1/species/${id}?token=Y_DWydtmE3ap7Rg1OMEKHoCWdACktJTUY4sTYrGwJ6Q`

// indvPlant : https://trefle.io/api/v1/plants/blitum-bonus-henricus?token=Y_DWydtmE3ap7Rg1OMEKHoCWdACktJTUY4sTYrGwJ6Q"


//indv plant via species w int id:
//https: //cors-anywhere.herokuapp.com/https://trefle.io/api/v1/species/${id}?&token=Y_DWydtmE3ap7Rg1OMEKHoCWdACktJTUY4sTYrGwJ6Q

//indv plant via species
//https: //trefle.io/api/v1/species/183086?&token=Y_DWydtmE3ap7Rg1OMEKHoCWdACktJTUY4sTYrGwJ6Q

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


// {
//   "data": [{
//         "id": 111174,
//         "common_name": "lawndaisy",
//         "slug": "bellis-perennis",
//         "scientific_name": "Bellis perennis",
//         "year": 1753,
//         "bibliography": "Sp. Pl.: 886 (1753)",
//         "author": "L.",
//         "status": "accepted",
//         "rank": "species",
//         "family_common_name": "Aster family",
//         "genus_id": 780,
//         "image_url": "https://bs.floristic.org/image/o/43061c6c2cb49908503eac2eaec0ddab69958e17",
//         "synonyms": [
//           "Bellis integrifolia",
//           "Bellis croatica",
//           "Bellis validula",
//           "Bellis scaposa",
//           "Bellis pumila",
//           "Bellis perennis f. discoidea",
//           "Bellis hortensis",
//           "Bellis hybrida",
//           "Bellis armena",
//           "Bellis minor",
//           "Aster bellis",
//           "Bellis alpina",
//           "Erigeron perennis",
//           "Bellis perennis f. disciformis"
//         ],
//         "genus": "Bellis",
//         "family": "Asteraceae",
//         "links": {
//           "self": "/api/v1/species/bellis-perennis",
//           "plant": "/api/v1/plants/bellis-perennis",
//           "genus": "/api/v1/genus/bellis"
//         }
//       }
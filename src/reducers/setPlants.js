export const plants = (state = [], action) => {
  switch (action.type) {
    case 'SET_PLANTS':
      return action.plants
    default:
      return state
  }
}
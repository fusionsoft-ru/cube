const dimensions = (state={}, action) => {
  switch (action.type) {
    case 'DIMENSION_TOOGLE':
      console.log(state)
      console.log(action)
      return {...state}
    default:
      return state
  }
}

export default dimensions

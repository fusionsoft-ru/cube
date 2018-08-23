const facts = (state={}, action) => {
  switch (action.type) {
    case 'FACT_TOOGLE':
      return {...state}
    default:
      return state
  }
}

export default facts

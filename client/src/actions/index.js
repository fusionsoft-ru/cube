// Action Types

export const DIMENSION_TOGGLE = 'DIMENSION_TOGGLE'
export const FACT_TOGGLE = 'FACT_TOGGLE'


// Action creators
export const dimensionToggle = (id) => ({
  type: 'DIMENSION_TOGGLE',
  id
})

export const factToggle = (id) => ({
  type: 'FACT_TOGGLE',
  id
})

// console.log(dimensionToggle('abra'))

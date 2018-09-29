import irows from '../tests/irows'


function colReducer(state=irows, action) {
  switch(action.type) {
    case 'FACTS_TOGGLE':
      return state
	  default:
      return state
  }
}

export default colReducer

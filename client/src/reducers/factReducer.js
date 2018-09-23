import initialFacts from '../tests/initialFacts'


function factReducer(state=initialFacts, action) {
  switch(action.type) {
    case 'FACTS_TOGGLE':
      console.log('FACTS!!!!!!!!!!!!!!!!!!!!!!!!')
      return state
	  default:
      return state
  }
}

export default factReducer

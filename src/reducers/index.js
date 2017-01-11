import { createStore } from 'redux';
const myStore = createStore(ingredientReducer);


export default function ingredientReducer(state = [], action) {
  var copy = state.slice()
  switch (action.type) {

    case "ADD_INGREDIENT":
    return [action.payload]

    case 'REMOVE_INGREDIENT':
    var num = copy.indexOf(action.payload)
    var result = copy.splice(num, 1)
    return copy
    
    default:
    return state
  }
}

export default function ingredientReducer(state=[], action) {

  switch (action.type){
    case 'ADD_INGREDIENT':
    // console.log(action);
    return [...state, action.payload];
    case 'REMOVE_INGREDIENT':
    // console.log(action);
    let newIngredients = state;
    newIngredients.splice(action.payload, 1);
    return newIngredients;
    default:
    return state;
  }

}

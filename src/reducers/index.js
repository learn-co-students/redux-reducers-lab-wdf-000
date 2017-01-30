
export default function ingredientReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_INGREDIENT':
      return [...state, action.payload]
    case 'REMOVE_INGREDIENT':
          var index = 0;
          state.forEach((ingredient, index) => {
            if(ingredient === action.payload) {
              index = index
              return [...state, state.splice(index, 1)]
              // return Object.assign([], state, state.splice(index, 1))
            }
            // return state
            })
    default:
          return state
          }


}

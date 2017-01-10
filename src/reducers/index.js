export default function ingredientReducer(state = [], action) {
  var stat_sliced = state.slice()
      switch(action.type){
        case 'ADD_INGREDIENT':
           stat_sliced.push(action.payload)
           return stat_sliced
        case 'REMOVE_INGREDIENT':
          var index = stat_sliced.indexOf(action.payload);
          stat_sliced.splice(index, 1);
        return stat_sliced
        default:
          return state
      }
}

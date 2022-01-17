
export const reducer = (state, {type,payload}) => {
    console.log(state,type,payload)
    switch(type){
      case "INC_COUNT":
        return {...state, count: state.count + payload};
        case "DEC_COUNT":
          return {...state, count: state.count - payload};
  case "ADD_TODO":
    return {...state, todo:[...state.todo, payload]};
default:
    return state
    }
  };
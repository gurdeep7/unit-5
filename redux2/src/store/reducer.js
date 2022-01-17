import { ADD_TODO, ADD_TODO_LOADING, ADD_TODO_SUCCESS, GET_TODO_ERROR, GET_TODO_LOADING, GET_TODO_SUCCESS } from "./actionTypes";

const init = {todos:[]}

export const reducer = ( state = init, { type, payload,loading }) => {
  console.log(state.todos,payload)
  switch (type) {
    case ADD_TODO:
      return { ...state,todos: [...state.todos , payload] };
    
    
      case ADD_TODO_LOADING:
      return{
        ...state,
        loading:true
      }
      case ADD_TODO_SUCCESS:
      return{
        ...state,
        todos:[...state.todos,payload],
        loading:false
      }
      case ADD_TODO_LOADING:
      return{
        ...state,
        loading:true,
        error:false
      }
      case GET_TODO_LOADING:
      return{
        ...state,
        loading:true,
      }
      case GET_TODO_SUCCESS:
        return{
          ...state, todos:[...state.todos, payload],
          loading:false
        }

      case GET_TODO_ERROR:
        return{
          ...state,
          loading:false,
          error:true
        }
      default:
      return state;
  }
};

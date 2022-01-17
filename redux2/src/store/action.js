import { ADD_TODO, ADD_TODO_ERROR, ADD_TODO_LOADING, ADD_TODO_SUCCESS, REMOVE_TODO } from "./actionTypes";

export const addTodo = (data)=>({
    type:ADD_TODO,
    payload: data,
})

export const removeTodo = (id)=>({
    type: REMOVE_TODO,
    payload: id,
})

export const addTodoSuccess = (data)=>{
    return{
        type: ADD_TODO_SUCCESS,
        payload:data
    }
}
export const addTodoLoading=()=>{
    return{
        type:ADD_TODO_LOADING,
    }
}

export const addTodoError = (err)=>{
    return{
        type: ADD_TODO_ERROR,
        payload:err
    }
}
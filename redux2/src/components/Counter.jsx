export const Counter = () => {
    return <div> <h1>Counter:{counter}</h1>
    <button onClick={()=>{
      dispatch(addTodo(1))
    }}>Add 1</button></div>
};

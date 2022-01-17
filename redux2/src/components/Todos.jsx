import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodoError, addTodoSuccess } from "../store/action";

export const Todos = () => {
  const [text, setText] = useState("");
  const { loading, todos, error } = useSelector(
    (state) => ({
      todos: state.todosState.todos,
      loading: state.todosState.loading,
      error: state.todosState.error,
    }),
    function (prev, curr) {
      if (prev.loading === curr.loading && prev.error === curr.error) {
        return true;
      }
      return false;
    }
  );
  const dispatch = useDispatch();

  return (
    <div>
      <input
        value={text}
        type="text"
        placeholder="Enter Todo"
        onChange={(e) => setText(e.target.value)}
      ></input>

      <button
        onClick={() => {
          fetch("http://localhost:3001/todo", {
            method: "POST",
            body: JSON.stringify({ status: false, title: text }),
            headers: { "content-type": "application/json" },
          })
            .then((d) => d.json())
            .then((res) => {
              dispatch(addTodoSuccess(res));
            })
            .catch((err) => {
              dispatch(addTodoError());
            });
        }}
      >
        Add Todo
      </button>
      {todos.map((e) => (
        <div>
          {console.log(e)}
          {e.title}- {e.status ? "Done" : "not done"}
        </div>
      ))}
    </div>
  );
};

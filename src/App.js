import React, { useRef } from "react";
import Styles from "./styles/App.module.css";
import useLocalStorage from "./hooks/useLocalStorage";
import Todo from "./components/Todo";
import { useEffect } from "react/cjs/react.development";

function App() {
  const [todos, setTodos] = useLocalStorage("todos");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className={Styles.App}>
      <h1>Simple TODO</h1>
      <form onSubmit={(event) => event.preventDefault()}>
        <div className={Styles.formContainer}>
          <input
            type="text"
            placeholder="Type a TODO"
            className={Styles.formInput}
            ref={inputRef}
          />
          <button
            onClick={() => {
              inputRef.current.value.length > 0 &&
                setTodos([
                  ...todos,
                  {
                    id: new Date(),
                    name: inputRef.current.value,
                    status: false,
                  },
                ]);
              inputRef.current.value = "";
            }}
            className={Styles.formAdd}
          >
            Add
          </button>
        </div>
      </form>
      <ul className={Styles.todos}>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            name={todo.name}
            status={todo.status}
            complete={() => {
              const editedArray = [...todos];
              editedArray[todos.indexOf(todo)].status =
                !todos[todos.indexOf(todo)].status;
              setTodos(editedArray);
            }}
            remove={() => {
              const editedArray = todos.filter((item) => item !== todo);
              setTodos(editedArray);
            }}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;

import { useState } from "react";
import todoContext from "./todoContext";
import Todo from "./components/Todo";

var globalId = 1;

function First() {
  const [todoState, setTodoState] = useState([]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function addTodo() {
    const newTodo = {
      title: title,
      description: description,
      id: globalId++,
    }
    setTodoState([...todoState, newTodo]);
  }
  
  return (
    <div>
      <h1>Todo App with Usestate</h1>
      <input
        type="text"
        id="title"
        placeholder="Todo title"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <br />
      <input
        type="text"
        id="description"
        placeholder="Todo description"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />
      <br />
      <button onClick={addTodo}>Add todo</button>

      <todoContext.Provider value={{todoState, setTodoState}}>
        {todoState.map((todo) => {
          return (
            <Todo
              key={todo.id}
              id={todo.id}
              title={todo.title}
              desc={todo.description}
            ></Todo>
          );
        })}
      </todoContext.Provider>
    </div>
  );
}

export default First;
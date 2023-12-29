import { useState, useContext } from "react";
import todoContext from "../todoContext";

function Todo(props) {
  const {todoState, setTodoState} = useContext(todoContext);

  const [title, setTitle] = useState(props.title);
  const [desc, setDesc] = useState(props.desc);


  const [editState, setEditState] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newDesc, setNewDesc] = useState("");


  function editHandle() {
    setEditState(true);
  }

  function updateHandle() {
    setTitle(newTitle);
    setDesc(newDesc);
  }

  function removeHandle() {
    const updatedTodos = todoState.filter((todo) => todo.id !== props.id);
    setTodoState(updatedTodos);
  }

  return (
    <>
      <div>
        <div>Title: {title}</div>
        <div>Description: {desc}</div>
        <button onClick={removeHandle}>Remove</button>
        <button onClick={editHandle}>Edit</button>
        {editState ? (
          <>
            <input type="text" id="newTitle" placeholder="new title" value={newTitle} onChange={(e)=>setNewTitle(e.target.value)}/>
            <input type="text" id="newDesc" placeholder="new description" value={newDesc} onChange={(e)=>setNewDesc(e.target.value)}/>
            <button onClick={updateHandle}>Update</button>
            <button onClick={()=>setEditState(false)}>close</button>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default Todo;

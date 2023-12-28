import { useState } from "react";

function First() {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();

  function addTodo() {
    console.log(title, description);// TODO:resume doing this todo app;
  }
  


  return (
    <div>
      <h1>Todo App with Usestate</h1>
      <input type="text" id="title" placeholder="Todo title" onChange={(e)=>setTitle(e.target.value)} value={title} />
      <br />
      <input type="text" id="description" placeholder="Todo description" onChange={(e)=>setDescription(e.target.value)} value={description}/>
      <br />
      <button onClick={addTodo}>Add todo</button>

      <div id="todos"></div>
    </div>
  )
}

export default First;

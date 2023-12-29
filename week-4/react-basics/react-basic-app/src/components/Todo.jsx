function Todo(props) {
  const {title, desc} = props;

  return (
    <>
      <div>
        <div>Title: {title}</div>
        <div>Description: {desc}</div>
        <button>remove</button>
        <button>edit</button>
      </div>
    </>
  )
}

export default Todo;

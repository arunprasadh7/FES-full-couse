import "./Todo.css";

const Todo = ({ title }) => {
  function deleteTodo(id) {
    console.log("deleteTodo()", title);
  }
  return (
    <div className="todo__container">
      <h2>{title}</h2>
      <button className="todo__button" onClick={() => deleteTodo(1)}>
        Delete
      </button>
    </div>
  );
};

export default Todo;

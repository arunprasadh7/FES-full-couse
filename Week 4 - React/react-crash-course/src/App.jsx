import "./App.css";
import Title from "./Components/Title.jsx";
import Todo from "./Components/Todo.jsx";
import Modal from "./Components/modal.jsx";

function App() {
  return (
    <>
      <Title />
      <div className="input__area">
        <input
          type="text"
          onChange={(event) => {
            console.log(event.target.value);
          }}
        />
        <button>Add Todo</button>
      </div>
      <div className="todo__wrapper">
        <Todo title="Finish FrontEnd Simplified" />
        <Todo title="Complete Interview Section" />
        <Todo title="Land 100k Job" />
      </div>
      <Modal title="Are you sure?" />
    </>
  );
}

export default App;

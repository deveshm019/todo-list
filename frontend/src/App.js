import { useEffect, useState } from "react";
import Todo from "./components/Todo.js";
import { addTodo, getAllTodo, updateTodo, deleteTodo } from "./utils/HandleApi.js";

function App() {
  const [todo, setTodo] = useState([]);

  const [text, setText] = useState("");

  const [isUpdating, setIsUpdating] = useState(false);

  const [todoID, setTodoId] = useState("");

  const updateMode = (_id,text)=>{
    setIsUpdating(true);
    setText(text);
    setTodoId(_id);
  }

  useEffect(() => {
    getAllTodo(setTodo);
  }, []);

  return (
    <div className="App">
      <div className="container">
        <h1>TO DO APP</h1>
        <div className="top">
          <input
            type="text"
            placeholder="Add Task..."
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
          <div
            className="add"
            onClick={
              isUpdating
                ? () =>
                    updateTodo(todoID, text, setTodo, setText, setIsUpdating)
                : () => addTodo(text, setText, setTodo)
            }
          >
            {isUpdating ? "Update" : "Add"}
          </div>
        </div>
        <div className="list">
          {todo.map((item) => (
            <Todo
              key={item._id}
              text={item.text}
              updateMode={() => {
                updateMode(item._id, item.text);
              }}
              deleteTodo={()=>{
                deleteTodo(item._id,setTodo)
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

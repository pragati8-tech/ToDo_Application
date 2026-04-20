import { useState } from "react";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList"
import { todoList } from "./utils/todo";
function App() {
  const [task, setTask] = useState(todoList);

  function addTask(text) {
    const newTask = {
      id: Date.now(),
      text: text,
      completed: false,
    };
    setTask([...task, newTask]);
  }
  function deleteTask(id) {
    setTask(task.filter((t) => t.id !== id));
  }
  function toggleTask(id) {
    setTask(
      task.map((t) => {
        if (t.id === id) {
          return { ...t, completed: !t.completed }; 
        }
        return t;
      })
    );
  }
  function editTask(id, newText) {
  setTask(task.map((t) => {
    if (t.id === id) {
      return { ...t, text: newText }  
    }
    return t
  }))
}
  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <Header TODoList={todoList} />
         <ToDoList
      tasks={task}
      onAdd={addTask}
      onDelete={deleteTask}
      onToggle={toggleTask}
      onEdit={editTask}
    />
      </div>
    </>
  );
}

export default App;

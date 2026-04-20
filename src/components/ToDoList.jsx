
import { useState } from "react"
import ToDoItem from "./ToDoItem"
function ToDoList({tasks,onAdd,onDelete,onToggle,onEdit}) {
    const [input,setInput] = useState("")
    function handleAdd(){
        if (input ==="") return 
        onAdd(input)
        setInput("")
    }
    return (
        <div className="max-w-xl mx-auto mt-10 px-4">
        <div className="flex gap-2 mb-6">
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"/>
            <button onClick={handleAdd} className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">Add Task</button>
        </div>
            <div>
      {tasks.map((t) => (
        <ToDoItem
          key={t.id}          
          task={t}            
          onDelete={onDelete} 
          onToggle={onToggle} 
          onEdit={onEdit}    
        />
      ))}
    </div>
        </div>
    )
}
export default ToDoList
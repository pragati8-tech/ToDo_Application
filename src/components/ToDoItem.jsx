import { useState } from "react"
function ToDoItem({task, onDelete, onToggle, onEdit}){
     const [isEditing, setIsEditing] = useState(false)
     const [editText, setEditText] = useState(task.text)

  function handleEdit() {
    onEdit(task.id,editText)    
    setIsEditing(false)      
  }

  
  if (isEditing) {
    return (
      <div>
        <input
          value={editText}
          onChange={(e) => setEditText(e.target.value)} className="flex-1 border border-blue-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button onClick={handleEdit} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Save</button>
      </div>
    )
  }
    return(
        <div className="flex items-center justify-between bg-white border border-gray-200 rounded-lg px-4 py-3 mb-3 shadow-sm">
        <span  className={`flex-1 text-gray-800 ${task.completed ? "line-through text-gray-400" : ""}`}>
        {task.text}           
      </span>

      <button onClick={() => onToggle(task.id)} className="bg-green-100 text-green-700 px-3 py-1 rounded-lg text-sm hover:bg-green-200"> 
        {task.completed ? "Undo" : "Done"}
      </button>

      <button onClick={() => setIsEditing(true)} className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-lg text-sm hover:bg-yellow-200">Edit</button>

      <button onClick={() => onDelete(task.id)} className="bg-red-100 text-red-600 px-3 py-1 rounded-lg text-sm hover:bg-red-200"> 
        Delete
      </button>
        </div>
    )
}
export default ToDoItem
import { useState } from "react";
import Header from "./components/Header";
function App() {
    const [task,setTask] = useState([])

    function addTask(){

    }
  return (
    <>
       <div className="min-h-screen bg-gray-100">
      <Header />
  
    </div>
    </>
  )
}

export default App

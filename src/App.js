import TaskForm from "./Component/TaskForm";
import "./styles.css";
import { Routes, Route } from "react-router-dom";
import TaskTabuler from "./Component/TaskTabuler";
import Navbar from "./Component/Navbar";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<TaskForm />} />
        <Route path="/taskform" element={<TaskTabuler />} />
      </Routes>
    </div>
  );
}

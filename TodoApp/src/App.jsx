import Complete from "./component/Complete";
import All from "./component/All";
import Active from "./component/Active";
//
import { Routes, Route, useNavigate, Outlet } from "react-router-dom";
import { useState } from "react";
//
import "./App.css";

function App() {
  const navigate = useNavigate();
  const [scratchOut, setScratchOut] = useState();
  const [tasks, setTasks] = useState({
    activeTasks: [],
    completeTasks: [],
  });

  const [input, setInput] = useState("");

  //Thêm nhiệm vụ
  const handleAddTask = () => {
    if (input.trim()) {
      setTasks({
        ...tasks,
        activeTasks: [...tasks.activeTasks, input],
      });
      setInput("");
      setScratchOut(true);
    }
  };

  //hàm đánh dấu đã hoàn thành
  //tạo 1 mảng mới k chứa nhiệm vụ đã hoàn thành, thêm nhiệm vụ đã hoàn thành vào completeTasks

  const handleCompleteTask = (task) => {
    setTasks((prevTasks) => {
      const updatedActiveTasks = prevTasks.activeTasks.filter(
        (item) => item !== task
      );
      return {
        activeTasks: updatedActiveTasks,
        completeTasks: [...prevTasks.completeTasks, task],
      };
    });
    setScratchOut(false);
  };

  //xóa 1 nhiệm vụ
  const handleDeleteTask = (task) => {
    setTasks((prevTasks) => {
      const updatedCompleteTasks = prevTasks.completeTasks.filter(
        (item) => item !== task
      );
      return {
        ...prevTasks,
        completeTasks: updatedCompleteTasks,
      };
    });
  };
  // Xóa hớt
  const deleteAllCompleteTasks = () => {
    setTasks(() => {
      return {
        ...tasks,
        completeTasks: [],
      };
    });
  };

  return (
    <div className="todoApp">
      <h1>#todo</h1>
      <div className="todoMenu">
        <div
          onClick={() => {
            navigate("/");
          }}
        >
          All
        </div>
        <div
          onClick={() => {
            navigate("/Active");
          }}
        >
          Active
        </div>
        <div
          onClick={() => {
            navigate("/Complete");
          }}
        >
          Complete
        </div>
      </div>
      <Routes>
        <Route path="/">
          <Route
            path="/"
            element={
              <All
                tasks={tasks}
                input={input}
                setInput={setInput}
                handleAddTask={handleAddTask}
                handleCompleteTask={handleCompleteTask}
                scratchOut={scratchOut}
              ></All>
            }
          ></Route>
          <Route
            path="/Active"
            element={
              <Active
                tasks={tasks}
                input={input}
                setInput={setInput}
                handleAddTask={handleAddTask}
                handleCompleteTask={handleCompleteTask}
              ></Active>
            }
          ></Route>
          <Route
            path="/Complete"
            element={
              <Complete
                tasks={tasks}
                handleDeleteTask={handleDeleteTask}
                deleteAllCompleteTasks={deleteAllCompleteTasks}
              ></Complete>
            }
          ></Route>
        </Route>
      </Routes>
      <Outlet></Outlet>
    </div>
  );
}

export default App;

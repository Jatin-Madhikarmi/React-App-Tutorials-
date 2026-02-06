import { useState } from "react";
import { useEffect } from "react";

interface Task {
  id: number;
  title: string;
}
export default function Start() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState<string>("");

  useEffect(() => {
    fetch("https://localhost:3000/tasks")
      .then((res) => res.json())
      .then((data: Task[]) => {
        setTasks(data);
        setLoading(false);
      })

      .catch((error) => {
        console.log("Error fetching tasks", error);
        setLoading(false);
      });
  }, []);

  const addTask = async () => {
    if (!inputValue.trim()) return;

    try {
      const response = await fetch("https://localhost:3000/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: inputValue }),
      });

      if (response.ok) {
        const newTask: Task = await response.json();
        setTasks((prev) => [...prev, newTask]);
        setInputValue("");
      }
    } catch (error) {
      console.log("An error occured", error);
    }
  };
  return (
    <div
      style={{
        padding: "40px",
        maxWidth: "400px",
        margin: " 0 auto",
        font: "Arial",
      }}
    >
      <h1>React + Express</h1>
      <div>
        <input
          type="text"
          value={inputValue}
          placeholder="What needs to be done?"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>

      {loading ? (
        <p>Server is loading</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id} style={{ marginBottom: "10px" }}>
              {task.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

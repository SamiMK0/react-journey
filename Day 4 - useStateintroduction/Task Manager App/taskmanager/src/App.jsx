import { useState } from "react";

export default function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("all");

  function addTask() {
    if (!input.trim()) return;

    const newTask = {
      id: Date.now(),
      text: input,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setInput("");
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function toggleTask(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  const completedCount = tasks.filter((t) => t.completed).length;

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Task Manager 📝</h2>

        {/* Input */}
        <div style={styles.inputRow}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a task..."
            style={styles.input}
          />
          <button onClick={addTask} style={styles.addBtn}>
            Add
          </button>
        </div>

        {/* Filters */}
        <div style={styles.filters}>
          {["all", "active", "completed"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              style={{
                ...styles.filterBtn,
                background: filter === f ? "#2a5298" : "#eee",
                color: filter === f ? "#fff" : "#333",
              }}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Stats */}
        <p style={styles.stats}>
          {completedCount} / {tasks.length} completed
        </p>

        {/* Task List */}
        {filteredTasks.length === 0 ? (
          <div style={styles.empty}>
            <p>No tasks here 👀</p>
          </div>
        ) : (
          <ul style={styles.list}>
            {filteredTasks.map((task) => (
              <li key={task.id} style={styles.task}>
                <span
                  onClick={() => toggleTask(task.id)}
                  style={{
                    ...styles.text,
                    textDecoration: task.completed
                      ? "line-through"
                      : "none",
                    color: task.completed ? "#888" : "#000",
                  }}
                >
                  {task.text}
                </span>

                <button
                  onClick={() => deleteTask(task.id)}
                  style={styles.deleteBtn}
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg,#0f2027,#203a43,#2c5364)",
    fontFamily: "sans-serif",
  },
  card: {
    background: "#fff",
    padding: "25px",
    borderRadius: "16px",
    width: "350px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
  },
  title: {
    textAlign: "center",
    marginBottom: "15px",
  },
  inputRow: {
    display: "flex",
    gap: "10px",
  },
  input: {
    flex: 1,
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },
  addBtn: {
    padding: "10px 15px",
    border: "none",
    borderRadius: "8px",
    background: "#2a5298",
    color: "#fff",
    cursor: "pointer",
  },
  filters: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "15px",
  },
  filterBtn: {
    flex: 1,
    margin: "0 3px",
    padding: "6px",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
  },
  stats: {
    marginTop: "10px",
    fontSize: "14px",
    color: "#555",
    textAlign: "center",
  },
  list: {
    listStyle: "none",
    padding: 0,
    marginTop: "15px",
  },
  task: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    borderBottom: "1px solid #eee",
  },
  text: {
    cursor: "pointer",
  },
  deleteBtn: {
    background: "transparent",
    border: "none",
    color: "#ff4d4f",
    fontSize: "16px",
    cursor: "pointer",
  },
  empty: {
    textAlign: "center",
    marginTop: "20px",
    color: "#777",
  },
};
import { useEffect, useState } from "react";

export default function Profile() {
  const [information, setInformation] = useState(() => {
    const saved = localStorage.getItem("profiles");
    return saved ? JSON.parse(saved) : [];
  });

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [selectedID, setSelectedID] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    localStorage.setItem("profiles", JSON.stringify(information));
  }, [information]);

  function resetForm() {
    setName("");
    setAge("");
    setSelectedID(null);
    setError("");
  }

  function validate() {
    if (!name.trim() || !age) {
      return "All fields are required";
    }
    if (age <= 0) {
      return "Age must be valid";
    }
    return null;
  }

  function handleAdd(e) {
    e.preventDefault();

    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    const newUser = {
      id: Date.now(),
      name,
      age,
    };

    setInformation((prev) => [...prev, newUser]);
    resetForm();
  }

  function selectProfile(id) {
    const user = information.find((info) => info.id === id);
    if (user) {
      setSelectedID(id);
      setName(user.name);
      setAge(user.age);
    }
  }

  function handleUpdate(e) {
    e.preventDefault();

    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    setInformation((prev) =>
      prev.map((info) =>
        info.id === selectedID ? { ...info, name, age } : info
      )
    );

    resetForm();
  }

  function handleDelete(id) {
    setInformation((prev) =>
      prev.filter((info) => info.id !== id)
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.list}>
        {information.length === 0 ? (
          <p style={styles.empty}>No profiles yet 👀</p>
        ) : (
          information.map((info) => (
            <div style={styles.card} key={info.id}>
              <p>Name: {info.name}</p>
              <p>Age: {info.age}</p>

              <button
                style={styles.updateBtn}
                onClick={() => selectProfile(info.id)}
              >
                Edit
              </button>

              <button
                style={styles.deleteBtn}
                onClick={() => handleDelete(info.id)}
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>

      <div style={styles.form}>
        <h3>
          {selectedID ? "Edit Profile ✏️" : "Add Profile ➕"}
        </h3>

        <form>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
          />

          <input
            type="number"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            style={styles.input}
          />

          {error && <p style={styles.error}>{error}</p>}

          {!selectedID ? (
            <button onClick={handleAdd} style={styles.addBtn}>
              Add
            </button>
          ) : (
            <>
              <button onClick={handleUpdate} style={styles.saveBtn}>
                Save
              </button>
              <button onClick={resetForm} style={styles.cancelBtn}>
                Cancel
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    gap: "40px",
    padding: "40px",
    fontFamily: "sans-serif",
  },
  list: {
    display: "flex",
    flexWrap: "wrap",
    gap: "15px",
    maxWidth: "500px",
  },
  card: {
    background: "#fff",
    padding: "15px",
    borderRadius: "10px",
    width: "200px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },
  updateBtn: {
    marginRight: "8px",
    background: "#4CAF50",
    color: "#fff",
    border: "none",
    padding: "6px",
    borderRadius: "6px",
    cursor: "pointer",
  },
  deleteBtn: {
    background: "#f44336",
    color: "#fff",
    border: "none",
    padding: "6px",
    borderRadius: "6px",
    cursor: "pointer",
  },
  form: {
    background: "#fff",
    padding: "20px",
    borderRadius: "12px",
    width: "250px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },
  input: {
    width: "100%",
    padding: "8px",
    marginBottom: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },
  addBtn: {
    width: "100%",
    padding: "8px",
    background: "#2196F3",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  saveBtn: {
    width: "100%",
    padding: "8px",
    background: "#FF9800",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    marginBottom: "5px",
  },
  cancelBtn: {
    width: "100%",
    padding: "8px",
    background: "#777",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  empty: {
    color: "#777",
  },
  error: {
    color: "red",
    fontSize: "14px",
  },
};
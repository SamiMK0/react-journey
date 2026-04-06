import {  useState } from "react";

export default function AuthApp() {
  const [authMode, setAuthMode] = useState("login");
const [user, setUser] = useState(() => {
  try {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  } catch {
    return null;
  }
});
  const [form, setForm] = useState({ name: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Load user from localStorage


  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function validate() {
    if (!form.name || !form.password) {
      return "All fields are required";
    }
    if (form.password.length < 4) {
      return "Password must be at least 4 characters";
    }
    return null;
  }

  function fakeApiCall() {
    return new Promise((resolve) => setTimeout(resolve, 1200));
  }

  async function handleSubmit() {
    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    setError("");
    setLoading(true);

    await fakeApiCall();

    const newUser = { name: form.name };
    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));

    setLoading(false);
    setForm({ name: "", password: "" });
  }

  function handleLogout() {
    setUser(null);
    localStorage.removeItem("user");
  }

  return (
    <div style={styles.container}>
      {!user ? (
        <div style={styles.card}>
          <h2>{authMode === "login" ? "Login 🔐" : "Register ✨"}</h2>

          <input
            name="name"
            placeholder="Username"
            value={form.name}
            onChange={handleChange}
            style={styles.input}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            style={styles.input}
          />

          {error && <p style={styles.error}>{error}</p>}

          <button onClick={handleSubmit} style={styles.button}>
            {loading
              ? "Loading..."
              : authMode === "login"
              ? "Login"
              : "Register"}
          </button>

          <p style={styles.switch}>
            {authMode === "login"
              ? "Don't have an account?"
              : "Already have an account?"}
            <span
              onClick={() =>
                setAuthMode(authMode === "login" ? "register" : "login")
              }
              style={styles.link}
            >
              {authMode === "login" ? " Register" : " Login"}
            </span>
          </p>
        </div>
      ) : (
        <div style={styles.card}>
          <h2>Welcome, {user.name} 🚀</h2>
          <p>You are now authenticated.</p>

          <div style={styles.dashboardBox}>
            <p>📊 Dashboard content</p>
            <p>🔒 Protected Feature</p>
            <p>⚙️ Settings</p>
          </div>

          <button onClick={handleLogout} style={styles.logout}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg,#1e3c72,#2a5298)",
    fontFamily: "sans-serif",
  },
  card: {
    background: "#fff",
    padding: "30px",
    borderRadius: "16px",
    width: "320px",
    boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
    textAlign: "center",
  },
  input: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },
  button: {
    width: "100%",
    padding: "10px",
    border: "none",
    borderRadius: "8px",
    background: "#2a5298",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer",
  },
  logout: {
    marginTop: "15px",
    padding: "10px",
    width: "100%",
    border: "none",
    borderRadius: "8px",
    background: "#ff4d4f",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer",
  },
  error: {
    color: "red",
    fontSize: "14px",
  },
  switch: {
    marginTop: "15px",
    fontSize: "14px",
  },
  link: {
    color: "#2a5298",
    cursor: "pointer",
    fontWeight: "bold",
  },
  dashboardBox: {
    marginTop: "15px",
    padding: "10px",
    background: "#f5f5f5",
    borderRadius: "10px",
  },
};
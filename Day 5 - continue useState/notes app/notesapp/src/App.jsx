

















import { useEffect, useState } from "react";

export default function BudgetApp() {
  const [balance, setBalance] = useState(() => {
    const saved = localStorage.getItem("balance");
    return saved ? JSON.parse(saved) : null;
  });

  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem("expenses");
    return saved ? JSON.parse(saved) : [];
  });

  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const [editingBalance, setEditingBalance] = useState(false);
  const [newBalance, setNewBalance] = useState("");

  useEffect(() => {
    localStorage.setItem("balance", JSON.stringify(balance));
  }, [balance]);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  function setInitialBalance() {
    if (!newBalance) return;
    setBalance(+newBalance);
    setNewBalance("");
  }

  function updateBalance() {
    if (!newBalance) return;
    setBalance(+newBalance);
    setNewBalance("");
    setEditingBalance(false);
  }

  function addExpense() {
    if (!text.trim() || !amount) return;

    const newExpense = {
      id: Date.now(),
      text,
      amount: +amount,
    };

    setExpenses((prev) => [...prev, newExpense]);
    setText("");
    setAmount("");
  }

  function deleteExpense(id) {
    setExpenses((prev) =>
      prev.filter((exp) => exp.id !== id)
    );
  }

  const totalExpenses = expenses.reduce(
    (acc, exp) => acc + exp.amount,
    0
  );

  const remaining =
    balance !== null ? balance - totalExpenses : 0;

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>Budget Tracker 💰</h2>

        {balance === null ? (
          <div style={styles.section}>
            <h3>Set your balance</h3>
            <input
              type="number"
              placeholder="Enter your balance..."
              value={newBalance}
              onChange={(e) => setNewBalance(e.target.value)}
              style={styles.input}
            />
            <button onClick={setInitialBalance} style={styles.button}>
              Start
            </button>
          </div>
        ) : (
          <>
            <div style={styles.balanceBox}>
              <p>Initial: ${balance}</p>
              <p>Spent: ${totalExpenses}</p>

              <h3 style={{ color: remaining < 0 ? "red" : "green" }}>
                Remaining: ${remaining}
              </h3>

              {!editingBalance ? (
                <button
                  onClick={() => {
                    setEditingBalance(true);
                    setNewBalance(balance);
                  }}
                  style={styles.editBtn}
                >
                  Edit Balance
                </button>
              ) : (
                <div style={styles.editBox}>
                  <input
                    type="number"
                    value={newBalance}
                    onChange={(e) => setNewBalance(e.target.value)}
                    style={styles.input}
                  />
                  <button onClick={updateBalance} style={styles.button}>
                    Save
                  </button>
                </div>
              )}
            </div>

            <div style={styles.section}>
              <input
                placeholder="Expense name"
                value={text}
                onChange={(e) => setText(e.target.value)}
                style={styles.input}
              />
              <input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                style={styles.input}
              />
              <button onClick={addExpense} style={styles.button}>
                Add Expense
              </button>
            </div>

            {expenses.length === 0 ? (
              <p style={styles.empty}>No expenses yet 👀</p>
            ) : (
              <ul style={styles.list}>
                {expenses.map((exp) => (
                  <li key={exp.id} style={styles.item}>
                    <span>
                      {exp.text} - ${exp.amount}
                    </span>
                    <button
                      onClick={() => deleteExpense(exp.id)}
                      style={styles.delete}
                    >
                      ✕
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </>
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
    width: "360px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
  },
  section: {
    marginTop: "15px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  input: {
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px",
    border: "none",
    borderRadius: "8px",
    background: "#2c5364",
    color: "#fff",
    cursor: "pointer",
  },
  balanceBox: {
    marginTop: "10px",
  },
  editBtn: {
    marginTop: "10px",
    padding: "8px",
    border: "none",
    borderRadius: "8px",
    background: "#ffa500",
    color: "#fff",
    cursor: "pointer",
  },
  editBox: {
    marginTop: "10px",
    display: "flex",
    gap: "10px",
  },
  list: {
    listStyle: "none",
    padding: 0,
    marginTop: "10px",
  },
  item: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px",
    borderBottom: "1px solid #eee",
  },
  delete: {
    background: "transparent",
    border: "none",
    color: "red",
    cursor: "pointer",
  },
  empty: {
    textAlign: "center",
    color: "#777",
  },
};
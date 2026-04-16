import { useEffect, useState } from "react";
import { createPortal } from "react-dom";


let toasts = [];
let listeners = [];
let id = 0;

const notify = () => listeners.forEach((fn) => fn(toasts));

export const toast = (message, type = "success") => {
  const newToast = { id: ++id, message, type };
  toasts = [...toasts, newToast];
  notify();

  // auto remove after 3s
  setTimeout(() => {
    toasts = toasts.filter((t) => t.id !== newToast.id);
    notify();
  }, 3000);
};

export const removeToast = (toastId) => {
  toasts = toasts.filter((t) => t.id !== toastId);
  notify();
};


function ToastContainer() {
  const [state, setState] = useState([]);

  useEffect(() => {
    listeners.push(setState);
    setState(toasts);
    return () => {
      listeners = listeners.filter((l) => l !== setState);
    };
  }, []);

  const root = document.getElementById("toast-root");
  if (!root) return null;

  return createPortal(
    <div style={styles.toastWrapper}>
      {state.map((t) => (
        <div
          key={t.id}
          style={{
            ...styles.toast,
            background:
              t.type === "error"
                ? "#ef4444"
                : t.type === "warning"
                ? "#f59e0b"
                : "#22c55e",
          }}
          onClick={() => removeToast(t.id)}
        >
          {t.message}
        </div>
      ))}
    </div>,
    root
  );
}


function Modal({ open, onClose, children }) {
  const root = document.getElementById("modal-root");
  if (!open || !root) return null;

  return createPortal(
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div style={styles.label}>React Portal • Modal</div>
        {children}
        <button style={styles.primaryBtn} onClick={onClose}>
          Close
        </button>
      </div>
    </div>,
    root
  );
}

function Drawer({ open, onClose, booking }) {
  const root = document.getElementById("modal-root");
  if (!open || !root) return null;

  return createPortal(
    <div style={styles.drawerOverlay} onClick={onClose}>
      <div style={styles.drawer} onClick={(e) => e.stopPropagation()}>
        <div style={styles.label}>React Portal • Drawer</div>

        <h2 style={{ marginBottom: "10px" }}>Booking Details</h2>

        <div style={styles.infoBox}>
          <p><b>User:</b> {booking.user}</p>
          <p><b>Car:</b> {booking.car}</p>
          <p><b>Status:</b> {booking.status}</p>
        </div>

        <button style={styles.primaryBtn} onClick={onClose}>
          Close
        </button>
      </div>
    </div>,
    root
  );
}


export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);

  const bookings = [
    { id: 1, user: "Sami", car: "BMW M4", status: "Pending" },
    { id: 2, user: "Ali", car: "Tesla Model 3", status: "Approved" },
  ];

  const openDrawer = (b) => {
    setSelectedBooking(b);
    setDrawerOpen(true);
  };

  const confirmAction = () => {
    toast("Booking confirmed!", "success");
    setModalOpen(false);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Smart Booking Dashboard</h1>

      <div style={styles.list}>
        {bookings.map((b) => (
          <div key={b.id} style={styles.card}>
            <p style={{ marginBottom: "8px" }}>
              {b.user} — {b.car}
            </p>

            <div>
              <button style={styles.btn} onClick={() => openDrawer(b)}>
                View
              </button>

              <button style={styles.primaryBtn} onClick={() => setModalOpen(true)}>
                Confirm
              </button>
            </div>
          </div>
        ))}
      </div>

      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <h3 style={{ marginBottom: "10px" }}>Confirm Action?</h3>
        <p style={{ opacity: 0.7, marginBottom: "15px" }}>
          This action will be applied to the selected booking.
        </p>
        <button style={styles.primaryBtn} onClick={confirmAction}>
          Yes, Confirm
        </button>
      </Modal>

      <Drawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        booking={selectedBooking || {}}
      />

      <ToastContainer />
    </div>
  );
}


const styles = {
  container: {
    fontFamily: "Arial",
    padding: "30px",
    background: "#f6f7fb",
    minHeight: "100vh",
  },
  title: {
    marginBottom: "20px",
  },
  list: {
    display: "grid",
    gap: "12px",
  },
  card: {
    padding: "15px",
    borderRadius: "12px",
    background: "white",
    boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
  },
  btn: {
    marginRight: "8px",
    padding: "8px 12px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    cursor: "pointer",
    background: "white",
  },
  primaryBtn: {
    padding: "8px 12px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    background: "#111827",
    color: "white",
  },

  // MODAL
  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.4)",
    backdropFilter: "blur(6px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    background: "white",
    padding: "20px",
    borderRadius: "14px",
    minWidth: "320px",
    animation: "pop 0.2s ease",
  },

  // DRAWER
  drawerOverlay: {
    position: "fixed",
    inset: 0,
  },
  drawer: {
    position: "absolute",
    right: 0,
    top: 0,
    height: "100%",
    width: "320px",
    background: "white",
    padding: "20px",
    boxShadow: "-10px 0 30px rgba(0,0,0,0.1)",
    animation: "slide 0.25s ease",
  },

  // TOAST
  toastWrapper: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  toast: {
    color: "white",
    padding: "12px 14px",
    borderRadius: "10px",
    minWidth: "220px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
    cursor: "pointer",
    animation: "slideIn 0.2s ease",
  },

  label: {
    fontSize: "11px",
    opacity: 0.5,
    marginBottom: "10px",
  },

  infoBox: {
    background: "#f3f4f6",
    padding: "10px",
    borderRadius: "10px",
    marginBottom: "15px",
  },
};

// =============================
// ANIMATIONS (add to index.css)
// =============================
/*
@keyframes pop {
  from { transform: scale(0.95); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

@keyframes slide {
  from { transform: translateX(30px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}

@keyframes slideIn {
  from { transform: translateX(20px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}
*/
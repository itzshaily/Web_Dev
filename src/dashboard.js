import React from "react";

export default function Dashboard({ onLogout }) {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to Dashboard 🎉</h1>
      <button
        onClick={onLogout}
        style={{ padding: "10px", background: "red", color: "white", border: "none" }}
      >
        Logout
      </button>
    </div>
  );
}

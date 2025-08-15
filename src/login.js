import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "./firebase"; // Import the auth instance from firebase.js
import { signInWithEmailAndPassword } from "firebase/auth";
// import { toast } from "react-toastify"; // Assuming you are using react-toastify for notifications


export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit =  async(e) => {
    e.preventDefault();
    try{
        await signInWithEmailAndPassword(auth, email, password);
        console.log("User logged in:", auth.currentUser);
        alert("User logged in successfully!");
        
    }
    catch(error){
        console.log(error.message);
       
        alert(error.message);
    }
  };

  return (
    <div style={styles.container}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} style={styles.form}>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Login</button>
      </form>
      <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
    </div>
  );
}

const styles = {
  container: { maxWidth: "300px", margin: "50px auto", textAlign: "center" },
  form: { display: "flex", flexDirection: "column" },
  input: { padding: "10px", margin: "8px 0" },
  button: { padding: "10px", background: "blue", color: "white", border: "none" }
};

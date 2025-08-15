import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth, db } from "./firebase"; // Import the auth instance from firebase.js
import { getFirestore } from "firebase/firestore"; 
import { setDoc, doc } from "firebase/firestore"; // Import Firestore functions if needed   

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try{
        await createUserWithEmailAndPassword(auth, email, password);
        const user = auth.currentUser;
        console.log("User created:", user);

        if (user) {
          // Save additional user data to Firestore
          // cloud firestore
          await setDoc(doc(db, "users", user.uid), {
            firstName: fname,
            lastName: lname,
            email: user.email,
          });
        }

        alert("User created successfully!");
        
    }
    catch(error) {
        console.log(error.message);
        alert(error.message);
    }
   
  };



  return (
    <div style={styles.container}>
      <h2>Sign up</h2>
      <form onSubmit={handleSignup} style={styles.form}>
        
         <input
          type="text"
          placeholder="First Name"
          value={fname}
          onChange={(e) => setFname(e.target.value)}
          required
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lname}
          onChange={(e) => setLname(e.target.value)}
          required
          style={styles.input}
        />
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
        <button type="submit" style={styles.button}>Sign up</button>
      </form>
      <p>Already have an account? <Link to="/">Login</Link></p>
    </div>
  );
}

const styles = {
  container: { maxWidth: "300px", margin: "50px auto", textAlign: "center" },
  form: { display: "flex", flexDirection: "column" },
  input: { padding: "10px", margin: "8px 0" },
  button: { padding: "10px", background: "green", color: "white", border: "none" }
};

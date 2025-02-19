import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { name, email };

    fetch("http://localhost:5005/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    }).then(() => {
      alert("User added successfully!");
      navigate("/"); 
    });
  };

  return (
    <div className="bg-img">
    <div className="container p-4">
      <Link to="/" className="btn btn-danger m-3">
        Go Back
      </Link>
      <h2>Register New User</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="fw-bold">Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="fw-bold">Email</label>
          <input
            type="text"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-success ">
          Register
        </button>
      </form>
    </div>
    </div>
  );
}

export default Register;

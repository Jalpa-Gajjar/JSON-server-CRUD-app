import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditUser() {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5005/users/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setName(data.name);
        setEmail(data.email);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedUser = { name, email };

    fetch(`http://localhost:5005/users/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedUser),
    }).then(() => {
      alert("User updated successfully!");
      navigate("/");
    });
  };

  return (
    <div className="bg-img">
    <div className="container p-4 rounded">
      <h2>Edit User</h2>
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
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-success">
          Update User
        </button>
      </form>
    </div>
    </div>
  );
}

export default EditUser;

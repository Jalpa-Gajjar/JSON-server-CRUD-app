import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [users, setUsers] = useState([]);
  const [searchText, setSearch] = useState(""); // State for search term

  useEffect(() => {
    fetch("http://localhost:5005/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  // Filter to remove students with empty names and check for duplicate emails
  const filteredUsers = users
    .filter((user) => user.name.trim() !== "") // Skip empty names
    .filter(
      (user, index, self) =>
        index === self.findIndex((s) => s.email === user.email) // Unique emails
    )
    .filter((user) => user.name.toLowerCase().includes(searchText.toLowerCase())); // Filter based on search text

    // container bg-info p-4 rounded
  return (
    <div className="bg-img">
    <div className="container p-4 rounded">
      <h2>User List</h2>
      <Link to="/register" className="btn btn-success mb-3">
        Register/Add User
      </Link>

      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search by name..."
        value={searchText}
        onChange={(e) => setSearch(e.target.value)} // Update search text
      />

      <table className="table ">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          { filteredUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <Link to={`/view/${user.id}`} className="btn btn-info">
                  View
                </Link>
                <Link to={`/edit/${user.id}`} className="btn btn-warning mx-2">
                  Edit
                </Link>
                <Link to={`/delete/${user.id}`} className="btn btn-danger">
                  Delete
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default Home;

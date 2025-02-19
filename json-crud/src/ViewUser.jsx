import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function ViewUser() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5005/users/${id}`)
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, [id]);

  return (
    <div className="bg-img">
    <div className="container p-4 rounded text-dark">
      <h2>User Details</h2>
      {user && (
        <div className="bg-light p-4 rounded">
          <p ><strong>Name:</strong> {user.name}</p>
          <p ><strong>Email:</strong> {user.email}</p>
          <Link to="/" className="btn btn-success">
            Back to Home
          </Link>
        </div>
      )}
    </div>
    </div>
  );
}

export default ViewUser;

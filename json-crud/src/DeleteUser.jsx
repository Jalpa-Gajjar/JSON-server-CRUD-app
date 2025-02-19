import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function DeleteUser() {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5005/users/${id}`, {
      method: "DELETE",
    }).then(() => {
      alert("User deleted successfully!");
      navigate("/");
    });
  }, [id]);

  return null;
}

export default DeleteUser;

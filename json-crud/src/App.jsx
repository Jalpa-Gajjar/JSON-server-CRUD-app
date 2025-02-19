import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import './app.css'
// import './index.css'
import Register from "./Register";
import ViewUser from "./ViewUser";
import EditUser from "./EditUser";
import DeleteUser from "./DeleteUser";
import "bootstrap/dist/css/bootstrap.css";

// npm i react-router-dom
// npm i bootstrap  react-bootstrap
// npm i json-server //db.json
// json-server --watch data.json --port 5005
// npx json-server --watch data.json --port 5005

function App() { 
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/view/:id" element={<ViewUser />} />
        <Route path="/edit/:id" element={<EditUser />} />
        <Route path="/delete/:id" element={<DeleteUser />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import Login from "./composants/Login";
import Register from "./composants/Register";
import Dashboard from "./composants/Admin/Dashboard";
import Clients from "./composants/Admin/Clients";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Projects from "./composants/Admin/Projects";
import Tasks from "./composants/Admin/Tasks";

import Messages from "./composants/Admin/Messages";
import Expenses from "./composants/Admin/Expenses";
import { useState, useEffect } from "react";
import $ from "jquery";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);

  const [isSidebarToggled, setIsSidebarToggled] = useState(false); // État pour gérer la classe `sidebar-toggled`

  useEffect(() => {
    // Mettez à jour la classe du body lorsque isSidebarToggled change
    if (isSidebarToggled) {
      document.body.classList.add("sidebar-toggled");
    } else {
      document.body.classList.remove("sidebar-toggled");
    }
  }, [isSidebarToggled]);

  const toggleSidebar = () => {
    setIsSidebarToggled(!isSidebarToggled); // Basculer la barre latérale
  };

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/admin.dashboard" element={<Dashboard />} />
          <Route path="/admin.clients" element={<Clients />} />
          <Route path="/admin.projects" element={<Projects />} />
          <Route path="/admin.tasks" element={<Tasks />} />
          <Route path="/admin.messages" element={<Messages />} />
          <Route path="/admin.expenses" element={<Expenses />} />

          <Route path="/signup" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

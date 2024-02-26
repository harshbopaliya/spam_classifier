import React from "react";
import MainContent from "./COMPONENT/MainContent";
import Login from "./COMPONENT/Login";
import { Route, Routes } from "react-router-dom";
import Register from "./COMPONENT/register";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<MainContent />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/about" element={<About />} />
    </Routes>
  );
}

export default App;

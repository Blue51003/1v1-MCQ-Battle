import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Signup from "./components/Signup";
import Login from "./components/Login";
import MCQForm from "./components/MCQForm";
import MCQList from "./components/MCQList";
import "./index.css"; // Assuming you have some global styles

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="signup" element={<Signup />} />
            <Route path="login" element={<Login />} />
            <Route path="mcqs" element={<MCQList />} />
            <Route path="mcqs/new" element={<MCQForm />} />
            <Route path="mcqs/:id" element={<MCQForm />} />
          </Route>
        </Routes>
      </Router>
    </React.StrictMode>
  );
}
``;

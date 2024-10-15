import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Registration from "./pages/registration";
import MyErrorBoundary from "./components/MyErrorBoundary";

function App() {
  return (
    <MyErrorBoundary>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </Router>
    </MyErrorBoundary>
  );
}

export default App;

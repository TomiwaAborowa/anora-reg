import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/home";
import Registration from "./pages/registration";
import MyErrorBoundary from "./components/MyErrorBoundary";

function App() {
  return (
    <MyErrorBoundary>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </HashRouter>
    </MyErrorBoundary>
  );
}

export default App;

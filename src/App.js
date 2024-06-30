import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Updated import
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <Router>
      <Routes> {/* Updated from Switch to Routes */}
        <Route path="/" element={<Home />} /> {/* Updated to element */}
        <Route path="/dashboard" element={<Dashboard />} /> {/* Updated to element */}
        <Route path="/login" element={<Login />} /> {/* Updated to element */}
        <Route path="/signup" element={<Signup />} /> {/* Updated to element */}
      </Routes>
    </Router>
  );
}

export default App;

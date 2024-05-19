import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import { AuthenticatedApp } from './components/AuthenticatedApp';
import { UnauthenticatedApp } from './components/UnauthenticatedApp';
import { ChatRoom } from './components/ChatRoom';
import Home from './Home';

function App() {
    const { user } = useAuth();

    console.log('User:', user);

    return (
        <div>
        <Navbar />
        <Router>
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/chatrooms" element={user ? <AuthenticatedApp /> : <Navigate to="/login" />} />
                    <Route path="/login" element={<UnauthenticatedApp />} />
                    <Route path="/room/:id" element={user ? <ChatRoom /> : <Navigate to="/login" />} />
                </Routes>
            </div>
        </Router>
        <Footer/>
        </div>
    );
}

export default App;

import React from 'react';
import { AuthenticatedApp } from './components/AuthenticatedApp';
import { UnauthenticatedApp } from './components/UnauthenticatedApp';
import { useAuth } from './hooks/useAuth';
import './Chat.css';

function Chat() {
    const { user } = useAuth();

    return (
        <div className="container">
            <h1>Chat Room</h1>
            {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
        </div>
    );
}

export default Chat;

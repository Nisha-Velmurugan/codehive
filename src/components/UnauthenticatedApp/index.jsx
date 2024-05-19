import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import './styles.css';
import googleIcon from'./google.png';

function UnauthenticatedApp() {
    const { login, signUp, signInWithEmailAndPassword } = useAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSignUp, setIsSignUp] = useState(false);

    const handleGoogleLogin = async () => {
        await login();
        navigate('/chatrooms');
    };

    const handleEmailLogin = async (event) => {
        event.preventDefault();
        await signInWithEmailAndPassword(email, password);
        navigate('/chatrooms');
    };

    const handleEmailSignUp = async (event) => {
        event.preventDefault();
        await signUp(email, password);
        navigate('/chatrooms');
    };

    return (
        <div className="auth-page">
            <div className="auth-container">
                <h2>{isSignUp ? 'Sign Up' : 'Log In'} to join a chat room!</h2>
                <form onSubmit={isSignUp ? handleEmailSignUp : handleEmailLogin}>
                    <div className="input-group">
                        <label>
                            Email:
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </label>
                    </div>
                    <div className="input-group">
                        <label>
                            Password:
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </label>
                    </div>
                    <button type="submit" className="login">
                        {isSignUp ? 'Sign Up' : 'Log In'}
                    </button>
                </form>
                <button onClick={handleGoogleLogin} className="login google-login">
                    <img src={googleIcon} alt='Google Icon' className='google-icon' /> Login with Google
                </button>
                <button onClick={() => setIsSignUp(!isSignUp)} className="toggle">
                    {isSignUp ? 'Switch to Login' : 'Switch to Sign Up'}
                </button>
            </div>
        </div>
    );
}

export { UnauthenticatedApp };

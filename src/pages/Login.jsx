import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ErrorPage from './ErrorPage';
import data from '../data'; // Feltételezzük, hogy a data.jsx tartalmazza a felhasználói adatokat

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
        
    const handleClick = () => {
        navigate(`/register`);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (username === 'invalid') {
            setErrorMessage('Hibás felhasználónév vagy jelszó!');
            return;
        }

        const users = data.users || [];
        const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
        const allUsers = [...users, ...storedUsers];

        const user = allUsers.find(u => u.username === username);
        if (!user) {
            setErrorMessage('Hibás felhasználónév vagy jelszó!');
            return;
        }

        const encodedPassword = btoa(password);
        if (user.password !== encodedPassword) {
            setErrorMessage('Hibás felhasználónév vagy jelszó!');
            return;
        }

        // Sikeres bejelentkezés -> loggedIn beállítása true-ra
        localStorage.setItem('loggedIn', 'true');
        setErrorMessage('');
        console.log('Sikeres bejelentkezés!');

        // Értesíti a többi komponenst a változásról
        window.dispatchEvent(new Event("storage"));

        navigate('/');
    };

    if (errorMessage) {
        return <ErrorPage errorMessage={errorMessage} />;
    }

    return (
        <div className="login-container">
            <h2>Bejelentkezés</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className='label-form' htmlFor="username">Felhasználónév:</label>
                    <input className='input-form'
                        type="text" 
                        id="username" 
                        placeholder='Felhasználónév'
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label className='label-form' htmlFor="password">Jelszó:</label>
                    <input className='input-form' 
                        type="password" 
                        id="password" 
                        placeholder='Jelszó'
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                </div>
                <button className='button-form' type="submit">Bejelentkezés</button>
                <p onClick={handleClick} className='login_p'>Nincs még felhasználói fiókja? Hozzon létre egyet most!</p>
            </form>
        </div>
    );
}

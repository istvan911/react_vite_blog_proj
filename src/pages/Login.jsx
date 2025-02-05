import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ErrorPage from './ErrorPage';
import data from '../data'; // Feltételezzük, hogy a data.jsx tartalmazza a felhasználói adatokat

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [token, setToken] = useState(null);
    const navigate = useNavigate();
        
    const handleClick = () => {
        navigate(`/register`);
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        const users = data.users || [];

        // Ellenőrzés Local Storage-ból
        const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

        // Egyesítjük a két forrást
        const allUsers = [...users, ...storedUsers];

        // Megkeressük a felhasználót
        const user = allUsers.find(u => u.username === username);

        if (!user) {
            setErrorMessage('Felhasználó nem található!');
            return;
        }

        // Jelszó Base64 ellenőrzése
        const encodedPassword = btoa(password);
        if (user.password !== encodedPassword) {
            setErrorMessage('Hibás jelszó!');
            return;
        }

        // Sikeres bejelentkezés -> Token mentése 
        const fakeToken = btoa(`${username}:${encodedPassword}`);
        localStorage.setItem('authToken', fakeToken);
        setToken(fakeToken);
        setErrorMessage('');
        console.log('Sikeres bejelentkezés!', fakeToken);

        // Navigálás a főoldalra vagy dashboardra
        navigate('/');
    };

    if (errorMessage) {
        //Hiba esetén a hiba okának megjelenítése
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

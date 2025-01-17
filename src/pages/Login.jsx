import React, { useState } from 'react';
import axios from 'axios';
import ErrorPage from './ErrorPage';  // Importáljuk az ErrorPage komponenst

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [token, setToken] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.post('http://localhost:8080/api/users/login', {
                username: username,
                password: password
            });

            setToken(response.data); // JWT tokent mentjük a state-be
            setErrorMessage(''); // Töröljük az esetleges hibaüzenetet
            console.log('Sikeres bejelentkezés:', response.data); // Token konzolra kiírva (pl. JWT)
        } catch (error) {
            console.error('Bejelentkezési hiba:', error.response.data);
            setErrorMessage('Hiba a bejelentkezés során. Kérjük, ellenőrizze a felhasználónevet és a jelszót.');
        }
    };

    if (errorMessage) {
        // Ha hiba van, az ErrorPage komponenst használjuk
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
                        placeholder='Írd be a felhasználóneved...'
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
                        placeholder='Írd be a jelszavad...'
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                </div>
                <button className='button-form' type="submit">Bejelentkezés</button>
            </form>

            {token && <p className="success-message">Sikeres bejelentkezés! Token: {token}</p>}
        </div>
    );
}

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRePassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [phone, setPhone] = useState('');

    const navigate = useNavigate(); // Initialize the hook for navigation
        
          const handleClick = () => {
            // Navigate to the /profile/:id page on click
            navigate(`/login`);
          };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Itt lehet kezelni a bejelentkezést (pl. API hívás)
        console.log('Register:', { email, password, repassword, username, fullName, dateOfBirth, phone  });
    };

    return (
        <div className="register-container">
            <h2>Regisztráció</h2>
            <form onSubmit={handleSubmit} autoComplete="off">
                <div className="form-group">
                    <label className='label-form' htmlFor="user" autoComplete="off">Felhasználónév:</label>
                    <input className='input-form'
                        id="username" 
                        value={userName} 
                        placeholder='Add meg a felhasználóneved'
                        onChange={(e) => setUserName(e.target.value)} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label className='label-form' htmlFor="fullName">Teljes név:</label>
                    <input className='input-form' 
                        id="fullName" 
                        value={fullName} 
                        placeholder='Add meg a teljes neved'
                        onChange={(e) => setFullName(e.target.value)} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label className='label-form' htmlFor="dateOfBirth">Születési idő:</label>
                    <input className='input-form'
                        type="datetime-local" 
                        id="dateOfBirth" 
                        value={dateOfBirth} 
                        onChange={(e) => setDateOfBirth(e.target.value)} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label className='label-form' htmlFor="email">E-mail:</label>
                    <input className='input-form'
                        type="email" 
                        id="email" 
                        value={email} 
                        placeholder='Add meg az email címed'
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label className='label-form' htmlFor="email">Telefonszám:</label>
                    <input className='input-form'
                        type="tel" 
                        id="phone" 
                        value={phone} 
                        placeholder='Add meg a telefonszámod'
                        onChange={(e) => setPhone(e.target.value)} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label className='label-form' htmlFor="password" autoComplete="new-password">Jelszó:</label>
                    <input className='input-form'
                        type="password" 
                        id="password" 
                        value={password} 
                        placeholder='Add meg a jelszavad'
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label className='label-form' htmlFor="password">Jelszó újra:</label>
                    <input className='input-form'
                        type="password" 
                        id="repassword" 
                        value={repassword} 
                        placeholder='Add meg a jelszavad újra'
                        onChange={(e) => setRePassword(e.target.value)} 
                        required 
                    />
                </div>
                <button className = 'button-form'type="submit">Regisztráció</button>

                <p onClick={handleClick} className='login_p'>Van már felhasználói fiókja? <span>Jelentkezzen be!</span></p>
            </form>
        </div>
    );
};

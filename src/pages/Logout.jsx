import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Logout() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log('Felhasználó kijelentkezett');
    setIsOpen(false);
    navigate(`/`);
  };

  const handleCancel = () => {
    setIsOpen(false);
    navigate(`/`);
  };

  return (
    <div className='logout-container'>
      <button className={isOpen ? 'hidden button-logout' : 'button-logout'} onClick={() => setIsOpen(true)}>
        Kijelentkezés
      </button>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Biztos ki szeretne jelentkezni?</h2>
            <button className='button-logout' onClick={handleLogout}>Igen</button>
            <button className='button-logout' onClick={handleCancel}>Mégsem</button>
          </div>
        </div>
      )}
    </div>
  );
}

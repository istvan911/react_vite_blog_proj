import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Card({ id, image, title, description, date }) {
  const navigate = useNavigate();

  const truncateDesc = (text) => {
    const maxLength = 127;
  
    // Ellenőrizd, hogy a text egy string-e, és nem undefined vagy null
    if (typeof text !== 'string') {
      return '';
    }
  
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };

  // Eseménykezelő a kártya kattintásához
  const handleCardClick = () => {
    navigate(`/posts/${id}`);  // Navigálás az adott post részleteihez
  };

  return (
    <div className='card' onClick={handleCardClick} style={{ cursor: 'pointer' }}>
      <img src={image} className='card-image' alt={title} />
      <div className="card-content">
        <h3 className='card-title'>{title}</h3>
        <p className='card-text'>{truncateDesc(description)}</p>
        <p className='card-date'>{date}</p>
      </div>
    </div>
  );
}

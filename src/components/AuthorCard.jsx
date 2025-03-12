import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const AuthorCard = ({ id, profileImage, name, bio}) => {
  const navigate = useNavigate(); // Initialize the hook for navigation

  const handleCardClick = () => {
    // Navigate to the /profile/:id page on click
    navigate(`/profile/${id}`);
  };

  const truncateBio = (text) => {
    const maxLength = 127;
  
    // Ellenőrizd, hogy a text egy string-e, és nem undefined vagy null
    if (typeof text !== 'string') {
      return '';
    }
  
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };
  return (
    <div className="author-card" onClick={handleCardClick} style={{ cursor: 'pointer' }}>
      <img src={profileImage} alt={`${name}'s profile`} className="authorcard-image" />
      <h2 className="author-name">{name}</h2>
      <p className="author-bio">{truncateBio(bio)}</p>
      {/*
      <div className="btn-space">
          {//<p className="card-date">{post.createdAt}</p>
          }
          {<button className='btn-card-show-more'>Megtekint</button>  
          }
        </div>
      */}
    </div>
  );
};

AuthorCard.propTypes = {
  id: PropTypes.number.isRequired, // Add id prop to the prop types
  profileImage: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  joinDate: PropTypes.string.isRequired,
};

export default AuthorCard;

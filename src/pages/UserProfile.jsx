import React from 'react';
import { useParams } from 'react-router-dom';
import data from '/src/data.jsx';
import Card from '../components/Card';
import ErrorPage from './ErrorPage'

const UserProfile = () => {
  const { id } = useParams(); //id kinyerése url-ből
  const authorId = parseInt(id); //id konvertálása igész számmá
  const { authors, posts } = data;

  //Szerző adatainak kigyűjtése id alapján
  const author = authors.find((author) => author.id === authorId);

  //Szerző posztjainak kigyűjtése
  const authorPosts = posts.filter((post) => post.userId === id);
  
  //Ha nincs szerző ilyen id-vel, hiba dobás
  if (!author) {
    return <ErrorPage errorMessage={`A szerző nem található! (ID:${authorId})`} />;
  }

  return (
    <div className="user-profile">
      <div className="profile-header">
        <img src={author.profilePicture} alt={`${author.username}'s profile`} className="profile-image" />
        <h1 className="profile-name">{author.username}</h1>
        <div className="profile-join-date">
          <strong>Csatlakozott:</strong> {new Date(author.dateOfBirth).toLocaleDateString()}
        </div>
        <p className='profile-bio'>{author.bio}</p>
      </div>

      <div className="card-container">
        <h2>{author.username  } posztjai</h2>
        {authorPosts.length > 0 ? (
          <div className="card-list">
            {authorPosts.map((post) => (
              <Card
                key={post.id}
                id={post.id}
              />
            ))}
          </div>
        ) : (
          <p className="no-posts">Ennek a szerzőnek még nincsenek bejegyzései.</p>
        )}
      </div>
    </div>
  );
};

export default UserProfile;

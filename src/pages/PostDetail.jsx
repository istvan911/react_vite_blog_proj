import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import data from '../data';
import ErrorPage from './ErrorPage'; // Importáljuk az ErrorPage komponenst

export default function PostDetail() {
  const { id } = useParams(); // URL-ből kapott id
  const navigate = useNavigate();
  const post = data.posts.find((post) => post.id === parseInt(id)); // Poszt keresése id alapján
  // Ha a post nem található, akkor az ErrorPage-et jelenítjük meg
  if (!post) {
    return <ErrorPage errorMessage={`Post ID: ${id} nem található.`} />;
  }
  const author = data.authors.find((author) => author.id === parseInt(post.userId)); // Author keresés id alapján

  


  console.log(post.image)
  return (
    <div className="post-detail-container">
        {/* Poszt képe */}
        <img src={post.image} alt={post.title} className="post-image" />
      <div className="post-content">
        {/* Poszt címe */}
        <h1 className="post-title">{post.title}</h1>
        
        {/* Poszt leírása */}
        <p className="post-description">{post.content}</p>
        
        {/* Dátum és szerző a poszt alján */}
        <div className="post-footer">
          {/* Dátum */}
          <p className="post-date">{new Date(post.createdAt).toLocaleDateString()}</p>
          
          {/* Szerző adatai */}
          <div className="author-info">
            <img src={author.profilePicture} alt={author.username} className="author-image" />
            <div className="author-details">
              <p className="author-name">{author.username}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
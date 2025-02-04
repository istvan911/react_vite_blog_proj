  import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data';
import ErrorPage from '../pages/ErrorPage';

export default function Card({id}) {
  const navigate = useNavigate();
  const post = data.posts.find((post) => post.id === parseInt(id));
  const [postContent, setPostContent] = useState('');
  const [postTitle, setPostTitle] = useState('');

  const truncateText = (text, n) => {
  
    // Ellenőrizd, hogy a text egy string-e, és nem undefined vagy null
    if (typeof text !== 'string') {
      return '';
    }
  
    return text.length > n ? text.substring(0, n) + '...' : text;
  };

  // Eseménykezelő a kártya kattintásához
  const handleCardClick = () => {
    navigate(`/posts/${id}`);  // Navigálás az adott post részleteihez
  };

  useEffect(() => {
    if (post) {
      fetch(post.path)
        .then((response) => response.text())
        .then((html) => {
          setPostContent(html);

          // **A title kiszedése a HTML-ből**
          const parser = new DOMParser();
          const doc = parser.parseFromString(html, 'text/html');
          const extractedTitle = doc.querySelector('title')?.innerText || 'Nincs cím';
          setPostTitle(extractedTitle);
        })
        .catch((error) => console.error('Hiba történt a fájl betöltésekor:', error));
    }
  }, [post]);

  if (!post) {
    return <ErrorPage errorMessage={`Post ID: ${id} nem található.`} />;
  }

  return (
    <div className='card' onClick={handleCardClick} style={{ cursor: 'pointer' }}>
      <img src={post.image} className='card-image' alt={postTitle} />
      <div className="card-content">
        <h3 className='card-title' alt= {postTitle}>{truncateText(postTitle, 30)}</h3>
        <p className='card-text'>{truncateText(post.content, 127)}</p>
        <p className='card-date'>{post.createdAt}</p>
      </div>
    </div>
  );
}

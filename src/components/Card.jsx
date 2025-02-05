import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data';
import ErrorPage from '../pages/ErrorPage';

export default function Card({ id }) {
  const navigate = useNavigate();
  const post = data.posts.find((post) => post.id === parseInt(id));
  const [postContent, setPostContent] = useState('');
  const [postTitle, setPostTitle] = useState('');
  //Szöveg elvágása bizonyos indexnél
  const truncateText = (text, n) => {
    return typeof text === 'string' ? (text.length > n ? text.substring(0, n) + '...' : text) : '';
  };
  //Function a posztra való navigáláshoz
  const handleCardClick = () => {
    navigate(`/posts/${id}`);
  };

  useEffect(() => {
    if (post) {
      fetch(post.path)
        .then((response) => response.text())
        .then((html) => {
          // HTML parse-olása
          const parser = new DOMParser();
          const doc = parser.parseFromString(html, 'text/html');

          // Title kinyerése
          const extractedTitle = doc.querySelector('title')?.innerText || 'Nincs cím';
          setPostTitle(extractedTitle);

          // Nyers szöveg kinyerése a <body>-ból
          const extractedText = doc.body.innerText || 'Nincs tartalom';
          setPostContent(extractedText);
        })
        .catch((error) => console.error('Hiba történt a fájl betöltésekor:', error));
    }
  }, [post]);

  if (!post) {
    //Hiba esetén, visszajelzés adása
    return <ErrorPage errorMessage={`Post ID: ${id} nem található.`} />;
  }

  return (
    <div className="card" onClick={handleCardClick} style={{ cursor: 'pointer' }}>
      <img src={post.image} className="card-image" alt={postTitle} />
      <div className="card-content">
        <h3 className="card-title" alt={postTitle}>{truncateText(postTitle, 54)}</h3>
        <p className="card-text">{truncateText(postContent, 180)}</p>
        <p className="card-date">{post.createdAt}</p>
      </div>
    </div>
  );
}

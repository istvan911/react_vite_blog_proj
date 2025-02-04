import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data';
import ErrorPage from './ErrorPage';

export default function PostDetail() {
  const { id } = useParams();
  const post = data.posts.find((post) => post.id === parseInt(id));
  const [postContent, setPostContent] = useState('');

  useEffect(() => {
    if (post) {
      fetch(post.path)
        .then((response) => response.text())
        .then((html) => {
          setPostContent(html);
        })
        .catch((error) => console.error('Hiba történt a fájl betöltésekor:', error));
    }
  }, [post]);

  if (!post) {
    return <ErrorPage errorMessage={`Post ID: ${id} nem található.`} />;
  }

  return (
    <div className="post-detail-container">
      <div dangerouslySetInnerHTML={{ __html: postContent }} />
    </div>
  );
}

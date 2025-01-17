import React from 'react';
import AuthorCard from '../components/AuthorCard';
import data from '/src/data.jsx';

const { images, authors } = data;

const Authors = () => {
  return (
    <div className="card-container">
      <h1>Ismerd meg a szerzőinket!</h1>
      <p>
        Itt találhatod meg csapatunk jelenleg is aktív tagjait, akik szenvedéllyel és elkötelezettséggel hozzák létre a tartalmainkat. 
        Minden egyes szerzőnk különböző háttérrel és tapasztalattal rendelkezik, így változatos nézőpontokkal és ötletekkel gazdagítják a közösségünket. 
        Fedezd fel a profiljaikat, és ismerd meg jobban azokat az embereket, akik a kulisszák mögött dolgoznak!
      </p>
      <div className="card-list">
        {authors.map(author => (
          <AuthorCard
            key={author.id}
            id={author.id} // Passing the author's id
            profileImage={author.profilePicture}
            name={author.username}
            bio={author.bio}
            joinDate={author.dateOfBirth}
          />
        ))}
      </div>
    </div>
  );
};

export default Authors;

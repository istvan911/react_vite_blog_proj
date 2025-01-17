import React from 'react'
import Card from '../components/Card'
import data from '/src/data.jsx'
const {posts, autors} = data




export default function Home() {
  return (
    <>
    <div className="card-container">
      <h1>Welcome Lorem ipsum dolor sit.</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book. It has survived not only five centuries, but
        also the leap into electronic typesetting, remaining essentially unchanged.
      </p>
      
      <div className="card-list">
        {posts.map((post) => ( // Végigmegyünk a képtömbön és kártyákat generálunk
          <Card
            key={post.id} // Egyedi key minden kártyának
            id={post.id} // Az id prop szükséges lehet a kártyán belül is
            image={post.image} // Kép elérési útja
            title={post.title} // Kép címe
            description={post.content} // Kép leírása
            date={post.createdAt} // Poszt dátuma
          />
        ))}
      </div>
    </div>
    </>
  )
}

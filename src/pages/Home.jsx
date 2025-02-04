import React from 'react'
import Card from '../components/Card'
import data from '/src/data.jsx'
const {posts, autors} = data




export default function Home() {
  return (
    <>
    <div className="card-container">
      <h1>Járjuk a világot nyitott szemmel, hisz annyi csodás dolgot láthatunk!</h1>
      <p>
      Üdvözlünk a blogunkon! Jelenleg 5 tehetséges és elhivatott bloggerünk dolgozik azon, hogy izgalmas és hasznos tartalmakkal lásson el benneteket. Minden egyes bejegyzésünk célja, hogy inspiráljunk, szórakoztassunk, és értékes információkat nyújtsunk az olvasóinknak. Blogunk különböző témákban kínál írásokat: életmód, technológia, kultúra, utazás és még sok más. Folyamatosan bővítjük a tartalmainkat, hogy mindig friss és releváns információkkal szolgáljunk. Az íróink mindegyike saját területén tapasztalt, így a különböző nézőpontok és érdekes témák garantáltak. Ne hagyjátok ki a legújabb bejegyzéseinket, hiszen minden hónapban új írásokkal készülünk! Csatlakozz hozzánk, és fedezd fel a blogunk világát, amely mindig egy friss szemléletet és izgalmas ötleteket kínál!
      </p>
      
      <div className="card-list">
        {posts.map((post) => ( // Végigmegyünk a képtömbön és kártyákat generálunk
          <Card
            key={post.id} // Egyedi key minden kártyának
            id={post.id} // Az id prop szükséges lehet a kártyán belül is
          />
        ))}
      </div>
    </div>
    </>
  )
}

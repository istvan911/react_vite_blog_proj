import React from "react";

const GDPR = () => {
  return (
    <div className="gdpr-container">
      <h1 className="gdpr-title">Adatkezelési Tájékoztató</h1>
      
      <h2 className="gdpr-subtitle">1. Bevezetés</h2>
      <p className="gdpr-p">Jelen adatkezelési tájékoztató célja, hogy részletes információt nyújtson a weboldal felhasználói számára arról, hogyan kezeljük a személyes adatokat. Az adatkezelés során a hatályos jogszabályok, különösen az Európai Unió Általános Adatvédelmi Rendelete (GDPR) szerint járunk el.</p>
      
      <h2 className="gdpr-subtitle">2. Az adatkezelő adatai</h2>
      <ul className="gdpr-ul">
        <li className="gdpr-li">Adatkezelő: Weboldal Üzemeltető Kft.</li>
        <li className="gdpr-li">Székhely: 1234 Budapest, Minta utca 1.</li>
        <li className="gdpr-li">Elérhetőség: adatvedelem@weboldal.hu</li>
      </ul>
      <h2 className="gdpr-subtitle">3. A kezelt adatok köre</h2>
      <p className="gdpr-p">Az alábbi személyes adatokat kezeljük a weboldal használata során:</p>
      <ul className="gdpr-ul">
        <li className="gdpr-li">Felhasználónév és jelszó</li>
        <li className="gdpr-li">E-mail cím</li>
        <li className="gdpr-li">IP-cím és eszközinformációk</li>
        <li className="gdpr-li">Hírlevélre való feliratkozás esetén név és e-mail cím</li>
      </ul>
      
      <h2 className="gdpr-subtitle">4. Az adatkezelés célja és jogalapja</h2>
      <p className="gdpr-p">A személyes adatokat az alábbi célokból kezeljük:</p>
      <ul className="gdpr-ul">
        <li className="gdpr-li">A weboldal működtetése és a felhasználói élmény javítása (GDPR 6. cikk (1) bekezdés f) pont – jogos érdek)</li>
        <li className="gdpr-li">Felhasználói fiókok létrehozása és kezelése (GDPR 6. cikk (1) bekezdés b) pont – szerződés teljesítése)</li>
        <li className="gdpr-li">Hírlevelek és marketinganyagok küldése (GDPR 6. cikk (1) bekezdés a) pont – hozzájárulás)</li>
      </ul>
      
      <h2 className="gdpr-subtitle">5. Adattovábbítás és adatfeldolgozók</h2>
      <p className="gdpr-p">Az adatokat harmadik feleknek nem adjuk át, kivéve ha az jogszabály vagy hatósági előírás miatt szükséges. Külső szolgáltatók (pl. tárhelyszolgáltató, hírlevélküldő rendszer) adatfeldolgozóként járnak el.</p>
      
      <h2 className="gdpr-subtitle">6. Adatmegőrzési idő</h2>
      <p className="gdpr-p">A személyes adatokat az adatkezelés céljától függően a következő ideig őrizzük meg:</p>
      <ul className="gdpr-ul">
        <li className="gdpr-li">Felhasználói fiók esetén: a fiók fennállásáig</li>
        <li className="gdpr-li">Hírlevél feliratkozás esetén: leiratkozásig</li>
        <li className="gdpr-li">Jogszabály által előírt esetekben: a kötelező megőrzési idő végéig</li>
      </ul>
      
      <h2 className="gdpr-subtitle">7. Az érintettek jogai</h2>
      <p className="gdpr-p">A felhasználóknak joguk van:</p>
      <ul className="gdpr-ul">
        <li className="gdpr-li">Hozzáférni személyes adataikhoz</li>
        <li className="gdpr-li">Kérni adataik helyesbítését vagy törlését</li>
        <li className="gdpr-li">Tiltakozni az adatkezelés ellen</li>
        <li className="gdpr-li">Adathordozhatóságot kérni</li>
      </ul>
      
      <h2 className="gdpr-subtitle">8. Adatbiztonsági intézkedések</h2>
      <p className="gdpr-p">A személyes adatokat megfelelő technikai és szervezési intézkedésekkel védjük a jogosulatlan hozzáférés és adatvesztés ellen.</p>
      
      <h2 className="gdpr-subtitle">9. Jogorvoslati lehetőségek</h2>
      <p className="gdpr-p">Amennyiben a felhasználóknak adatkezeléssel kapcsolatos panaszaik lennének, az alábbi hatósághoz fordulhatnak:</p>
      <p className="gdpr-p">Nemzeti Adatvédelmi és Információszabadság Hatóság (NAIH)<br/>Cím: 1125 Budapest, Szilágyi Erzsébet fasor 22/C<br/>Weboldal: <a className="gdpr-link" href="https://www.naih.hu">www.naih.hu</a></p>
    </div>
  );
};

export default GDPR;

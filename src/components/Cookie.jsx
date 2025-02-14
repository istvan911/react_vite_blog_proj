import { useState, useEffect } from "react";

const Cookie = () => {
  const COOKIE_KEY = "cookieConsent";

  const getStoredConsent = () => {
    const storedConsent = localStorage.getItem(COOKIE_KEY);
    return storedConsent ? JSON.parse(storedConsent) : null;
  };

  const [isVisible, setIsVisible] = useState(getStoredConsent() === null);

  const setCookieConsent = (value) => {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 1);
    localStorage.setItem(COOKIE_KEY, JSON.stringify({ value, expires: expirationDate }));
    setIsVisible(false);
  };

  useEffect(() => {
    const storedConsent = getStoredConsent();
    if (storedConsent && new Date(storedConsent.expires) < new Date()) {
      localStorage.removeItem(COOKIE_KEY);
      setIsVisible(true);
    }
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Az overlay megakadályozza az interakciókat */}
      <div className="cookie-overlay"></div>

      <div className="cookie-banner">
        <div className="cookie-left">
          <h1>Cookie figyelmeztetés</h1>
          <p>
            Ez a weboldal sütiket használ annak érdekében, hogy a legjobb felhasználói élményt
            nyújtsa Önnek. A sütik kis szöveges fájlok, amelyeket a böngésző tárol, és segítenek
            az oldal működésének optimalizálásában, a felhasználói preferenciák megjegyzésében,
            valamint statisztikai elemzések készítésében.
          </p>
          <p>
            Ön dönthet arról, hogy elfogadja-e a sütiket. Az elfogadásukkal hozzájárul az oldal
            működéséhez szükséges és egyéb kényelmi funkciókhoz. Ha elutasítja őket, előfordulhat,
            hogy bizonyos funkciók nem működnek megfelelően.
          </p>
        </div>
        <div className="cookie-buttons">
          <button onClick={() => setCookieConsent(true)} className="cookie-button cookie-accept">
            Elfogadás
          </button>
          <button onClick={() => setCookieConsent(false)} className="cookie-button cookie-decline">
            Elutasítás
          </button>

        </div>
      </div>
    </>
  );

};

export default Cookie;

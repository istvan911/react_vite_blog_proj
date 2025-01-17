import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation(); // Nyomon követi az útvonalat

  useEffect(() => {
    window.scrollTo(0, 0); // Görgetés az ablak tetejére
  }, [pathname]); // Ha az útvonal (pathname) megváltozik, újra lefut a hatás

  return null; // Nincs visszaadott JSX, csak funkció
};

export default ScrollToTop;

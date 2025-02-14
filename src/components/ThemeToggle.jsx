import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa"; // Helyes import

export default function ThemeToggle() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <button className="theme-toggle-btn" onClick={toggleTheme}>
      {theme === "dark" ? <FaSun /> : <FaMoon />}
    </button>
  );
}

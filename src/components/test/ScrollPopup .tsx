import { useState, useEffect } from "react";
import "./scrollPopup.css"; // Подключаем стили

const ScrollPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`popup ${isVisible ? "show" : ""}`}>
      Всплывающее сообщение!
    </div>
  );
};

export default ScrollPopup;
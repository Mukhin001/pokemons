import { useEffect, useRef, useState } from "react";
import "./scrollSectiom.css";

const ScrollSection = ({ children }: any) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 } // Контент появится, когда 30% блока будет видно
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div ref={ref} className={`scroll-section ${isVisible ? "visible" : ""}`}>
      {children}
    </div>
  );
};

export default ScrollSection;
import React, { useState, useRef, useEffect } from 'react';
import './InfiniteSlider.css'

type Slide = {
  id: number;
  src: string;
  alt?: string;
};

type Props = {
  slides: Slide[];
  slideWidth?: number; // ширина одного слайда в пикселях
};

const InfiniteImageSlider: React.FC<Props> = ({ slides, slideWidth = 300 }) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const currentTranslate = useRef(0);

  const totalSlides = slides.length;
  const duplicatedSlides = [...slides, ...slides, ...slides]; // для бесконечности

  // Обработчик начала перетаскивания
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    startX.current = e.clientX;
    currentTranslate.current = offset;
  };

  // Обработчик движения мыши
  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    const dx = e.clientX - startX.current;
    setOffset(currentTranslate.current + dx);
  };

  // Обработчик окончания перетаскивания
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    // Добавляем слушатели событий для перетаскивания
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  // Бесконечный цикл: сброс позиции, если слайдер выходит за пределы
  useEffect(() => {
    const slideFullWidth = slideWidth;
    const totalWidth = slideFullWidth * totalSlides;

    if (offset <= -totalWidth) {
      setOffset(0);
    } else if (offset >= totalWidth) {
      setOffset(0);
    }
  }, [offset, slideWidth, totalSlides]);

  return (
    <div className="slider-container" onMouseDown={handleMouseDown}>
      <div
        ref={trackRef}
        className="slider-track"
        style={{
          transform: `translateX(${offset}px)`,
          transition: 'transform 0s', // без анимации для плавного движения
        }}
      >
        {duplicatedSlides.map((slide, index) => (
          <div
            key={`${slide.id}-${index}`}
            className="slide"
            style={{ width: slideWidth }}
          >
            <img src={slide.src} alt={slide.alt || `slide-${slide.id}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteImageSlider;
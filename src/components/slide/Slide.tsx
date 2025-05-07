import { useState } from 'react';
import st from './slide.module.css';

const baseSlides = [
  { id: 1, src: '/img-test-slider/belka.jpg' },
  { id: 2, src: '/img-test-slider/fox.jpg' },
  { id: 3, src: '/img-test-slider/kroll.jpg' },
  { id: 4, src: '/img-test-slider/leo.jpg' },
];

const generateSlides = (count: number) =>
  Array.from({ length: count }, (_, i) => {
    const base = baseSlides[i % baseSlides.length];
    return { ...base, id: Date.now() + Math.random() };
  });

const Slide = () => {
  const visible = 4; // количество видимых слайдов
  const slideWidth = 220; // ширина слайда с учётом промежутков
  const [slides, setSlides] = useState(() => generateSlides(12));
  const [translate, setTranslate] = useState(-visible * slideWidth); // начальная позиция

  const shiftLeft = () => {
    // Получаем первые 4 слайда и добавляем их в конец
    setSlides(prev => {
      const cut = prev.slice(4); // удаляем первые 4 слайда
      const newSlides = generateSlides(4); // генерируем 4 новых слайда
      return [...cut, ...newSlides]; // добавляем новые слайды в конец
    });
    setTranslate(prev => prev - slideWidth); // сдвигаем на одну ширину
  };

  const shiftRight = () => {
    // Получаем последние 4 слайда и добавляем их в начало
    setSlides(prev => {
      const cut = prev.slice(0, prev.length - 4); // удаляем последние 4 слайда
      const newSlides = generateSlides(4); // генерируем 4 новых слайда
      return [...newSlides, ...cut]; // добавляем новые слайды в начало
    });
    setTranslate(prev => prev + slideWidth); // сдвигаем на одну ширину
  };

  return (
    <section>
      <h1>Бесконечный слайдер</h1>
      <div className={st.wrapUl}>
        <ul
          className={st.wrapLi}
          style={{
            transform: `translate3d(${translate}px, 0, 0)`, // применяем сдвиг
          }}
        >
          {slides.map(slide => (
            <li key={slide.id} className={st.wrapImg}>
              <img src={slide.src} alt="Слайд" />
            </li>
          ))}
        </ul>
      </div>
      <div className={st.wrapBtns}>
        <button onClick={shiftRight}>←</button>
        <button onClick={shiftLeft}>→</button>
      </div>
    </section>
  );
};

export default Slide;
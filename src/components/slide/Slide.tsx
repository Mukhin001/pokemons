import InfiniteSlider from "./infiniteSlider/InfiniteSlider";

const Slide = () => {
    const slides = [
        { id: 1, src: '/img-test-slider/belka.jpg' },
        { id: 2, src: '/img-test-slider/fox.jpg' },
        { id: 3, src: '/img-test-slider/kroll.jpg' },
        { id: 4, src: '/img-test-slider/leo.jpg' },
      ];
    
      return (
        <div style={{ width: '100%', overflow: 'hidden' }}>
          <h1>Бесконечный слайдер</h1>
          <InfiniteSlider slides={slides} slideWidth={300} />
        </div>
      );
}
 
export default Slide;
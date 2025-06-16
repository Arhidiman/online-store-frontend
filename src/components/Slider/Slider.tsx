import React, { useEffect } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import './Slider.scss'
import 'keen-slider/keen-slider.min.css';

interface SliderProps {
  images: string[];
  interval?: number;
}

export const Slider: React.FC<SliderProps> = ({ images, interval = 5000 }) => {

  const [sliderInstanceRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1 },
    drag: true,
  });

  useEffect(() => {
    if (!slider) return;

    const timer = setInterval(() => {
      slider.current?.next();
    }, interval);

    return () => clearInterval(timer);
  }, [slider, interval]);

  return (
    <div ref={sliderInstanceRef} className="keen-slider">
      {images.map((src, idx) => (
        <div key={idx} className="keen-slider__slide">
          <img
            src={src}
            alt={`Slide ${idx + 1}`}
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              objectFit: 'cover',
            }}
          />
        </div>
      ))}
    </div>
  );
};


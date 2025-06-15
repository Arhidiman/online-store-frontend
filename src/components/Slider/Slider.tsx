import React from 'react';
import { useKeenSlider, KeenSliderInstance } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import './Carousel.scss'


interface SliderProps {
  images: string[];
}

export const Slider: React.FC<SliderProps> = ({ images }) => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1 },
    drag: true,
    slideChanged(s) {
      console.log('current slide index:', s.track.details.abs)
    },
  })

  return (
    <div ref={sliderRef} className="keen-slider">
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
  )
}


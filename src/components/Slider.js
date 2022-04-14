import React, { useEffect, useState } from 'react';
import "../styles/slider.css"
import Arrows from './Arrows';
import Dots from './Dots';
import SliderContent from './SliderContent';
import sliderImage from './sliderImage';

const len = sliderImage.length - 1;

function Slider(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [matches, setMatches] = useState(
    window.matchMedia("(max-width: 600px)").matches
  )
  // console.log('matches: ', matches);
  // console.log(sliderImage);
  useEffect(() => {
    window
      .matchMedia("(max-width: 600px)")
      .addEventListener('change', e => {
        // console.log(e);

        setMatches(e.matches);
        // console.log('e.matches: ', e.matches);
      });

  }, []);

  // if (matches) {
  //   return (
  //     <section className="image-container">
  //       {sliderImage.map((slide) => {
  //         return <div
  //         className='images'>
  //         <a href={slide.link} target="_blank" rel="noopener noreferrer" className="image-link">

  //           <img className="mobile-image" src={slide.urls} alt="" title="Map Image" />

  //           <h2 className='img-title'>{slide.title}</h2>

  //         </a>
  //         <a href={slide.credits} target="_blank" rel="noopener noreferrer" className='slide-text'><p>{slide.description}</p></a>
  //       </div>
  //       })}
  //     </section>
  //   )

  // } else {
    return (
      <div className='slider-container'>
        <SliderContent activeIndex={activeIndex} sliderImage={sliderImage} />
        <Arrows
          prevSlide={() =>
            setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
          }

          nextSlide={() =>
            setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
          }
        />

        <Dots
          activeIndex={activeIndex}
          sliderImage={sliderImage}
          onclick={(activeIndex) => setActiveIndex(activeIndex)}
        />
      </div>
    )
  // }

}

export default Slider
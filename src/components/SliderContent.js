import React from 'react';

function SliderContent({ activeIndex, sliderImage }) {

  return (
    <section>
      {sliderImage.map((slide, index) => {
        return <div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
        >
          <a href="https://venit.herokuapp.com/search" target="_blank" rel="noopener noreferrer" className="slide-anchor-image">

            <img className="slide-image" src={slide.urls} alt="" title="Map Image" />

            <h2 className='slide-title'>{slide.title}</h2>

          </a>
          <a href={slide.credits} target="_blank" rel="noopener noreferrer" className='slide-text'><p>{slide.description}</p></a>
        </div>
      })}
    </section>
  );
}

export default SliderContent
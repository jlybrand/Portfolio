import React from 'react';

function Dots({ activeIndex, onclick, sliderImage }) {
  return (
    <div className="all-dots">
      {sliderImage.map((slide, index) => {
        return <span
          key={index}
          className={`${activeIndex === index ? "dot active-dot" : "dot"}`}
          // lifting state to parent ele with onclick callback
          onClick={() => onclick(index)}
        ></span>
      })}
    </div>
  )
}

export default Dots
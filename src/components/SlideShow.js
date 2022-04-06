import React, { useState } from 'react';
import Slide from './Slide.js';

//Add styling for overlap=true and overlap=false images.
//Change left/right orientation for odd slides?
//Add option to start slideshow with image on the left

const SlideShow = (props) => {
  const [focused, setFocused] = useState(0)

  function determineFocus(slideIndex) {
    let idSelection;
    if (slideIndex === focused) {
      idSelection = 'focused'
    } else if (slideIndex === focused - 1) {
      idSelection = 'prev'
    } else if (slideIndex === focused + 1) {
      idSelection = 'next'
    } else {
      idSelection = '';
    }
    return idSelection;
  }

  console.log(props.data.length)

  const prevClick = event => {
    if (focused > 0) {
      setFocused(focused - 1)
    } else {
      setFocused(props.data.length - 1)
    }
  }

  const nextClick = event => {
    if (focused < props.data.length - 1) {
      setFocused(focused + 1)
    } else {
      setFocused(0)
    }
  }

  const content = props.data
  const contentMap = content.map((slide, index) => {
    return (<Slide
      data={slide}
      key={slide.id}
      index={index}
      totalSlides={props.data.length}
      idName={determineFocus(index)}
      prevClick={prevClick}
      nextClick={nextClick}
    />)
  })

  return (
    <div>
      <div className="full-width-mod">
        <div className="slide-container">
          {contentMap}
        </div>
      </div>
    </div>
  )
}

export default SlideShow
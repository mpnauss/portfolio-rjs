import React from 'react';

const Slide = (props) => {

  let whiteBgClass = '';
  let slideContainerClass = 'slide'

  if (props.index % 2 === 0) {
    whiteBgClass = 'slide-image-white-rt'
    slideContainerClass = 'slide'
  } else {
    whiteBgClass = 'slide-image-white-lt'
    slideContainerClass = 'slide slide-reverse'
  }

    return (
      <div className={slideContainerClass} id={props.idName}>
        <div className="slide-content">
          <h3>{props.data.title}</h3>
          <p>{props.data.body}</p>
          <p>Slide {props.index + 1} of {props.totalSlides}</p>
          <p><span onClick={props.prevClick}>Prev</span> / <span onClick={props.nextClick}>Next</span></p>
        </div>
        <div className="slide-image">
          <img src={props.data.thumbUrl} alt={props.data.thumbAlt} />
        </div>
        <div className={whiteBgClass}> </div>
      </div>
    )
  }

export default Slide;
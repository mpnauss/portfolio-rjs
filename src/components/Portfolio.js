import React from 'react';
import Hero from './Hero';
import Slideshow from './SlideShow'
import webProjectData from '../data/webProjectData.js'

function Portfolio() {
    return(
        <div>
            <Hero />
            <Slideshow 
                data={webProjectData}
                name="Web Projects" 
            />
        </div>
    )
};

export default Portfolio;
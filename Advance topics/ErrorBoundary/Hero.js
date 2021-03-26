//Using Error boundary we will try to handle error of components
//try to solve if any component is throwing error how to handle the entire application crash 
//learn what is the best idea/ practices to apply error boundaries so that we can handle errors effectively.

import React from 'react'

function Hero({heroname}) {
    if(heroname === 'jocker'){
        throw new Error('not a Hero!');
    }
    return (
        <div>
            {heroname}
        </div>
    )
}

export default Hero

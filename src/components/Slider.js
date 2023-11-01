import React from 'react'
// import { Carousel } from "@material-tailwind/react";
import Carosuel from './Carosuel';

const slides = [
    'https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/4d414532793b8b96.png?q=20',
    "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/6f431c55d08a768a.jpg?q=20",
    "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/2850f035a6d3521e.jpeg?q=20",
    "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/a50932894596b0af.jpg?q=20",
    "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/a50932894596b0af.jpg?q=20",
    "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/2d46d868f6692aeb.jpg?q=20",
    "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/8948611244f67dc6.jpeg?q=20"
]

const Slider = () => {
  return (
    <div className='p-2 mx-10 my-2 shadow-lg overflow-hidden relative h-60'>

        <Carosuel slides={slides}/>
        
    </div>
  )
}

export default Slider
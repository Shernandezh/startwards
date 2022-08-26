import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import galeria from '../assets/galeria';


function CaruselApp() {
  return (
    <div>
        
        <Carousel className="carousell" fade>
      <Carousel.Item>
        <img
          className="d-block w-100 h-50"
          src={galeria.slider1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Primera Orden vs La Rebelion</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={galeria.Slider2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Halcon Milenario</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={galeria.Slider3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Rey vs Dark Wader</h3>
          <p>
         
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    </div>
  )
}

export default CaruselApp
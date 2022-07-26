import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import galeria from '../assets/galeria';


function CaruselApp() {
  return (
    <div>
        
        <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100 h-50"
          src={galeria.b1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>DOOM ETERNAL</h3>
          <p>Ambientada en un tiempo después de los eventos del juego de 2016, la historia sigue al Doom Slayer una vez más en una misión para terminar con el consumo de la Tierra por parte del Infierno y frustrar los planes del alienígena Khan Maykr para exterminar a la humanidad.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={galeria.b2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>ELDEN RING</h3>
          <p>La historia de Elden Ring es la del Sinluz, un exiliado que regresa a un marchito y enorme reino conocido como las Tierras Intermedias. Su propósito: reclamar el poder del Círculo de Elden. Una gesta que lo enfrentará a criaturas de pesadilla y un cruel destino.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={galeria.b3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>RED DEAD REDEMPTION 2</h3>
          <p>
          La historia de Elden Ring es la del Sinluz, un exiliado que regresa a un marchito y enorme reino conocido como las Tierras Intermedias. Su propósito: reclamar el poder del Círculo de Elden. Una gesta que lo enfrentará a criaturas de pesadilla y un cruel destino
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    </div>
  )
}

export default CaruselApp
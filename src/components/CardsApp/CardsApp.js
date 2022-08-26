import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function CardsApp(props) {
  return (
    <div>
  <CardGroup>
      <Card>
      <Card.Img className='imgcard' variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.titulo}</Card.Title>
        <Button variant="primary">Ver Más</Button>
      </Card.Body>
    </Card>
    </CardGroup>
  </div>
  )
}

export default CardsApp
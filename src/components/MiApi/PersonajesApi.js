import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { ListGroup } from "react-bootstrap";
import "./apis.css";
import {Link} from "react-router-dom"
export const PersonajesApi = ({
  name,
  hair,
  eyes,
  skin,
  gender,
  height,
  weigth,
  birthday,
  }) => {

  return (
    <Card
    className="m-2 text-center">
    <Card.Body className="cuerpo">
      <Card.Title className="titulo">
      </Card.Title>
      <ListGroup> <button><Link to ='detallespersonaje'>Ver mas</Link></button>
      <ListGroup.Item className="lista"><b>nombre:</b>{name}</ListGroup.Item>
        <ListGroup.Item className="lista"><b>Color del cabello:</b>{hair}</ListGroup.Item>
        <ListGroup.Item className="lista"><b>Color de ojos:</b>{eyes}</ListGroup.Item>
        <ListGroup.Item className="lista"><b>Color de la piel:</b>{skin}</ListGroup.Item>
        <ListGroup.Item className="lista"><b>Genero:</b>{gender}</ListGroup.Item>
        <ListGroup.Item className="lista"><b>Altura:</b>{height}</ListGroup.Item>
        <ListGroup.Item className="lista"><b>Peso:</b>{weigth}</ListGroup.Item>
        <ListGroup.Item className="lista"><b>Fecha nacimiento:</b>{birthday}</ListGroup.Item>
        </ListGroup>
        </Card.Body>
        </Card>
    );
    };

export default PersonajesApi;
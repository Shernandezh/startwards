import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { ListGroup } from "react-bootstrap";
import "./apis.css";
export const PlanetasApi = ({
    planeta,
    clima,
    terreno,
    creado,
    poblacion,
    gravedad,
    diametro
   }) => {
  return (
    <Card
    className="m-2 text-center">
    <Card.Body className="cuerpo">
      <Card.Title className="titulo">
      </Card.Title>
      <ListGroup>
      <ListGroup.Item className="lista"><b>   nombre:  </b>{planeta}</ListGroup.Item>
        <ListGroup.Item className="lista"><b>clima: </b>{clima}</ListGroup.Item>
        <ListGroup.Item className="lista"><b>Terreno:  </b>{terreno}</ListGroup.Item>
        <ListGroup.Item className="lista"><b>creado:  </b>{creado}</ListGroup.Item>
        <ListGroup.Item className="lista"><b>poblacion:  </b>{poblacion}</ListGroup.Item>
        <ListGroup.Item className="lista"><b>Gravedad:  </b>{gravedad}</ListGroup.Item>
        <ListGroup.Item className="lista"><b>Diametro:  </b>{diametro}</ListGroup.Item>
        </ListGroup>
        </Card.Body>
        </Card>
    );
    };

export default PlanetasApi;
import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import ListGroup from "react-bootstrap/ListGroup";
import logo from 'C:/Users/Ruchita/Desktop/Projects/rudraksha-organics/src/logo.png';
// import GoogleMaps from "./map";

function Contact() {
    return (

<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={logo} width={200} />
      <Card.Body>
      <Card.Title>Contact</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Reach out to us via any of these platforms
            </Card.Subtitle>
            <Card.Text>Facebook</Card.Text>
        
      </Card.Body>
    </Card>



        )}
  
  export default Contact;



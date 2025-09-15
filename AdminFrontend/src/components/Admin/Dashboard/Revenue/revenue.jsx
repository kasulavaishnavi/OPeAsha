import React from "react";
import { Container, Card } from "react-bootstrap";
import { MdCurrencyRupee } from "react-icons/md";

const Revenue = () => {
  return (
    <Container className="mt-4">
      <Card className="text-center shadow-sm border-0">
        <Card.Body>
          <MdCurrencyRupee size={40} color="#198754" className="mb-2" />
          <Card.Title className="fw-bold">₹8,50,000</Card.Title>
          <Card.Text>Total Revenue</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Revenue;

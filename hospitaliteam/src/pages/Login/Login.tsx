import React from 'react';
import './Login.scss'
import { Form, Button, Card } from 'react-bootstrap';

export default function Login() {
  return (
    <React.Fragment>
      <Card className="text-center">
        <Card.Header>HospitaliTeam Login</Card.Header>
        <Card.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" required />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" required />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember Me" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
      </Button>
          </Form>
        </Card.Body>
        <Card.Footer className="text-muted">&copy; 2019</Card.Footer>
      </Card>
    </React.Fragment>
  )
}

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import subzero1 from "./imgs/subzero.jpg";
import mileena2 from "./imgs/mileena.jpg";
import scorpion3 from "./imgs/scorpion2.jpg";

{
  /*function component that returns JMX code*/
}
export default function App() {
  return (
    <>
      <div className="App">
        {/*navigation bar*/}
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home" style={{ fontWeight: "bold" }}>
              Mortal Kombat X
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        {/*header*/}
        <Card>
          <Card.Body>
            <Card.Title style={{ textAlign: "center", fontWeight: "bold" }}>
              Which one of us is your favourite MKX character?
            </Card.Title>
          </Card.Body>
        </Card>
        {/*card one*/}
        <div
          style={{
            display: "flex",
            flexDirection: "rows",
            justifyContent: "space-around",
            padding: 100,
          }}
        >
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={subzero1} alt="sub" />
            <Card.Body>
              <Card.Title className="subzero">SUB-ZERO</Card.Title>
              <Card.Text>
                Be stealthful as the night...and deadly as the dawn.
              </Card.Text>
            </Card.Body>
          </Card>
          {/*card two*/}
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={mileena2} alt="mileena" />
            <Card.Body>
              <Card.Title className="mileena">MILEENA</Card.Title>
              <Card.Text>Tasty!</Card.Text>
            </Card.Body>
          </Card>
          {/*card three*/}
          <Card style={{ width: "18rem" }}>
            <img variant="top" src={scorpion3} alt="scorpion" />
            <Card.Body>
              <Card.Title className="scorpion">SCORPION</Card.Title>
              <Card.Text>Vengeance will be mine!</Card.Text>
            </Card.Body>
          </Card>
        </div>
        {/*use of forms checkpoint objective; select list.*/}
        <Form.Select aria-label="Default select example">
          <option>select your favourite character here</option>
          <option value="1">subzero</option>
          <option value="2">mileena</option>
          <option value="3">scorpion</option>
        </Form.Select>
      </div>
    </>
  );
}

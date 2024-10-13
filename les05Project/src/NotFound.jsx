import { NavLink } from "react-router-dom";
import { Button, Container, Card, Row, Col, Image, Nav } from 'react-bootstrap'

function NotFound() {
    return (
        <Container fluid style={{
            display: 'flex',
            flexDirection: 'column',  
            backgroundColor: '#D3E3C0',
            color: '#121311',
            padding:  '50px',
            width: '100vw',
            minHeight: '100vh',
            margin: '0',}}>
            <Row className='justify-content-center text-center'>
                <Col>
                    <Image src="/src/assets/sleeping-cat.png" fluid style={{width: '500px', height: 'auto',}} />
                    <h1> 404 - NOT FOUND</h1>
                </Col>
            </Row>
            <Row className='justify-content-center text-center'>
                <Col>
                    <p>Sorry, the page you are looking for does not exist.</p>
                </Col>
            </Row>
            <Row className='justify-content-center text-center'>
                <Col>
                    <p>You can always go back to the <Nav.Link as={NavLink} to="/" activeclassname="active" className="navLink"><Image src="/src/assets/icons8-return-30.png" fluid /> homepage</Nav.Link></p>
                </Col>
            </Row>
        </Container>
    )
}

export default NotFound;
import { Button, Container, Card, Row, Col, Image } from 'react-bootstrap'

const HomePage = () => {
    return (
        <Container fluid className="border border-secondary" style={{
        display: 'flex',
        flexDirection: 'column',  
        backgroundColor: '#D3E3C0',
        color: '#121311',
        padding:  '50px',
        width: '100vw',
        minHeight: '100vh',
        margin: '0',}}>
            <Row className='justify-content-center text-center'>
                <Col xs={12}>
                    <h1>Premiyums</h1>
                    <Image src="/src/assets/welcome.png" fluid />
                    <p>Welcome to Premiyums, the premium nutritional cat food shop for the health-conscious. Make your cat happy!</p>
                </Col>
                <Col xs={8}>
                    <Button variant="primary shadow-lg mt-5" size="lg">Shop Now</Button>
                </Col>
            </Row>
            <Row className="justify-content-center text-center my-5">
                <Col md={6}>
                    <Card className="shadow-lg rounded-3 mt-5" style={{ width: '60%', margin: '20%', }}>
                        <Card.Body>
                            <Card.Title>Fall Promotions</Card.Title>
                            <Card.Text>
                            See our deals and coupons here.
                            </Card.Text>
                            <Button variant="secondary">Deals</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} className="justify-content-center">
                    <Card className="shadow-lg rounded-3 mt-5" style={{ width: '60%', margin: '20%', }}>
                        <Card.Body>
                            <Card.Title>New Line</Card.Title>
                            <Card.Text>
                            We launched a new product line in October 2024!
                            </Card.Text>
                            <Button variant="secondary">See More</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default HomePage;
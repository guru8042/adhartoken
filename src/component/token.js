
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




const Token = () => {
    return (
        <Row>
            <Col md={{ span: 6, offset: 4 }}>
                <Card style={{ width: '30rem' }} className="justify-content-center p-2 mt-5"   >
                    <Card.Header className=" fs-4 fw-bolder col-12 d-flex justify-content-center p-2 bg-warning rounded">Token to Adhar</Card.Header>
                    <Card.Body className="shadow-lg  bg-white rounded">
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="text" placeholder="Enter Token Key..." />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="text" placeholder="Adhar Number" />
                            </Form.Group>
                            <div className="d-md-flex justify-content-md-end">
                                <Button variant="warning" type="submit">
                                    Get Adhar
                                </Button>
                            </div>

                        </Form>
                    </Card.Body>
                </Card>
            </Col>
        </Row>


    )
}

export default Token;
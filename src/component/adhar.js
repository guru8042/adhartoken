import { useState } from 'react';
// import { Tab, Tabs } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';


const Adhar = () => {


    const [adhar, setAdhar] = useState('');

    const handleNameChange = event => {
        const limit = 10;
        setAdhar(event.target.value.slice(0, limit));
    };
    return (
        <Row >
            <Col md={{ span: 6, offset: 4, }}>
                <Card style={{ width: '30rem' }} className="justify-content-center p-2 mt-5"  >
                    <Card.Header className=" fs-4 fw-bolder col-12 d-flex justify-content-center p-2 bg-warning rounded">Adhar to Token</Card.Header>

                    <Card.Body className="shadow-lg  bg-white rounded">
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="number"
                                    placeholder="Enter Adhar No..."
                                    name="adhar"
                                    id="adhar"
                                    value={adhar}
                                    onChange={handleNameChange}

                                />

                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="text" placeholder="Token" />
                            </Form.Group>
                            <div className="d-md-flex justify-content-md-end">
                                <Button variant="warning" type="submit">
                                    Get Token
                                </Button>
                            </div>

                        </Form>
                    </Card.Body>
                </Card>
            </Col>
        </Row>

    )
}

export default Adhar;
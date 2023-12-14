import { useEffect, useState } from 'react';
import { Button, Card, Container, Row } from 'react-bootstrap';

export const CardApi = () => {
    const [showApi, setShowApi] = useState([]);

    const FetchApi = async () => {
        const api = 'https://fakestoreapi.com/products';
        try {
            const response = await fetch(api)
            const jsonData = await response.json()
            setShowApi(jsonData)
        } catch (error) {
            return error;
        }
    }

    useEffect(() => {
        FetchApi()
    }, [])


    return (
        <>
            <Container>
                <Row>
                    {showApi.map((item) => (
                        <Card key={item.id} style={{ width: '18rem', margin: '10px' }}>
                            <Card.Img variant="top" src={item.image} />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>{item.description}</Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    ))}
                </Row>
            </Container>
        </>
    );
};
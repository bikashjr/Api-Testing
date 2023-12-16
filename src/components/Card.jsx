import { useEffect, useState } from 'react';
import { Card, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import '../App.css'

const api = "https://api.escuelajs.co/api/v1/products?offset=0&limit=20";

export const CardApi = () => {
    const [showApi, setShowApi] = useState([]);

    const FetchApi = async () => {
        const response = await fetch(api)
        const jsonData = await response.json()
        setShowApi(jsonData);
    }
    useEffect(() => {
        FetchApi()
    }, [])

    return (
        <>
            <Container>
                <Row>
                    {
                        showApi.length > 0 ? (
                            showApi?.map((item) => (
                                <div className='col-md-3 mt-4' key={item.id} >
                                    <Link to={`/card/${item.id}`}>
                                        <Card style={{ width: '100%', height: '100%' }}>
                                            <Card.Img variant="top" src={item.images} />
                                            <Card.Body>
                                                <Card.Title>{item.title}</Card.Title>
                                                <Card.Text>{item.description}</Card.Text>
                                                <p> Price:$<b>{item.price} </b></p>
                                            </Card.Body>
                                        </Card>
                                    </Link>
                                </div>
                            ))
                        )
                            : 'Nothing found'
                    }
                </Row>
            </Container>
        </>
    );
};
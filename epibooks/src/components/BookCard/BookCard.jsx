import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const BookCard = ({title, category, img, price}) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{category}</Card.Text>
                <Card.Text>{price}</Card.Text>
                <Button variant="primary">Vai al libro</Button>
            </Card.Body>
        </Card>
    );
}

export default BookCard
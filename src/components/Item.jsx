import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';

export const Item = ({botella}) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={botella.img} />
            <Card.Body>
            <Card.Title>{botella.name}</Card.Title>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>Precio {botella.price}</ListGroup.Item>
                <ListGroup.Item>Tipo de bebida: {botella.category}</ListGroup.Item>
            </ListGroup>
            <Link to={`/item/${botella.id}`}>
                <Button variant="primary">Ver Detalle</Button>
            </Link>
            </Card.Body>
        </Card>
    );
}
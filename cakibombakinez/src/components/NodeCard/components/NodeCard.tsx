import React from 'react';
import { Card, Button } from 'react-bootstrap';

interface NodeCardProps {
	name: string;
	price: string;
	description: string;
}

const NodeCard: React.FC<NodeCardProps> = ( props ) => {
	return (
		<Card>
			<Card.Header>{props.name}</Card.Header>
			<Card.Body>
				<Card.Text>
					<strong>Price:</strong> {props.price}
				</Card.Text>
				<Card.Text>
					<strong>Description:</strong> {props.description}
				</Card.Text>
			</Card.Body>
			<Card.Footer>
				<Button variant="primary">Buy Now</Button>
			</Card.Footer>
		</Card>
	);
};

export default NodeCard;

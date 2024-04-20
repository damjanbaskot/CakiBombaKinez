import React from 'react';
import { Card, Button } from 'react-bootstrap';

interface NodeCardProps {
	name: string;
	price: string;
	description: string;
}

const NodeCard: React.FC<NodeCardProps> = (props) => {
	return (
		<Card className="mb-3" style={{ backgroundColor: '#333', color: '#fff' }}>
			<Card.Header>{props.name}</Card.Header>
			<Card.Body>
				<Card.Text>
					<strong style={{ color: '#28a745' }}>Price:</strong> {props.price}
				</Card.Text>
				<Card.Text className={'fs-6'}>
					<strong style={{ color: '#dc3545' }}>Description:</strong> {props.description}
				</Card.Text>
			</Card.Body>
			<Card.Footer>
				<Button variant="primary">Buy Now</Button>
			</Card.Footer>
		</Card>
	);
};

export default NodeCard;

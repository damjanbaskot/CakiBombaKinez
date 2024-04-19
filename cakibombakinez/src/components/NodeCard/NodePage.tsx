import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NodeCard from './components/NodeCard';

const NodePage = () => {
	// Dummy data for nodes
	const nodes = [
		{ id: 1, name: 'Node 1', price: '$100', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
		{ id: 2, name: 'Node 2', price: '$120', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
		{ id: 3, name: 'Node 3', price: '$90', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
		{ id: 4, name: 'Node 4', price: '$150', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
		{ id: 5, name: 'Node 5', price: '$80', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
		{ id: 6, name: 'Node 6', price: '$110', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
	];

	return (
		<div>
			<h1 className="text-center">Nodes for Sale</h1>
			<Container>
				<Row className="mb-4">
					{nodes.map(node => (
						<Col key={node.id} xs={12} sm={6} md={4}>
							<NodeCard
								name={node.name}
								price={node.price}
								description={node.description}
							/>
						</Col>
					))}
				</Row>
			</Container>
		</div>
	);
};

export default NodePage;

import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import './CardComponent.css'
import { FaGolfBall } from 'react-icons/fa';

export default class CardComponent extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="card-container">
                <h2>{this.props.header}</h2>
				<FaGolfBall 
					style={{
						fontSize: 20,
						textAlign: 'center',
						display: 'block',
						margin: '20 auto 40 auto'
					}}
				/>
				<Card className="card-component">
					<img className="card-image" src={this.props.src} />
				</Card>
			</div>
		);
	}
}

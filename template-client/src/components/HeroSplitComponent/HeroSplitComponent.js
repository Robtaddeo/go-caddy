import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './HeroSplitComponent.css'

export default class HeroSplitComponent extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Row className="hero">
				<Col md={6}>
					<img 
                        src={this.props.src}
                    />
				</Col>
                <Col md={6} className="hero-text">
                        <h1>{this.props.heading}</h1>
                        <p>
                            {this.props.subText}
                        </p>
                </Col>
			</Row>
		);
	}
}

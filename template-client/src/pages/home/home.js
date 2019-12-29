import React, { Component } from 'react';
import CarouselComponent from '../../components/CarouselComponent/CarouselComponent';
import CardComponent from '../../components/CardComponent/CardComponent';
import { Container, Col, Row, Button } from 'react-bootstrap';
import '../home/home.css';
import HeroSplitComponent from '../../components/HeroSplitComponent/HeroSplitComponent';

export default class home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			carouselSlides: [
				{
					src: 'http://triompher.ancorathemes.com/wp-content/uploads/2017/05/slider_3.jpg',
					alt: 'course',
					label: 'Golf Events',
					subHeading: ' '
				},
				{
					src: 'http://triompher.ancorathemes.com/wp-content/uploads/2017/05/slider_2.jpg',
					alt: 'club',
					label: 'Green Fees',
					subHeading: 'Since 1877'
				},
				{
					src: 'http://triompher.ancorathemes.com/wp-content/uploads/2017/05/slider_1.jpg',
					alt: 'man',
					label: 'First In Golf',
					subHeading: 'Since 1877'
				}
			],
			cards: [
				{
					src: 'http://triompher.ancorathemes.com/wp-content/uploads/2017/04/service-6-540x542.jpg',
					header: 'GOLF COACHING',
					href: 'http://triompher.ancorathemes.com/services/golf-coaching/'
				},
				{
					src: 'http://triompher.ancorathemes.com/wp-content/uploads/2017/04/service-7-540x542.jpg',
					header: 'HOST A TOURNAMENT',
					href: 'http://triompher.ancorathemes.com/services/host-a-tournament/'
				},
				{
					src: 'http://triompher.ancorathemes.com/wp-content/uploads/2017/04/service-8-540x542.jpg',
					header: 'Become a member',
					href: 'http://triompher.ancorathemes.com/services/golf-coaching/'
				},
				{
					src: 'http://triompher.ancorathemes.com/wp-content/uploads/2017/04/service-9-540x542.jpg',
					header: 'Plan your wedding',
					href: 'http://triompher.ancorathemes.com/services/golf-coaching/'
				}
			],
			welcome: {
				title: 'Welcome To Trimpher Golf Club',
				bio:
					'Here at Triompher Golf Club, we pride ourselves on the high quality of championship golf, striking views and outstanding service that we offer our valued guests. We have worked hard over the years to become a vital part of the community, and in the process, we have earned recognition as one of the premier golf experiences in the region.'
			},
			hero1: {
				src: "https://images.unsplash.com/photo-1500932334442-8761ee4810a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
				heading: "Club History",
				subText: "In 1921, another chapter of our golf club began with the opening of a new state-of-the-art clubhouse and banquet facility. It was an unprecedented level of hospitality to the golf industry."
			}
		};
	}

	render() {
		return (
			<div className="home">
				<CarouselComponent data={this.state.carouselSlides} />
				<Container className="offset-container">
					<Row className="cards-section">
						{this.state.cards.map((card) => {
							return (
								<Col xs={3} key={`col-${Math.floor(Math.random() * 1000)}`}>
									<CardComponent
										key={`card-${Math.floor(Math.random() * 1000)}`}
										src={card.src}
										header={card.header}
										href={card.href}
									/>
								</Col>
							);
						})}
					</Row>
					<Container className="welcome-section">
						<h2> {this.state.welcome.title} </h2> <hr />
						<p> {this.state.welcome.bio} </p>
						<div className="container-fluid">
							<div className="col-sm-12 text-center">
								<Button variant="secondary" className="text-center">
									Learn More
								</Button>
							</div>
						</div>
					</Container>
				</Container>
				<HeroSplitComponent
					src={this.state.hero1.src}
					heading={this.state.hero1.heading}
					subText={this.state.hero1.subText}
				/>
			</div>
		);
	}
}

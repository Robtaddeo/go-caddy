import React, { Component } from 'react';
import CarouselComponent from '../../components/CarouselComponent/CarouselComponent';
import CardComponent from '../../components/CardComponent/CardComponent';
import { Container, Col, Row } from 'react-bootstrap';
import '../home/home.css'

export default class home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			carouselSlides: [
				{
					src: 'http://triompher.ancorathemes.com/wp-content/uploads/2017/05/slider_3.jpg',
					alt: 'course',
					label: 'Golf Events',
					subHeading: ''
				},
				{
					src: 'http://triompher.ancorathemes.com/wp-content/uploads/2017/05/slider_2.jpg',
					alt: 'club',
					label: 'Green Fees',
					subHeading: ''
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
					header: 'GOLF COACHING',
					href: 'http://triompher.ancorathemes.com/services/golf-coaching/'
                },
                {
					src: 'http://triompher.ancorathemes.com/wp-content/uploads/2017/04/service-9-540x542.jpg',
					header: 'GOLF COACHING',
					href: 'http://triompher.ancorathemes.com/services/golf-coaching/'
				}
			]
		};
	}

	render() {
		return (
			<div className="home">
				<CarouselComponent data={this.state.carouselSlides} />
				<Container className='cards-section'>
					<Row>
						{this.state.cards.map((card) => {
							return (
								<Col xs={3} key={`col-${Math.floor(Math.random()*1000)}`} >
                                    <CardComponent 
                                        key={`card-${Math.floor(Math.random()*1000)}`} 
                                        src={card.src} 
                                        header={card.header} 
                                        href={card.href} />
								</Col>
							);
						})}
					</Row>
				</Container>
			</div>
		);
	}
}

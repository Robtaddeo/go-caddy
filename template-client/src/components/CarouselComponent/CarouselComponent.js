import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import './CarouselComponent.css'

export default class CarouselComponent extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<Carousel className="carousel">
					{this.props.data.map((slide) => {
						return (
							<Carousel.Item key={slide.alt}>
                                <img 
                                    className="d-block carouselItem" 
                                    src={slide.src} 
                                    alt={slide.alt}
                                 />
								<Carousel.Caption>
									<h3>{slide.label}</h3>
									<p>{slide.subHeading}</p>
								</Carousel.Caption>
							</Carousel.Item>
						);
					})}
				</Carousel>
			</div>
		);
	}
}

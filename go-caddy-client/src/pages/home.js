import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import CustomCard from '../components/CustomCard';
import PlayArrow from '@material-ui/icons/PlayArrow';

const useStyles = makeStyles((theme) => ({
	gradientBackground: {
		backgroundImage: 'linear-gradient(white , #fbe9e7)',
		marginBottom: 200,
		marginTop: 125
	},
	secondGradient: {
		backgroundImage: 'linear-gradient(white, #fbe9e7 50%, white)'
	},
	heroTextContainer: {
		width: '70%',
		marginBottom: 100,
		marginLeft: 'auto',
		marginRight: 'auto'
	},
	cards: {
		maxWidth: 1300,
		margin: '50px auto auto auto',
		paddingLeft: '20px',
		paddingRight: '20px'
	},
	heroText: {
		marginTop: '75px',
		marginBottom: '20px',
		paddingTop: '20px',
		paddingBottom: '20px',
		lineHeight: 1,
		fontSize: '4.5em',
		fontWeight: '700'
	},
	landingText: {
		width: '75%',
		fontWeight: '400',
		lineHeight: 1.3,
		fontSize: '2em',
		color: '#546e7a'
	},
	demobtn: {
		marginTop: 20,
		boxShadow: 'none',
		fontWeight: 'bold',
		backgroundColor: '#009688',
		padding: '0 35px 0 35px',
		textTransform: 'none',
		marginRight: 'auto',
		marginLeft: 'auto',
		fontSize: '1.1rem'
	},
	buttonContainer: {
		marginRight: 'auto',
		marginLeft: 'auto'
	},
	testimonal: {
		marginTop: 100,
		marginBottom: 50
	},
	testimonialTitle: {
		width: '90%',
		paddingTop: '12%',
		marginLeft: 'auto',
		fontWeight: '500',
		fontSize: '3vw'
	},
	testimonialSubTitle: {
		width: '90%',
		marginTop: 'auto',
		marginBottom: 'auto',
		marginLeft: 'auto',
		fontWeight: '500',
		fontSize: '1.3vw',
		letterSpacing: 0.5
	},
	playButtonSm: {
		boxShadow: 'none',
		backgroundColor: '#ef5350'
	},
	heroImage: {
		justifyContent: 'flex-end'
	}
}));

export default function Home() {
	const classes = useStyles();
	return (
		<div className={classes.mainContainer}>
			<div className={classes.gradientBackground}>
				<div className={classes.container}>
					<Grid container>
						<Grid item md={5}>
							<div className={classes.heroTextContainer}>
								<Typography variant="h2" className={classes.heroText}>
									Own your <br />golf course <br /> -{' '}
									<span style={{ color: '#ef5350' }}> online.</span>
								</Typography>
								<Typography variant="body1" className={classes.landingText}>
									Get every golf course website feature you need and more. All in one place.
								</Typography>
								<br />
								<div className={classes.buttonContainer}>
									<Link to={'/demo'}>
										<Fab variant="extended" color="primary" className={classes.demobtn}>
											Get a Demo
										</Fab>
									</Link>
								</div>
							</div>
						</Grid>
						<Grid item md={7} style={{ display: 'flex' }}>
							<img
								className={classes.heroImg}
								width="100%"
								src="https://images.getbento.com/accounts/c831ea07f62fba23e7ea35e6b0f1c013/media/images/96361BentoBox-hero-lilia.png?w=1300&fit=max&auto=compress,format"
							/>
						</Grid>
					</Grid>
				</div>
			</div>
			<div className={classes.secondGradient}>
			<div className={classes.cards}>
				<Grid container spacing={3}>
					<Grid item sm={4}>
						<CustomCard
							img="https://images.getbento.com/accounts/c831ea07f62fba23e7ea35e6b0f1c013/media/images/37072websites-home.jpg?w=1024&fit=max&auto=compress,format"
							slogan="own your presence"
							title="Website Design"
							info="Grow margins with ordering, gift card, events and more"
						/>
					</Grid>
					<Grid item sm={4}>
						<CustomCard
							img="https://images.getbento.com/accounts/c831ea07f62fba23e7ea35e6b0f1c013/media/images/47989commerce-home3.jpg?w=1024&fit=max&auto=compress,format"
							slogan="own your profits"
							title="Commerce"
							info="Grow margins with ordering, gift card, events and more"
						/>
					</Grid>
					<Grid item sm={4}>
						<CustomCard
							img="https://images.getbento.com/accounts/c831ea07f62fba23e7ea35e6b0f1c013/media/images/19551support-home.jpg?w=1024&fit=max&auto=compress,format"
							slogan="own your connections"
							title="Tools & Services"
							info="Get full-service support, integrations and analytics anytime you need it"
						/>
					</Grid>
				</Grid>
			</div>
			<Grid container spacing={0} className={classes.testimonal}>
				<Grid item md={6}>
					<Typography variant="h4" className={classes.testimonialTitle} component="h4">
						GoCaddy empowers <br /> golf courses to succeed
					</Typography><br/>
					<Typography variant="body2" className={classes.testimonialSubTitle} component="p">
						<img
							src="https://images.getbento.com/accounts/c831ea07f62fba23e7ea35e6b0f1c013/media/images/62467playbutton-large.svg?w=40&fit=max&auto=compress,format" 
							alt="play-btn"
							width="30vw"
							style={{marginRight: 15, float:'left'}}
						/>	
						Hear From Our Customers
					</Typography>
				</Grid>
				<Grid item md={6}>
					<img
						style={{ float: 'right' }}
						width="100%"
						src="https://images.getbento.com/accounts/c831ea07f62fba23e7ea35e6b0f1c013/media/images/91910bento-video.jpg?w=1800&fit=max&auto=compress,format"
						alt="testimonial"
					/>
				</Grid>
			</Grid>
			</div>
		</div>
	);
}

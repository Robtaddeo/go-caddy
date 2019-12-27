import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
	card: {
		maxWidth: 400,
		textAlign: 'center',
		boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'
	},
	media: {
		height: 300
	},
	cardBody : {
		marginTop: '20',
		minHeight: 200,
	},
	slogan: {
		textTransform: 'uppercase',
		color: '#bdbdbd',
		fontWeight: 'bold',
		fontSize: '14px',
		letterSpacing: 1,
		fontWeight: '900'
	},
	cardTitle: {
		fontWeight: '700',
		fontSize: '2.5rem'
	},
	cardInfo: {
		fontWeight: '400',
		color: '#263238',
		paddingLeft: '3.5rem',
		paddingRight: '3.5rem',
		marginBottom: '20px',
		fontSize: '1.125rem',
		lineHeight: 1.3,
		wordSpacing: 0
	}
});

export default function MediaCard(props) {
	const classes = useStyles();

	return (
		<Card className={classes.card}>
			<CardActionArea>
				<CardMedia className={classes.media} image={props.img} title="card-img" />
				<CardContent className={classes.cardBody}>
					<Typography gutterBottom variant="h6" component="h4" className={classes.slogan}>
						{' '}
						{props.slogan}{' '}
					</Typography>{' '}
					<Typography gutterBottom variant="h4" component="h2" className={classes.cardTitle}>
						{' '}
						{props.title}{' '}
					</Typography>{' '}
					<Typography variant="body1" color="textSecondary" component="p" className={classes.cardInfo}>
						{' '}
						{props.info}{' '}
					</Typography>{' '}
				</CardContent>{' '}
			</CardActionArea>{' '}
		</Card>
	);
}

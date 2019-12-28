import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
	conatiner: {
		textAlign: 'center',
		display: 'flex'
	}
});

export default function NumberTile(props) {
	const classes = useStyles();

	return (
		<div className={classes.cardContainer}>
			<Typography
				variant="h1"
				component="h1"
				style={{
					textAlign: 'center',
                    color: '#0097a7',
                    fontSize: '15vh',
                    fontWeight: 500
				}}
			>
				{props.stat}
			</Typography>
			<Typography
				variant="h5"
                component="h5"
				style={{
                    textAlign: 'center',
                    marginTop: 0
				}}
			>
				{props.fact}
			</Typography>
		</div>
	);
}

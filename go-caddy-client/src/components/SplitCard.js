import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles({
	card: {
        borderTop: '7px solid #ff9800',
        boxShadow: 'box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
    },
    cardText: {
        margin: 'auto auto auto auto',
        paddingTop: 150,
        width: "80%",
        textAlign: 'left'
    },
    profileImg: {
        position: 'relative',
        borderRadius: '100px',
        height: 170,
        top: 90,
        left: -450
    }
});

export default function SplitCard(props) {
	const classes = useStyles();

	return (
		<div className={classes.container}>
            <img 
                src="https://images.getbento.com/accounts/c831ea07f62fba23e7ea35e6b0f1c013/media/images/19262Testimonial_Headshot_Bars.jpg?w=368&fit=max&auto=compress,format"
                alt="profileImg"
                className={classes.profileImg}
            />
			<Card className={classes.card}>
				<Grid container>
					<Grid item sm={6}>
						<div className={classes.cardText}>
                            <Typography
                                variant="h5" 
                                component="h5"
                                style={{fontWeight: 500, letterSpacing: 0.5}}
                                >
								"Bento Box has helped me realize that you can get in front of more people and they can
								get to know you before they even step foot in your space. That's the future of small
								business in this country."
							</Typography>
							<br />
							<br />
							<br />
							<Typography variant="body2" component="p">
								Zach Mack | Owner | Alphabet City Beer Co.
							</Typography>
						</div>
					</Grid>
					<Grid item sm={6}>
						<img
                            className={classes.imgOverlap}
							src="https://images.getbento.com/accounts/c831ea07f62fba23e7ea35e6b0f1c013/media/images/91732Testimonial_Screenshot_Bars.png?w=1400&fit=max&auto=compress,format"
							alt="laptop"
                            width="100%"
						/>
					</Grid>
				</Grid>
			</Card>
		</div>
	);
}

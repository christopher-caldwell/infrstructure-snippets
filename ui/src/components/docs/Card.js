import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles({
  root: {
    
  },
  media: {
		height: 100,
  },
});

export default function StationCard({ title, imageName, path }) {
  const classes = useStyles();

  return (
		<Grid item xs={3} component={Link} to={path}>
			<Card className={classes.root} >
				<CardActionArea>
					<CardMedia
						component="img"
						className={classes.media}
						image={require(`assets/images/${imageName}`)}
						title={title}
					/>
					<CardContent>
						<Typography gutterBottom variant="h6" component="h2">
							{ title }
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
		</Grid>
  );
}

StationCard.propTypes = {
	title: PropTypes.string,
	imageName: PropTypes.string,
	path: PropTypes.string,
}
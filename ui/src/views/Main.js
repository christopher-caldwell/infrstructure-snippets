import React from 'react';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';

import StationGrid from 'components/station/StationGrid'
import DocsGrid from 'components/docs/DocGrid'

const Main = () => {  
  return (
		<Grid container spacing={2}>
			<Grid container spacing={2} justify='center' className='station-cont'>
				<Grid item xs={12}>
					<Typography variant='h6' className='station-header'>
						Choose a station
					</Typography>
				</Grid>
				<Grid item xs={10}>
					<StationGrid/>
				</Grid>
			</Grid>
			<Grid container spacing={2} justify='center'>
				<Grid item xs={12} className='main-header-cont'>
					<Typography variant='h6' className='link-spacer'>
						Checkout the docs
					</Typography>
				</Grid>
				<Grid item xs={10}>
					<DocsGrid/>
				</Grid>
				<Grid/>
			</Grid>
		</Grid>
  );
};

export default Main;
import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/react-hooks';
import Table from 'components/table/Table'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Input from 'components/util/Input'

import useInput from 'hooks/useInput'

import { STATION_SONGS } from 'graph-ql/queries/station'

const MusicTracker = ({ queryParams }) => {
	const { stationId, stationName } =  queryParams

	const { loading, error, data } = useQuery(STATION_SONGS, {
    variables: { id: stationId }
  });

	const songs = data && data.station && data.station.songs || []
	
	console.log('data', data)
	const { value: searchTerm, bind: bindSearchTerm } = useInput("")
  return (
		<Grid container alignItems='center' justify='center' className='main-header-cont'>
			<Grid item xs={11}>
				<Grid container className='music-header'>
					<Grid item xs={6}>
						<Typography variant='h4'>
							{ stationName }
						</Typography>
					</Grid>
					<Grid item xs={6}>
					<Input bindTerm={bindSearchTerm}/>
					</Grid>
				</Grid>
				<Table items={songs} searchTerm={searchTerm} isLoading={loading}/>
			</Grid>
		</Grid>
  );
}

MusicTracker.propTypes = {
	queryParams: PropTypes.object,
}

export default MusicTracker
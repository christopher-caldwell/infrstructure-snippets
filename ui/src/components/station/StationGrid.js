import React from 'react'
import { useQuery } from '@apollo/react-hooks';
import Grid from '@material-ui/core/Grid'

import LoadingDisplay from 'components/util/Loading'
import StationCard from './Card'
import { STATIONS } from 'graph-ql/queries/station'

const getStations = data => {
	if(!data.loading){
		return data.stations
	} else return []
}

function StationGrid() {
	const { loading, error, data } = useQuery(STATIONS)
	if(loading){
		return (
			<LoadingDisplay/>
		)
	} else {
	return (
			<Grid container spacing={4} justify='space-between'>
				{data.stations.map(station => {
					console.log('station', station)
					return (
						<StationCard
							stationName={station.name}
							stationImageName={station.imageName}
							stationId={station.id}
							key={`station-${station.id}`}
						/>
					)
				})}
			</Grid>
		)
	}
}


export default StationGrid


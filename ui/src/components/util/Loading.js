import React from 'react'
import PropTypes from 'prop-types'
import BarLoader from './BarLoader'
import LinearProgress from '@material-ui/core/LinearProgress'
import Grid from '@material-ui/core/Grid'

const Loading = ({ isLinear }) => (
	<Grid container className='loading-container' justify='center'>
		<Grid item container justify='center' xs={2} >
			{isLinear ? ( <LinearProgress/> ) : ( <BarLoader /> )}
		</Grid>
	</Grid>
)

Loading.propTypes = {
	isLinear: PropTypes.bool,
}

export default Loading


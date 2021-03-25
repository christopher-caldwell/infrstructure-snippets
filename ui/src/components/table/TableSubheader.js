import React from 'react'
import PropTypes from 'prop-types'
import TableCell from '@material-ui/core/TableCell'
import Typography from '@material-ui/core/Typography'

function TableSubheader({ text }) {
	return (
		<TableCell align="center" colSpan={1} className='table-header'>
			<Typography variant='subtitle1'>
				{text}
			</Typography>
		</TableCell>
	)
}

TableSubheader.propTypes = {
	text: PropTypes.string,
}

export default TableSubheader


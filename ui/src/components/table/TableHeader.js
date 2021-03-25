import React from 'react'
import PropTypes from 'prop-types'
import TableCell from '@material-ui/core/TableCell'
import Typography from '@material-ui/core/Typography'

function TableSubheader({ text, colSpan, style, alignment='center' }) {
	return (
		<TableCell align={alignment} colSpan={colSpan} className='table-header'>
			<Typography variant='subtitle1' style={style}>
				{text}
			</Typography>
		</TableCell>
	)
}

TableSubheader.propTypes = {
	text: PropTypes.string.isRequired,
	colSpan: PropTypes.number.isRequired,
	alignment: PropTypes.string,
	style: PropTypes.object,
}

export default TableSubheader


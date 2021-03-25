import React, { useState, Fragment } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import TableHeader from 'components/table/TableHeader'
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination'
import TableRow from '@material-ui/core/TableRow'
import LinearProgress from '@material-ui/core/LinearProgress';


import TableSubHeader from 'components/table/TableSubheader'
import PaginationControls from './PaginationControls'
import TableBody from './TableBody'

import { tableHeaders, tableSubheaders } from 'data/tableHeaders'
import { Typography } from "@material-ui/core";


const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
		height: '68vh',
		position: 'relative'
  },
});

function MusicTable({ items, searchTerm, isLoading }) {
	const classes = useStyles()

	const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, items.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
	};

	const rowsToShow = rowsPerPage > 0
		? items.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
		: items
	if(isLoading){
		return (
			<Fragment>
				<LinearProgress/>
				<Typography gutterBottom variant='h4' className='loading-header'>
					Loading..
				</Typography>
			</Fragment>
		)
	} else {
		return (
			<Fragment>
				<TableContainer component={Paper} className={classes.container}>
					<Table stickyHeader aria-label="spanning table">
						<TableHead>
							<TableRow>
								{tableHeaders.map(({ text, colSpan, style={} }, index) => (
									<TableHeader text={text} colSpan={colSpan} style={style} key={`header-${index}`}/>
								))}
							</TableRow>
							<TableRow>
								{tableSubheaders.map((header, index) => (
									<TableSubHeader text={header} key={`subheader-${index}`}/>
								))}
							</TableRow>
						</TableHead>
						<TableBody  items={rowsToShow}/>
					</Table>
				</TableContainer>
				<TablePagination
					rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
					// colSpan={3}
					component="div"
					count={items.length}
					rowsPerPage={rowsPerPage}
					page={page}
					SelectProps={{
						inputProps: { 'aria-label': 'rows per page' },
						native: true,
					}}
					onChangePage={handleChangePage}
					onChangeRowsPerPage={handleChangeRowsPerPage}
					ActionsComponent={PaginationControls}
				/>
			</Fragment>
		)
	}
}

MusicTable.propTypes = {
	items: PropTypes.arrayOf(PropTypes.object),
	searchTerm: PropTypes.string,
	isLoading: PropTypes.bool
}

export default MusicTable


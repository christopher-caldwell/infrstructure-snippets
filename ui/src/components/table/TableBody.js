import React from 'react'
import PropTypes from 'prop-types'

import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'

const flattenSong = song => {
	const output = {}
	if(!song) {
		// song not initialized
		return {}
	}
		Object.keys(song).forEach(songProperty => {
			// console.log('property ============', songProperty)
			if (typeof song[songProperty] === 'object'){
				const nestedProperty = song[songProperty]
				for(let subProperty of Object.keys(nestedProperty)){
					// console.log('\n\nsub prop loop', subPropery)
					output[subProperty] = nestedProperty[subProperty]
				} 
			} else if(songProperty === 'id') {
				// don't want to make a col for the id
			} else {
				output[songProperty] = song[songProperty]
			}
		})
		return output
}


function Body({ items }) {
	return (
		<TableBody>
			{items.map((song, index) => (
				<TableRow key={`song-${index}`} style={{ position: 'relative' }}>
					{Object.values(flattenSong(song)).map((songProp, songPropIndex)  => (
						<TableCell 
							align='center' 
							className={`table-header ${songPropIndex === 0 ? 'first-cell' : null}`} 
							key={`song-${index}-prop-${songPropIndex}`}
						>
							{songProp ? songProp: '-'}
						</TableCell>
					))}
				</TableRow>
			))}
		</TableBody>
	)
}

TableCell.propTypes = {
	items: PropTypes.object,
}

export default Body


import React from 'react'
import Grid from '@material-ui/core/Grid'
import docs from 'data/docs' 

import DocCard from './Card'


function DocGrid() {
	return (
		<Grid container spacing={4} justify='space-between'>
			{docs.map(doc => {
				return (
					<DocCard
						imageName={doc.imageName}
						path={doc.path}
						title={doc.name}
						key={`station-${doc.id}`}
					/>
				)
			})}
		</Grid>
	)
}

export default DocGrid
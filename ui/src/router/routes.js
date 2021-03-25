import React from 'react'
import Home from '@material-ui/icons/Home'
import Songs from '@material-ui/icons/LibraryMusic'

export default [
	{
		icon: <Home />,
		routePath: '/',
		linkText: 'Home',
		id: 1,
	},
	{
		icon: <Songs />,
		routePath: '/music-tracker',
		linkText: 'Music Tracker',
		id: 2,
	},
]

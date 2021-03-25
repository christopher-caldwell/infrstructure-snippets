import React, { Fragment, Suspense, lazy } from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from 'components/header/Header'
import Main from 'views/Main'
import queryString from 'query-string'

const MusicTracker = lazy(() => import('views/music-tracker/MusicTracker'))

const Router = (props) => {
	return (
		<Fragment>
			<Header {...props} />
			<main className="main-cont">
				<Suspense fallback={<div>Loading..</div>}>
					<Switch>
						<Route
							path="/music-tracker"
							render={(routeProps) => (
								<MusicTracker
									queryParams={queryString.parse(routeProps.location.search)}
								/>
							)}
						/>
						<Route path="/" component={Main} />
					</Switch>
				</Suspense>
			</main>
		</Fragment>
	)
}

export default Router

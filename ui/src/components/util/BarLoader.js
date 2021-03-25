import React from 'react'
import 'styles/loading.sass'

function Loader() {
	return (
			<div className="spinner">
				<div className="r1"/>
				<div className="r2"/>
				<div className="r3"/>
				<div className="r4"/>
				<div className="r5"/>
				<div className="r6"/>
			</div>
	)
}

export default Loader


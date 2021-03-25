const db = require('../../config/db')

const fetchCallout = stationId => {
		return db.select(
			"breakout_name",
			"breakout_respondents",
			"song_id",
			"pop",
			db.raw('2_pop AS pop2'),
			"ptl",
			"unf",
			"neg",
			"ddl",
			"nop",
			"lik",
			"fav",
			"new_breakout",
			"rank",
			"custom_rank",
			"is_visible"
		)
		.from('data.cmm_callout')
		.leftJoin('application.breakout_lookup', db.raw('lower(data.cmm_callout.cmm_station_calls)'), db.raw('lower(application.breakout_lookup.station)'))
			.and(db.raw('LOWER("c"."breakout_name") = LOWER("b"."breakout") OR LOWER("c"."breakout_name") = LOWER("b"."new_breakout")'))
		.where('data.cmm_callout.station_id', stationId)
}

module.exports = fetchCallout
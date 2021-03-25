const db = require('../../config/db')

const fetchSpins = (stationId, startDate, endDate, songId) => {
		return db.select(
				"song_id", 
				"amd", 
				"mid", 
				"pmd", 
				"eve",
				"ovn",
				db.raw('"amd" + "mid" + "pmd" + "eve" AS "non_overnight"'),
				db.raw('ovn AS overnight')
			)
			.from('data.music_tracker')
			.where('station_id', stationId)
			.and('start_dt', startDate)
			.and('end_dt', endDate)
			.and('song_id', songId)
}

module.exports = fetchSpins
const db = require('../../config/db')

const fetchRankCallout = async (stationId, songId, weekEndDate) => {
	const testDate = await db
		.select( db.raw('MIN("test_date")'))
		.from('data.music_tracker')
		.where('station_id', stationId)
		.andWhere('song_id', songId)
		.andWhere('test_date', '>', weekEndDate)

	const callout = await db
		.select(
			"test_date", 
			"core_rank", 
			"core_pop", 
			"total_rank", 
			"total_pop"
		)
		.from('data.music_tracker')
		.where('station_id', stationId)
		.andWhere('test_date', testDate)
		.andWhere('song_id', songId)

	return callout
}

module.exports = fetchRankCallout
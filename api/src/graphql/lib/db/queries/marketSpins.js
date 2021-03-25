const db = require('../../config/db')

const fetchMarkets = (stationId, startDate, endDate, songId) => {
		return db.select(
			"total_market_spins",
			"total_spins"
		)
		.from('data.music_tracker')
		.where('station_id', stationId)
		.andWhere('start_dt', startDate)
		.andWhere('end_dt', endDate)
		.andWhere('song_id', songId)
}

module.exports = fetchMarkets

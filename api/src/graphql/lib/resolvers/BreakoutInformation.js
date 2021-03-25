// const db = require('../config/db')
const uncachedDataHandler = require('../db')

module.exports = {
	async breakOutInformation({ songId, stationId, weekStartDate }, { getFromCache, writeToCache }){
		const key = `song_${songId}_station_${stationId}_weekStartDate_${weekStartDate}`
		try {
			const result = await getFromCache(key)
			if(result){
				return JSON.parse(result)
			} else { 
				return uncachedDataHandler(songId, stationId, weekStartDate, writeToCache)
			}
		} catch(error) {
			console.log('error', error)
			throw new Error('oops')
		}
  },
}
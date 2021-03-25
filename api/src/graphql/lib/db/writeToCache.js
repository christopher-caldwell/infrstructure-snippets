const cacheTTLInSeconds = process.env.CACHE_TTL_IN_SECONDS

// option to use sync method and not await the result of writting to cache
const writeNewItemToCahce = (writeToCache, songId, stationId, weekStartDate, itemToWrite) => {
	const key = `song_${songId}_station_${stationId}_weekStartDate_${weekStartDate}`
	return writeToCache(key, JSON.stringify(itemToWrite), 'EX', cacheTTLInSeconds) // returns promise
}

module.exports = writeNewItemToCahce
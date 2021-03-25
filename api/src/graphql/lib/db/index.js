const parseAndFormatDate = require('../utils/formatDate')
const fetchUncachedData = require('./fetchUncachedBreakout')
const writeToCache = require('./writeToCache')

const uncachedDataHandler = async (songId, stationId, weekStartDate, writeToCahceHandler) => {
	const { sqlReadyStartDate, sqlReadyEndDate } = parseAndFormatDate(weekStartDate)
	const fetchedBreakout = await fetchUncachedData(songId, stationId, sqlReadyStartDate, sqlReadyEndDate)
	await writeToCache(writeToCahceHandler, songId, stationId, weekStartDate, fetchedBreakout)
	return fetchedBreakout
}

module.exports = uncachedDataHandler
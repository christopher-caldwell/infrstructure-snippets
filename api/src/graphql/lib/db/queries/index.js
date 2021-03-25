const CustomError = require('simple-lambda-actions/dist/util/ErrorHandler')

const calloutQuery = require('./callout')
const marketSpinsQuery = require('./marketSpins')
const rankCalloutQuery = require('./rankCallout')
const songQuery = require('./song')
const spinsQuery = require('./spins')


const performAllQueries = async (stationId, songId, startDate, endDate) => {
	try {
		const queriesResults = await Promise.all([
			calloutQuery(stationId),
			marketSpinsQuery(stationId, startDate, endDate, songId),
			rankCalloutQuery(stationId, songId, endDate),
			songQuery(songId),
			spinsQuery(stationId, startDate, endDate, songId)
		])
		return queriesResults
	} catch (error) {
		console.error('something went wrong in the queries execution: ', error)
		throw new CustomError({
			message: error.message,
			statusCode: error.statusCode || 500
		})
	}
}

module.exports = performAllQueries
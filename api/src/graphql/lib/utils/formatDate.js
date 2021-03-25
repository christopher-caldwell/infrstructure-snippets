const format = require('date-fns/format').default
const startOfWeek = require('date-fns/startOfWeek').default
const endOfWeek = require('date-fns/endOfWeek').default

const formatString = 'yyyy-MM-dd'
const weekStartsOn = 0 // sunday or `1` for monday

const findStartAndEndDates = targetDate => {
	if(typeof targetDate === 'string') {
		targetDate = new Date(targetDate)
	}
	const startDayOfWeek = startOfWeek(targetDate, { weekStartsOn })
	const lastDayOfWeek = endOfWeek(targetDate, { weekStartsOn })
	return {
		startDayOfWeek,
		lastDayOfWeek
	}
}

const formatStartAndEndDates = ({ startDayOfWeek, lastDayOfWeek }) => {
	const formattedStartDate = format(startDayOfWeek, formatString)
	const formattedEndDate = format(lastDayOfWeek, formatString)

	const sqlReadyStartDate = `${formattedStartDate} 00:00:00`
	const sqlReadyEndDate = `${formattedEndDate} 23:59:59`

	return {
		sqlReadyStartDate,
		sqlReadyEndDate
	}
}

const parseAndFormatDates = targetDate => {
	const startAndEndDates = findStartAndEndDates(targetDate)
	return formatStartAndEndDates(startAndEndDates)
}

module.exports = parseAndFormatDates
const breakoutResolvers = require('./BreakoutInformation')
const Date = require('./Date')

const resolvers = {
	...breakoutResolvers,
	Date
}

module.exports = resolvers

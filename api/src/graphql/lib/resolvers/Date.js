const { GraphQLScalarType, Kind } = require('graphql')

module.exports = new GraphQLScalarType({
	name: 'Date',
	description: 'Date custom scalar type',
	// value from the client
	parseValue(value) {
		console.log('parsing date');
		return new Date(value) 
	},
	// value sent to the client
	serialize(value) {
		return new Date(value) 
	},
})
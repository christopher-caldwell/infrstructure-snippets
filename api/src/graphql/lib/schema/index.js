const { buildSchema } = require('graphql')
const { breakoutSchema } = require('./Breakout')
const { breakoutInformationSchema, breakoutInformationQuery } = require('./BreakoutInformation')
const { popSchema } = require('./Pop')
const { spinsSchema } = require('./SpinData')
const { researchCategorySchema } = require('./ResearchCategory')

module.exports = buildSchema(`
	${breakoutSchema}
	${breakoutInformationSchema}
	${popSchema}
	${spinsSchema}
	${researchCategorySchema}
	scalar Date
	type Query {
		${breakoutInformationQuery}
	}
`)

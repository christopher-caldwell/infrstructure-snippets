const breakoutInformationSchema = `
	type BreakoutInformation {
		omt: ResearchCategory
		callout: ResearchCategory
	}
`

const breakoutInformationQuery = `
	breakOutInformation(songId: ID!, stationId: ID!, weekStartDate: Date): BreakoutInformation
`

module.exports = { breakoutInformationSchema, breakoutInformationQuery }
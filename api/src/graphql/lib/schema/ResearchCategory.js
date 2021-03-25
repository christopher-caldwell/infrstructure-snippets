const researchCategorySchema = `
	type ResearchCategory {
		rank: Pop,
		score: Pop,
		spins: SpinData
		breakouts(limit: Int): [Breakout]
	}
`

module.exports = { researchCategorySchema }
const breakoutSchema = `
	type Breakout {
		id: ID
		name: String
		newName: String
		rank: Int
		customRank: Int
		respondents: Int
		pop: Int
		_2pop: Int
		ptl: Int
		unf: Int
		neg: Int
		ddl: Int
		nop: Int
		lik: Int
		fav: Int
	}
`

module.exports = { breakoutSchema }
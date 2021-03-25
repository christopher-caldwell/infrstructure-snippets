const performQueries = require('./queries')

const testObj = {
	songId: 1,
	callout: {

	},
	omt: {
		rank: {
			corePop: 10,
			totalPop: 10,
	},
		score: {
				corePop: 10,
				totalPop: 10,
		},
		spins: {
				_6a12m: 10,
				_24hr: 10,
				totalStation: 10,
				totalMarket: 10,
		},
		breakouts: [
				{
						name: 'namae',
						newName: 'newName',
						rank: 10,
						customRank: 10,
						respondents: 10,
						pop: 10,
						_2pop: 10,
						ptl: 10,
						unf: 10,
						neg: 10,
						ddl: 10,
						nop: 10,
						lik: 10,
						fav: 10,
				},
				{
						name: 'namae',
						newName: 'newName',
						rank: 10,
						customRank: 10,
						respondents: 10,
						pop: 10,
						_2pop: 10,
						ptl: 10,
						unf: 10,
						neg: 10,
						ddl: 10,
						nop: 10,
						lik: 10,
						fav: 10,
				},
				{
						name: 'namae',
						newName: 'newName',
						rank: 10,
						customRank: 10,
						respondents: 10,
						pop: 10,
						_2pop: 10,
						ptl: 10,
						unf: 10,
						neg: 10,
						ddl: 10,
						nop: 10,
						lik: 10,
						fav: 10,
				},
				{
					name: 'namae',
					newName: 'newName',
					rank: 10,
					customRank: 10,
					respondents: 10,
					pop: 10,
					_2pop: 10,
					ptl: 10,
					unf: 10,
					neg: 10,
					ddl: 10,
					nop: 10,
					lik: 10,
					fav: 10,
			},
			{
				name: 'namae',
				newName: 'newName',
				rank: 10,
				customRank: 10,
				respondents: 10,
				pop: 10,
				_2pop: 10,
				ptl: 10,
				unf: 10,
				neg: 10,
				ddl: 10,
				nop: 10,
				lik: 10,
				fav: 10,
			},
		]
	}
}

const fetchUncachedBreakout = async (songId, stationId, startDate, endDate) => {
	// placeholder for db call
	console.log('fetching non cached data from db')
	try {
		// const queries = await performQueries(stationId, songId, startDate, endDate)
		return testObj
	} catch(error){
		console.error('error caught in queries', error)
		return testObj
	}
	
}

module.exports = fetchUncachedBreakout


























/***
 * 1. Get song details with songsSql
 * 2. Get spins 6am-12m and 24hr data with spinsSql for this week
 * 3. Get total spins for station with totalSql for this week and last week
 * 4. Get market spins for station and song with marketSql for this week
 * 5. Repeat steps 2 and 4 for last week
 * 6. Get callout data for song for this week with commonSql, breakoutSql
 * */




// const rankCalloutSql = [
// 	`SELECT "test_date", "core_rank", "core_pop", "total_rank", "total_pop"
// 	FROM data.music_tracker
// 	WHERE "station_id" = $1
// 	AND "test_date" = (
// 			SELECT MIN("test_date")
// 			FROM data.music_tracker
// 			WHERE "station_id" = $1 AND "song_id" = $2 AND "test_date" > $3
// 	)
// 	AND "song_id" = $2`
// ];

// // language=PostgreSQL - has more where clause while using this query
// const calloutSql = [
// 	`SELECT
// 			"c"."breakout_name",
// 			"c"."breakout_respondents",
// 			"c"."song_id",
// 			"c"."pop",
// 			"c"."2_pop" AS "pop2",
// 			"c"."ptl",
// 			"c"."unf",
// 			"c"."neg",
// 			"c"."ddl",
// 			"c"."nop",
// 			"c"."lik",
// 			"c"."fav",
// 			"b"."new_breakout",
// 			"b"."rank",
// 			"b"."custom_rank",
// 			"b"."is_visible"
// 	FROM "data"."cmm_callout" AS "c"
// 	LEFT JOIN "application"."breakout_lookup" AS "b" ON LOWER("c"."cmm_station_calls") = LOWER("b"."station")
// 			AND (LOWER("c"."breakout_name") = LOWER("b"."breakout") OR LOWER("c"."breakout_name") = LOWER("b"."new_breakout"))
// 	WHERE "c"."station_id" = $1`
// ];

// // language=PostgreSQL - costs 0.99 to 17.04 using explain
// const songSql = [`
// SELECT
// 	"s"."song_id",
// 	"s"."song_name",
// 	"a"."artist_name",
// 	"s"."song_image_url",
// 	"a"."artist_image_url"
// FROM "data"."songs" as "s" INNER JOIN "data"."artists" as "a" using ("artist_id")
// WHERE "s"."song_id" = $1`
// ];

// // language=PostgreSQL - cost 0.70 to 17.28 using explain
// const spinsSql =
// 	`SELECT "song_id", "amd", "mid", "pmd", "eve","ovn",
// 					"amd" + "mid" + "pmd" + "eve" AS "non_overnight",
// 					"ovn" AS "overnight"
// 			FROM data.music_tracker
// 			WHERE "station_id" = $1
// 			AND start_dt = $3
// 			AND end_dt = $4
// 			AND "song_id" = $2`;

// // language=PostgreSQL - costs 80 using explain
// const marketsSql =
// 	`SELECT "total_market_spins"
// 			FROM data.music_tracker
// 			WHERE "station_id" = $1
// 			AND start_dt = $3
// 			AND end_dt = $4
// 			AND "song_id" = $2`;

// // language=PostgreSQL - costs 13 using explain
// const totalSpinsSql =
// 	`SELECT "total_spins"
// 			FROM data.music_tracker
// 			WHERE "station_id" = $1
// 			AND start_dt = $3
// 			AND end_dt = $4
// 			AND "song_id" = $2`;

// const songConditionSql = [`AND song_id = $2`];

// const weekSql = [`and c.test_date = (select min(test_date) from data.cmm_callout where station_id = $1 and test_date > $3)`];
// const groupSql = [``];
// const orderSql = [`ORDER BY "b"."rank" ASC, "c"."breakout_respondents" desc, "c"."breakout_name" asc`];

// const rankCalloutSql = [
// 	`SELECT "test_date", "core_rank", "core_pop", "total_rank", "total_pop"
// 	FROM data.music_tracker
// 	WHERE "station_id" = $1
// 	AND "test_date" = (
// 			SELECT MIN("test_date")
// 			FROM data.music_tracker
// 			WHERE "station_id" = $1 AND "song_id" = $2 AND "test_date" > $3
// 	)
// 	AND "song_id" = $2`
// ];

// // language=PostgreSQL - has more where clause while using this query
// const calloutSql = [
// 	`SELECT
// 			"c"."breakout_name",
// 			"c"."breakout_respondents",
// 			"c"."song_id",
// 			"c"."pop",
// 			"c"."2_pop" AS "pop2",
// 			"c"."ptl",
// 			"c"."unf",
// 			"c"."neg",
// 			"c"."ddl",
// 			"c"."nop",
// 			"c"."lik",
// 			"c"."fav",
// 			"b"."new_breakout",
// 			"b"."rank",
// 			"b"."custom_rank",
// 			"b"."is_visible"
// 	FROM "data"."cmm_callout" AS "c"
// 	LEFT JOIN "application"."breakout_lookup" AS "b" ON LOWER("c"."cmm_station_calls") = LOWER("b"."station")
// 			AND (LOWER("c"."breakout_name") = LOWER("b"."breakout") OR LOWER("c"."breakout_name") = LOWER("b"."new_breakout"))
// 	WHERE "c"."station_id" = $1`
// ];

// // language=PostgreSQL - costs 0.99 to 17.04 using explain
// const songSql = [`
// SELECT
// 	"s"."song_id",
// 	"s"."song_name",
// 	"a"."artist_name",
// 	"s"."song_image_url",
// 	"a"."artist_image_url"
// FROM "data"."songs" as "s" INNER JOIN "data"."artists" as "a" using ("artist_id")
// WHERE "s"."song_id" = $1`
// ];

// // language=PostgreSQL - cost 0.70 to 17.28 using explain
// const spinsSql =
// 	`SELECT "song_id", "amd", "mid", "pmd", "eve","ovn",
// 					"amd" + "mid" + "pmd" + "eve" AS "non_overnight",
// 					"ovn" AS "overnight"
// 			FROM data.music_tracker
// 			WHERE "station_id" = $1
// 			AND start_dt = $3
// 			AND end_dt = $4
// 			AND "song_id" = $2`;

// // language=PostgreSQL - costs 80 using explain
// const marketsSql =
// 	`SELECT "total_market_spins"
// 			FROM data.music_tracker
// 			WHERE "station_id" = $1
// 			AND start_dt = $3
// 			AND end_dt = $4
// 			AND "song_id" = $2`;

// // language=PostgreSQL - costs 13 using explain
// const totalSpinsSql =
// 	`SELECT "total_spins"
// 			FROM data.music_tracker
// 			WHERE "station_id" = $1
// 			AND start_dt = $3
// 			AND end_dt = $4
// 			AND "song_id" = $2`;

// const songConditionSql = [`AND song_id = $2`];

// const weekSql = [`and c.test_date = (select min(test_date) from data.cmm_callout where station_id = $1 and test_date > $3)`];
// const groupSql = [``];
// const orderSql = [`ORDER BY "b"."rank" ASC, "c"."breakout_respondents" desc, "c"."breakout_name" asc`];
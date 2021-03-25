const { graphql } = require('graphql')
const redis = require("redis")
const { promisify } = require("util");
const Responder = require('simple-lambda-actions/dist/util/responseHandler')
const { bodyParser } = require('simple-lambda-actions/dist/util/formatter')

const { schema, resolvers } = require('./lib')

const client = redis.createClient({ host: process.env.CACHE_ENDPOINT });
const getFromCache = promisify(client.get).bind(client);
const writeToCache = promisify(client.set).bind(client);
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

client.set('song_19_station_1_weekStartDate_2020-02-12', JSON.stringify(testObj), 'EX', 100)

const corsUrl = process.env.CORS_URL

exports.handler = async event => {
	// console.log('event', event)
	const ResponseHandler = new Responder({corsUrl, httpMethod: event.httpMethod})
	const { query, variables, operationName } = bodyParser(event.body)
	const result = await graphql(schema, query, resolvers, { getFromCache, writeToCache } ,variables, operationName)
	if(!result.errors){
		return ResponseHandler.respond(result, 200)
	} else {
		console.log('error', result.errors[0])
		return ResponseHandler.respond(result.errors[0].message, 500)
	}
}

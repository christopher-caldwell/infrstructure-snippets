console.log('cache endpoint', process.env.CACHE_ENDPOINT)

const redis = require("redis")
const { promisify } = require("util")
const Responder = require('simple-lambda-actions/dist/util/responseHandler')
const client = redis.createClient({ host: process.env.CACHE_ENDPOINT })
const getAsync = promisify(client.get).bind(client)

const corsUrl = '*'

client.set('food', 'bars')

exports.handler = async event => {
  const ResponseHandler = new Responder({corsUrl, httpMethod: event.httpMethod})
  try {
    const testKey = await getAsync('food')
    return ResponseHandler.respond({ testKey }, 200)
  } catch (error) {
    return ResponseHandler.respond({}, 500)
  }
}
const db = require('./db')
const Responder = require('simple-lambda-actions/dist/util/responseHandler')
const corsUrl = '*'

exports.handler = async event => {
  const ResponseHandler = new Responder({corsUrl, httpMethod: event.httpMethod})
  try {
    const testKey = await db('test')
    return ResponseHandler.respond({ testKey }, 200)
  } catch (error) {
    return ResponseHandler.respond({}, 500)
  }
}
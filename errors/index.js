const CustomAPIError = require('./custom_api')
const UnauthenticatedError = require('./unauthenticated')
const NotFoundError = require('./not_found')
const BadRequestError = require('./bad_request')

module.exports = {
  CustomAPIError,
  UnauthenticatedError,
  NotFoundError,
  BadRequestError,
}
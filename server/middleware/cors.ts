export default defineEventHandler(async (event) => {
  // Set CORS headers for all requests
  setResponseHeaders(event, {
    'Access-Control-Allow-Methods': 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
    'Access-Control-Expose-Headers': '*',
    'Access-Control-Max-Age': '31536000',
    'Access-Control-Allow-Credentials': 'true'
  })

  // Handle preflight requests
  if (getMethod(event) === 'OPTIONS') {
    event.node.res.statusCode = 204
    event.node.res.end()
    return
  }

  // Continue with the request
  return
})
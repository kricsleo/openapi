export default defineEventHandler(event => {
  setResponseHeaders(event, {
    'Access-Control-Allow-Methods': 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Expose-Headers': '*',
    'Access-Control-Max-Age': '31536000',
  })

  if (getMethod(event) === 'OPTIONS') {
    event.node.res.statusCode = 200
    event.node.res.statusMessage = 'OK'
    return ''
  }
})
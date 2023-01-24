import { stringifyQuery } from 'ufo'
import { createError } from 'h3'

export default defineEventHandler(async event => {
  const { unsplash } = event.context.params
  const method = getMethod(event)
  const queryStr = stringifyQuery(getQuery(event))
  const headers = {
    Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`
  }
  const body = isMethod(event, 'GET') ? null : readRawBody(event, false) as unknown as Buffer
  const response = await fetch(`https://api.unsplash.com/${unsplash}?${queryStr}`, {
    method,
    headers,
    body
  })
  const data = await response.json()
  if(response.ok) {
    return data
  } else {
    const error = createError({
      statusCode: response.status,
      statusMessage: response.statusText,
      data
    })
    sendError(event, error)
  }
})

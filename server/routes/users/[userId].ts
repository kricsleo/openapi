export default defineEventHandler(async event => {
  const query = getQuery(event)

  return {
    retcode: 0,
    message: 'ok',
    data: {
      id: query.userId,
      firstName: 'Leo',
      LastName: 'Krics',
    }
  }
})
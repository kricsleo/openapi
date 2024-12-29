import { handleCors } from 'h3'

export default defineEventHandler(async (event) => {
  // const didHandleCors = handleCors(event, {
  //   origin: '*',
  //   preflight: {
  //     statusCode: 204,
  //   },
  //   methods: '*',
  // })
  // if(didHandleCors) return
})
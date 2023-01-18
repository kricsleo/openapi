import { UNSPLASH_ACCESS_KEY, UNSPLASH_LOCATION } from './constant';

export async function fetchUnspash(url: string) {
  const headers = new Headers()
  headers.set('Authorization', `Client-ID ${UNSPLASH_ACCESS_KEY}`)
  const response = await fetch(UNSPLASH_LOCATION + url, {
    headers: headers
  })
  const data = await response.json()
  return data
}

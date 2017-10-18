/* eslint-env node */
import Keen from 'keen-tracking'

/**
 * NOTE: To prevent anyone from creating collections, we whitelist what we track.
 */
const ALLOWED_COLLECTIONS = ['test-collection']

let clientInstance

export const _init = () => {
  if (!clientInstance) {
    clientInstance = new Keen({
      projectId: process.env.KEEN_PROJECT_ID,
      writeKey: process.env.KEEN_WRITE_KEY
    })
  }
  return clientInstance
}

export const _shouldAddEvent = collection =>
  ALLOWED_COLLECTIONS.indexOf(collection) > -1 &&
  process.env.NODE_ENV === 'production'

export const recordEvent = (collection, event) => {
  if (_shouldAddEvent(collection)) {
    const client = _init()
    client.recordEvent(collection, event)
  } else {
    console.log(
      `Event for collection ${collection} is not allowed: ${JSON.stringify(
        event
      )}`
    )
  }
}

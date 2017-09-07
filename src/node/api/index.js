import dropIn from './dropIn'
import config from './config'
import output from './output'

config
  .load()
  .storeForReactNative()

output
  .writeWelcomeMessage()

export default {
  dropIn,
  config,
}
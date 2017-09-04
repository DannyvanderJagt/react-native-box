import dropIn from './dropIn'
import config from './config'

config
  .load()
  .storeForReactNative()

export default {
  dropIn,
  config,
}
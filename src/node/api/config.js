import output from './output'
import fs from './fs'

export default {
  config: {},

  get(prop){
    return this.config[prop]
  },

  load(){
    try{
      config = require(`${process.cwd()}/box.config.js`)
    } catch (error){
      output.error('We could not find or read the box.config.js file!')
    }

    this.config = config
    return this
  },

  storeForReactNative(){
    fs.store('global.config', this.config)
  },

}
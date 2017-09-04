import fs from './fs'
import config from './config'
import output from './output'

export default {
  view(name){
    fs.store('dropin.config', {
      name,
      type: 'view',
    })
  },

  component( parsedName ){
    const name = parsedName.toLowerCase()
    const components = config.get('components')

    if(!components.routes[name]){
      output.error(`The component ${name} doesn\'t exists.`)
      return
    }

    fs.store('dropin.config', {
      name,
      type: 'component',
    })

    fs.store('dropin.component', components.routes[name])
    fs.store('dropin.presets', `${components.routes[name]}/presets.js`)
  },

  clear(){
    fs.store('dropin.config', {
      type: 'clear',
    })
  }
}
import path from 'path'
import fs from './fs'
import config from './config'
import output from './output'

export default {
  view(name){
    const views = config.get('views')

    if(!views.routes[name]){
      output.error(`The view ${name} isn't specified in the config.`)
      return this
    }

    fs.store('dropin.config', {
      name,
      type: 'view',
    })
    fs.store('dropin.component', views.routes[name])

    output.success(`The view ${name} has been dropped-in.`)
  },

  component( parsedName ){
    const name = parsedName.toLowerCase()
    const components = config.get('components')

    if(!components.routes[name]){
      output.error(`The component ${name} isn't specified in the config.`)
      return
    }

    fs.store('dropin.config', {
      name,
      type: 'component',
    })

    fs.store('dropin.component', components.routes[name].index)
    fs.store('dropin.presets', components.routes[name].presets)

    output.success(`The component preview ${name} has been dropped-in.`)
  },

  clear(){
    fs.store('dropin.config', {
      type: 'clear',
    })
  }
}
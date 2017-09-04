import fs from 'fs'
import path from 'path'

let config = require(`${process.cwd()}/box.config.js`)

config.name = config.name || 'Box'
config.color = config.color || 'magenta'

const paths = {
  config: path.join(process.cwd(), 'node_modules/react-native-box-cli/src/temp/config.js'),
  boxConfig: path.join(process.cwd(), 'node_modules/react-native-box-cli/src/temp/box-config.js'),
  component: path.join(process.cwd(), 'node_modules/react-native-box-cli/src/temp/component.js'),
  presets: path.join(process.cwd(), 'node_modules/react-native-box-cli/src/temp/presets.js'),
}



fs.writeFileSync(
  paths.boxConfig, 
  `export default ${JSON.stringify(config)}`
)



const api = {

  dropInComponent (name) {
    this.setConfig({
      name,
      type: 'component',
    })
    console.log('path', path.join('../../../../', config.components.mainDirectory, name, 'index.js'))
    this.setComponent(path.join('../../../../', config.components.mainDirectory, name, 'index.js'))
    this.setPresets(path.join('../../../../', config.components.mainDirectory, name, 'presets.js'))
  },

  dropInView (name) {
    if(config.views.routes[name] === undefined){
      console.log('View doesnt exists')
      return 
    }
    this.setConfig({
      type: 'view',
    })
    console.log('path', path.join('../../../../', config.views.routes[name]))
    this.setComponent(path.join('../../../../', config.views.routes[name]))
  },

  clear () {
    this.setConfig({
      type: 'clear',
      name: undefined,
    })
  },

  setConfig (data) {
    fs.writeFileSync(
      paths.config, 
      `export default ${JSON.stringify(data)}`
    )
  },

  setComponent (path) {
    fs.writeFileSync(
      paths.component,
      `export { default as default } from '${path}'`
    )
  },

  setPresets (path) {
    fs.writeFileSync(
      paths.presets,
      `export { default as default } from '${path}'`
    )
  },

}

export default api

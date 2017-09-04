import fs from 'fs'
import path from 'path'

const paths = {
  config: path.join(process.cwd(), 'node_modules/react-native-box-cli/src/temp/config.js'),
  component: path.join(process.cwd(), 'node_modules/react-native-box-cli/src/temp/component.js'),
  presets: path.join(process.cwd(), 'node_modules/react-native-box-cli/src/temp/presets.js'),
}

const api = {

  dropInComponent (name) {
    this.setConfig({
      name,
      type: 'component',
    })
    this.setComponent(`../../../../src/styleguide/components/${name}`)
    this.setPresets(`../../../../src/styleguide/components/${name}/presets.js`)
  },

  dropInView (type, name) {
    this.setConfig({
      type: 'view',
    })
    var relativePath = `../../../../src/app/${type}/scenes/${name}`
    this.setComponent(relativePath)
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

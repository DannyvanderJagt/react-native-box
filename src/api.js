import fs from 'fs'
import path from 'path'

console.log('process', process.cwd())
const paths = {
  config: path.join(process.cwd(), 'node_modules/react-native-box-cli/src/temp/config.js'),
  component: path.join(process.cwd(), 'node_modules/react-native-box-cli/src/temp/component.js'),
}

const api = {

  dropInComponent (name) {
    this.setConfig({
      name,
      type: 'component',
    })
  },

  dropInView (type, name) {
    this.setConfig({
      type: 'view',
    })
    var relativePath = `../../../../src/app/${type}/scenes/${name}`
    console.log(relativePath)
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

}

export default api

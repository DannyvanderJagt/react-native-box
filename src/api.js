import fs from 'fs'
import path from 'path'

console.log('process', process.cwd())
const paths = {
  config: path.join(process.cwd(), 'node_modules/react-native-box-cli/src/temp/config.js'),
  component: path.join(__dirname, 'node_modules/react-native-box-cli/src/temp/component.js'),
  previewer: path.join(__dirname, '/components/Previewer'),
}

const api = {

  dropInComponent (name) {
    this.setConfig({
      name,
      type: 'component',
    })
    this.setComponent(paths.previewer)
  },

  dropInView (type, name) {
    this.setConfig({
      type: 'view',
    })
    var relativePath = path.join(__dirname, `../../../app/${type}/scenes/${name}`)
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

import fs from 'fs'
import path from 'path'

export default {
  getPath: name => (
    path.join(process.cwd(), `node_modules/react-native-box-cli/src/temp/${name}.js`)
  ),

  types: {
    'dropin.config': {
      prepareForStorage: data => `export default ${JSON.stringify(data)}`,
    },
    'global.config': {
      prepareForStorage: data => `export default ${JSON.stringify(data)}`,
    },
    'dropin.component': {
      prepareForStorage: path => `export { default as default } from './../../../../${path}'`,
    },
    'dropin.presets': {
      prepareForStorage: path => `export { default as default } from './../../../../${path}'`,
    },
  },

  store(type, data){
    const { prepareForStorage } = this.types[type]
    const path = this.getPath(type)
    fs.writeFileSync(path, prepareForStorage(data))
  }
}
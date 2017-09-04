import fs from 'fs'
import path from 'path'

export default {
  getPath: name => (
    path.join(process.cwd(), `node_modules/react-native-box-cli/src/temp/${name}.js`)
  ),

  types: {
    'dropin.config': {
      prepareForStorage: data => JSON.stringify(data),
    },
  },

  store(type, data){
    const { prepareForStorage } = this.types[type]
    const path = this.getPath(type)
    fs.writeFileSync(path, prepareForStorage(data))
  }
}
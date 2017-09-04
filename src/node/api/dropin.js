import fs from './fs'

export default {
  component(name){
    fs.store('dropin.config', {
      name,
      type: 'component',
    })
  },

  view(name){
    fs.store('dropin.config', {
      name,
      type: 'view',
    })
  },

  clear(){
    fs.stoer('dropin.clear', {
      type: 'clear',
    })
  }
}